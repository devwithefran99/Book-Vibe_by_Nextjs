"use client" ;
import React, { useContext } from 'react';
import { BooksContext } from '@/contexts/BooksContext';
import BookCard from '@/components/BookCard';
import { Ibook } from '@/types/BookType';

const ListedBooksPage = () => {
    const { readBooks , wishlist } = useContext(BooksContext) ;
   
    
    return (
        <div className='container mx-auto py-12'>
            <h2 className='my-4 bg-amber-100 rounded py-14 font-bold text-4xl text-center'>Listed Books Below</h2>
           {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books ${readBooks.length}`}  defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
      readBooks.length > 0 ?  readBooks.map((book : Ibook) => {
            return <BookCard  key = {book.bookId} book={book} />
        }) : <p className='text-center font-bold'>No read books found</p>
    }
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label={`wishlist ${wishlist.length}`} />
  <div className="tab-content bg-base-100 border-base-300 p-6">
     {
       wishlist.length > 0 ? wishlist.map((book : Ibook) => {
            return <BookCard  key = {book.bookId} book={book} />
        }) :  <p className='text-center font-bold'>No Books Added to Wishlist</p>
    }
  </div>

</div>
        </div>
    );
};

export default ListedBooksPage;