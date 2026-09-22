"use client";
import { Ibook } from '@/types/BookType';
import React, { useContext } from 'react';
import { BooksContext } from "@/contexts/BooksContext";
import { toast } from 'react-toastify';

const WishlistBtn = ({book } : {book : Ibook}) => {
    const {  wishlist, setWishist } = useContext(
       BooksContext as unknown as React.Context<{
           wishlist: Ibook[];
          setWishist: React.Dispatch<React.SetStateAction<Ibook[]>>;
       }>
    );

    const handleAddToWishlist = () => {
        console.log(book , " Addad to Wishlist");

        setWishist([... wishlist , book]);
        toast.success(`you've  added ${book.bookName} successfully`);
       
        
    }
    return (
         <button className="btn btn-primary px-8" onClick={() => handleAddToWishlist()}>
           Add To Wishlist
        </button>
    );
};

export default WishlistBtn;