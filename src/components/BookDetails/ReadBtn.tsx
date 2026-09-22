"use client";
import { Ibook } from '@/types/BookType';
import React, { useContext } from 'react';
import { BooksContext } from "@/contexts/BooksContext";
import { toast } from 'react-toastify';

const ReadBtn = ({book } : {book : Ibook}) => {
    const { readBooks, setReadBooks } = useContext(
       BooksContext as unknown as React.Context<{
          readBooks: Ibook[];
          setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
       }>
    );

    const handleReadBook = () => {
        console.log("handleReadBook trigerd", book);

        setReadBooks([...readBooks , book]);
        toast.success(`you've read ${book.bookName}`);
       
        
    }
    return (
         <button className="btn btn-primary px-8" onClick={() => handleReadBook()}>
          Read Book
        </button>
    );
};

export default ReadBtn;