import React from "react";

import { Ibook } from "@/types/BookType";
import BookCard from './../../components/BookCard';

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-10">

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Explore All Books
        </h1>

        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          Discover your next favorite book from our carefully selected
          collection.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book : Ibook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>

    </section>
  );
};

export default Books;