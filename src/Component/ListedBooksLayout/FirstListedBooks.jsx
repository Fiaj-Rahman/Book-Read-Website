// import { Button } from '@material-tailwind/react';
// import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const FirstListedBooks = () => {

//   const [tabIndex,setTabIndex] = useState(0)

//     return (
//        <div>
//          <div>
//             <h1 className='text-center font-bold text-4xl bg-blue-gray-200 mt-12 mb-10 py-10 max-w-7xl mx-auto rounded-lg'>Books</h1>
//         </div>

//         <div className='mx-auto max-w-7xl text-center mt-10 mb-10 '>
//             <details className="dropdown">
//   <summary className="m-1 btn  bg-red-600 text-white mt-10">Sort By</summary>
//   <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//     <li><a>Rating</a></li>
//     <li><a>Number of pages</a></li>
//     <li><a>Published Year</a></li>
//   </ul>
// </details>
//         </div>

//         {/* tabs */}

//         <div className="flex -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap text-black">
// 	<Link to={''} onClick={()=>setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?'border border-b-0' : 'border-b'} border-gray-400 text-black justify-start`}>
// 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
// 			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
// 		</svg>
// 		<span>Read</span>
// 	</Link>


// 	<Link to={`wishlist`} onClick={()=>setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?'border border-b-0' : 'border-b'} border-gray-400 text-black justify-start`}>
// 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
// 			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
// 			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
// 		</svg>
// 		<span>Wishlist</span>
// 	</Link>

// </div>
// <Outlet/>

//        </div>

        
//     );
// };

// export default FirstListedBooks;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Banner/Banner.css';
// import { IoMdPeople } from "react-icons/io";
// import { MdOutlineContactPage } from "react-icons/md";

// const FirstListedBooks = ({ setTabIndex, tabIndex }) => {
  
//     return (
//         <div>
//             <div>
//                 <h1 className='text-center font-bold text-4xl bg-blue-gray-200 mt-12 mb-10 py-10 max-w-7xl mx-auto rounded-lg'>Books</h1>
//             </div>

//             <div className='mx-auto max-w-7xl text-center mt-10 mb-10 '>
//                 <details className="dropdown">
//                     <summary className="m-1 btn  bg-red-600 text-white mt-10">Sort By</summary>
//                     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                         <li><a>Rating</a></li>
//                         <li><a>Number of pages</a></li>
//                         <li><a>Published Year</a></li>
//                     </ul>
//                 </details>
//             </div>


//             <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  text-gray-100">
// 	<Link to={''} onClick={()=>setTabIndex(0)} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-black">
// 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
// 			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
// 		</svg>
// 		<span>Read</span>
// 	</Link>
// 	<Link rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400 text-gray-50">
// 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
// 			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
// 			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
// 		</svg>
// 		<span>Wishlist</span>
// 	</Link>
	
// </div>



//         </div>
//     );
// };

// export default FirstListedBooks;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Banner/Banner.css';
// import { IoMdPeople } from "react-icons/io";
// import { MdOutlineContactPage } from "react-icons/md";

// const FirstListedBooks = () => {
//     const [tabIndex, setTabIndex] = useState(0);

//     return (
//         <div>
//             <div>
//                 <h1 className='text-center font-bold text-4xl bg-blue-gray-200 mt-12 mb-10 py-10 max-w-7xl mx-auto rounded-lg'>Books</h1>
//             </div>

//             <div className='mx-auto max-w-7xl text-center mt-10 mb-10 '>
//                 <details className="dropdown">
//                     <summary className="m-1 btn  bg-red-600 text-white mt-10">Sort By</summary>
//                     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                         <li><a>Rating</a></li>
//                         <li><a>Number of pages</a></li>
//                         <li><a>Published Year</a></li>
//                     </ul>
//                 </details>
//             </div>

//             <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  text-gray-100">
//                 <Link to={''} onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 border-gray-400 text-black' : 'border-b  rounded-t-lg border-gray-400 text-black'}`}>
//                     <IoMdPeople />
//                     <span>Read</span>
//                 </Link>
//                 <Link to={'wishlist'} onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 border-gray-400 text-black' : ' border-b  rounded-t-lg border-gray-400 text-black'}`}>
//                     <MdOutlineContactPage />
//                     <span>Wishlist</span>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default FirstListedBooks;





// FirstListedBooks.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Banner/Banner.css';
import { IoMdPeople } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";

const FirstListedBooks = ({ setShowReadBooks, setShowWishlistBooks }) => {
    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-4xl bg-blue-gray-200 mt-12 mb-10 py-10 max-w-7xl mx-auto rounded-lg'>Books</h1>
            </div>

            <div className='mx-auto max-w-7xl text-center mt-10 mb-10 '>
                <details className="dropdown">
                    <summary className="m-1 btn  bg-red-600 text-white mt-10">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </details>
            </div>

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  text-gray-100">
                <Link to={''} onClick={() => { setShowReadBooks(true); setShowWishlistBooks(false); }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0  border-gray-400 text-black">
                    <IoMdPeople />
                    <span>Read</span>
                </Link>
                <Link to={'wishlist'} onClick={() => { setShowWishlistBooks(false); setShowReadBooks(false); }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b rounded-t-lg border-gray-400 text-black">
                    <MdOutlineContactPage />
                    <span>Wishlist</span>
                </Link>
            </div>
        </div>
    );
};

export default FirstListedBooks;
