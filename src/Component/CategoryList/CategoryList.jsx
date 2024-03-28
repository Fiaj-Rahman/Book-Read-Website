import React from 'react';
import useBookListData from '../../Hooks/useBookListData';
import CardDefault from '../Card/CardDefault';
import '../Banner/Banner.css';
const CategoryList = () => {
    const {data, loading} = useBookListData();
    
    return (
        <div className='FullCard my-10 mx-auto max-w-7xl'>
            {
                data.map((item)=>(<CardDefault key={data.bookId} item={item}></CardDefault>))
            }
        </div>
    );
};

export default CategoryList;