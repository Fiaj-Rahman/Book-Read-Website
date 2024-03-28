import React from 'react';
import useBookListData from '../../Hooks/useBookListData';
import ShowAllCategory from './ShowAllCategory';

const Category = () => {
    // Fetch book list data using the useBookListData hook
    const { data, loading } = useBookListData();
    
    return (
        <div>
            {/* Header */}
            <div>
                <h1 className='text-center font-bold text-5xl p-12 bg-blue-gray-100 mt-5'>All Writer Profile Details Here</h1>
            </div>
            
            {/* Render book list */}
            <div className='FullCard my-10 mx-auto max-w-7xl'>
                {data.map((item) => (
                    // Render ShowAllCategory component for each book item
                    <ShowAllCategory key={item.bookId} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Category;
