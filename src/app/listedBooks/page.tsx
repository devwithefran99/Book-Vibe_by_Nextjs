"use client" ;
import React, { useContext } from 'react';
import { BooksContext } from '@/contexts/BooksContext';

const ListedBooksPage = () => {
    const { readBooks } = useContext(BooksContext) as { readBooks: unknown };
    console.log(readBooks , " read Books");
    
    return (
        <div>
            listed Book
        </div>
    );
};

export default ListedBooksPage;