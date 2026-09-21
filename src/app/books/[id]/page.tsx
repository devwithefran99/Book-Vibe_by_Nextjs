import ReadBtn from '@/components/BookDetails/ReadBtn';
import { Ibook } from '@/types/BookType';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params : Promise< {
        id : string
    }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};


const BookDetailsPage = async ( {params} : IBookDetailsPageProps) => {

    const {id} = await params;
    const Booksdata = await getBooks();
    const book = Booksdata.find((book : Ibook) => String(book.bookId) === String(id)) as Ibook

    console.log(book)
    return (
       <div className="container mx-auto px-4">
  <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">

    {/* Book Image */}
    <figure className="lg:w-2/5 bg-base-200 p-6">
      <Image
        src={book.image}
        alt={book.bookName}
        width={500}
        height={600}
        className="w-full max-w-sm mx-auto h-[420px] object-contain rounded-lg shadow-md"
      />
    </figure>

    {/* Book Information */}
    <div className="card-body lg:w-3/5">

      {/* Category + Year */}
      <div className="flex flex-wrap gap-2">
        <span className="badge badge-primary badge-outline">
          {book.category}
        </span>

        <span className="badge badge-ghost">
          Published {book.yearOfPublishing}
        </span>
      </div>

      {/* Book Name */}
      <h2 className="card-title text-3xl font-bold mt-2">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="text-base-content/70">
        By <span className="font-semibold text-base-content">{book.author}</span>
      </p>

      {/* Rating */}
      <div className="flex items-center gap-3 mt-2">
        <div className="rating rating-sm">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name={`rating-${book.bookId}`}
              className="mask mask-star-2 bg-orange-400"
              aria-label={`${star} star`}
              checked={Math.round(book.rating) === star}
              readOnly
            />
          ))}
        </div>

        <span className="font-semibold">
          {book.rating}/5
        </span>
      </div>

      <div className="divider my-1"></div>

      {/* Review */}
      <p className="text-base-content/75 leading-relaxed line-clamp-4">
        {book.review}
      </p>

      {/* Book Details */}
      <div className="grid grid-cols-2 gap-3 mt-3">

        <div className="bg-base-200 rounded-lg p-3">
          <p className="text-xs text-base-content/60">Pages</p>
          <p className="font-bold">{book.totalPages}</p>
        </div>

        <div className="bg-base-200 rounded-lg p-3">
          <p className="text-xs text-base-content/60">Publisher</p>
          <p className="font-bold">{book.publisher}</p>
        </div>

      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {book.tags.map((tag: string) => (
          <span
            key={tag}
            className="badge badge-neutral badge-outline"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <div className="card-actions gap-2 justify-end mt-4">
        <ReadBtn book= { book} />
         <button className="btn btn-primary px-8">
         Wishlist
        </button>
      </div>

    </div>
  </div>
</div>
    );
};

export default BookDetailsPage;