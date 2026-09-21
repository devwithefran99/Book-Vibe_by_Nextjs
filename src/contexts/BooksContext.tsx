"use client";

import React, { createContext, ReactNode, useState } from 'react';

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishlist, setWishist] = useState([]);

    const SharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishist
    };

    return (
        <BooksContext.Provider value={SharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;