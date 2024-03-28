import React, { useState } from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import ReadAllBooks from './ReadAllBooks';
import FirstListedBooks from '../ListedBooksLayout/FirstListedBooks';
import useWishlistLocalStorage from '../../Hooks/useWishlistLocalStorage';
import WishlistShow from './WishlistShow';

const ListedBooks = () => {
    const { localData } = useLocalStorage();
    const { wishlistDatas } = useWishlistLocalStorage();
    const [showReadBooks, setShowReadBooks] = useState(true); // Set default to show "Read" data
    const [showWishlistBooks, setShowWishlistBooks] = useState(false);

    // Function to sort data by rating in descending order
    const sortByRatingDesc = (data) => {
        return data.slice().sort((a, b) => b.rating - a.rating);
    };

    // Sort data before rendering
    const sortedLocalData = sortByRatingDesc(localData);

    // Log wishlist data to the console
    console.log(wishlistDatas);

    return (
        <div>
            <FirstListedBooks setShowReadBooks={setShowReadBooks} setShowWishlistBooks={setShowWishlistBooks} />
            <div>
                {showReadBooks && sortedLocalData.map((data) => (
                    data.bookId && <ReadAllBooks key={data.bookId} data={data} />
                ))}
                {showWishlistBooks && wishlistDatas.map((wishlistData) => (
                    <WishlistShow key={wishlistData.bookId} wishlistData={wishlistData} />
                ))}
            </div>
        </div>
    );
};

export default ListedBooks;
