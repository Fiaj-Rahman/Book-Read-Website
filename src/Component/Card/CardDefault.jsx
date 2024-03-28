// import React from 'react';
// import '../Banner/Banner.css';
// import { CiStar } from "react-icons/ci";
// import { Link } from 'react-router-dom';

// const CardDefault = ({ item }) => {
//     const {
//         bookId,
//         bookName,
//         author,
//         image,
//         review,
//         totalPages,
//         rating,
//         category,
//         tags,
//         publisher,
//         yearOfPublishing
//     } = item || {};

//     return (

//        <Link to={`/book-details/${bookId}`}>
//         <div className="card w-96 bg-base-100 shadow-xl mx-auto max-w-7xl mt-10 mb-10">
            
//             <figure><img src={image} alt={bookName} className='cardImage' /></figure>
//             <div className="card-body">
//                 <div className='flex justify-between mb-2'>
//                 {tags && tags.map((tag, index) => (
//                         <div key={index} className="badge badge-outline">{tag}</div>
//                     ))}
//                 </div>
//                 <h2 className="card-title">{bookName}</h2>
//                 <p>By : {author}</p>
//                 <div className="card-actions flex justify-between mt-4">
//                     <div className="badge badge-outline">{category}</div>

//                     <div className='flex justify-center align-center text-center gap-2'>
//                         <h1>{rating}</h1>
//                         <h1 className='text-2xl font-bold'><CiStar /></h1>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//        </Link>
//     );
// };

// export default CardDefault;
