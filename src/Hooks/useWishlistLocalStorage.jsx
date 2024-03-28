import React, { useEffect, useState } from 'react';

import { getFromWishlistLocalStorage } from '../utils/wishlistLocalStorage';

const useWishlistLocalStorage = () => {
    const [wishlistDatas, setWishlistDatas] = useState([])
    // console.log(localData)
    useEffect(()=>{
        setWishlistDatas(getFromWishlistLocalStorage())
    },[])
    return {wishlistDatas};
};

export default useWishlistLocalStorage;