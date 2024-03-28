import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBookListData from '../../Hooks/useBookListData';
import { saveToLocalStorage } from '../../utils/localStorage';
import { saveToWishlistLocalStorage } from '../../utils/wishlistLocalStorage';

const BookDetailsPage = () => {

    const [singleData,setSingleData] = useState({});

    const {bookId} = useParams();
    const {data,loading} = useBookListData();
    // saveToWishlistLocalStorage

    const handleReadBookSave = () => {
        saveToLocalStorage(singleData);
    }

    const handleReadBookSaveWishlist = () => {
        saveToWishlistLocalStorage(singleData);
    }

    useEffect(()=>{
            if(data){
                const singleData = data.find((item)=>item.bookId == bookId)
            // console.log(singleData);
            setSingleData(singleData);
            }
    },[data, bookId]);

    const {
        
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = singleData || {};

    return (
        <div className="card card-side bg-base-100 shadow-xl mx-auto max-w-6xl mt-12 bg-blue-gray-300">
        <figure><img src={image} alt="Movie" className='cardImage p-5'/></figure>
        <div className="card-body">
          <h2 className="card-title text-center">{bookName}</h2>
          <p>By : {author}</p>
          <hr />

          <p>{category}</p>
          
            <hr />
            <div className='mb-2'></div>

            <p className='mb-4'>Review : {review}</p>
            
            <div className='flex justify-between mt-3 mb-2 FullCardDetails'>
            <span className='font-bold'>Tag</span> 
                {tags && tags.map((tag, index) => (
                    
                        <div key={index} className="badge badge-outline">#{tag}</div>
                    ))}
            </div>
            
            <table className='mt-4 mb-4'>
                <tr className='p-3'>
                    <td>Number of Pages : </td>
                    <td className='font-bold'>{totalPages}</td>
                </tr>

                <tr className='p-3'>
                    <td>Publisher : </td>
                    <td className='font-bold'>{publisher}</td>
                </tr>

                <tr className='p-3'>
                    <td>Year of Publishing : </td>
                    <td className='font-bold'>{yearOfPublishing}</td>
                </tr>

                <tr className='p-3'>
                    <td>Rating : </td>
                    <td className='font-bold'>{rating}</td>
                </tr>

            </table>

          <div className="card-actions">
            <button onClick={handleReadBookSave} className="btn btn-primary" >Read</button>
            <button onClick={handleReadBookSaveWishlist} className="btn btn-info">Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetailsPage;