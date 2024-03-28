import React from 'react';

const ShowAllCategory = ({ item }) => {
    const {
        bookId,
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
        birthDate,
        authorImage
    } = item || {};

    return (
        <div>
            <div className="flex mt-10 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
                <img src={authorImage} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{author}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-400">Birth Date: {birthDate}</p>
                        <p className="px-5 text-xs sm:text-base text-gray-400">Book: {bookName}</p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <h2 className="text-xl font-semibold sm:text-2xl">Book Rating : {rating}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAllCategory;
