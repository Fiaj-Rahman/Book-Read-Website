import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-auto max-w-7xl bg-brown-100 mt-10">
            <div className="card-body">
          <h2 className="card-title mt-12 text-center flex justify-center align-center text-5xl font-extrabold">Books to freshen up <br /> your bookshelf</h2>
          
          <div className="card-actions ">
            <Link to={"/ListedBooks"} className='text-center mx-auto my-12 text-2xl bg-orange-900 text-white rounded-lg p-2'>View the List</Link>
            {/* <button className="btn btn-primary mx-auto my-10">View the List</button> */}
          </div>
        </div>
        <figure><img src="/To Kill a Mockingbird.webp" alt="Album" className='image p-7 rounded-lg'/></figure>
        
      </div>
    );
};

export default Banner;