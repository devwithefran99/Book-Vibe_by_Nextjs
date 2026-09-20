
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-100 p-5">
        
        {/* Category */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          {book.category}
        </span>

        <img
          src={book.image}
          alt={book.bookName}
          className="h-full w-auto rounded-md object-cover shadow-md transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Rating */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-500">
            <span>★</span>
            <span className="font-semibold">{book.rating}</span>
          </div>

          <span className="text-sm text-gray-400">
            ({book.totalPages} pages)
          </span>
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          By <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="text-sm font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700">
            View Details
          </button>

        </div>
      </div>
    </div>
  );
};

export default BookCard;

