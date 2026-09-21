"use client" ;
import React, { useContext } from 'react';
import { BooksContext } from '@/contexts/BooksContext';

const ListedBooksPage = () => {
    const { readBooks , wishlist } = useContext(BooksContext) ;
   
    
    return (
        <div>
            Total Read Books : {readBooks.length} <br /> 
            Total Added Books : {wishlist.length}
        </div>
    );
};

export default ListedBooksPage;