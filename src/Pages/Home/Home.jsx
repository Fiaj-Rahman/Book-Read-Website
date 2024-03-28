import React from 'react';
import Banner from '../../Component/Banner/Banner';
import CategoryList from '../../Component/CategoryList/CategoryList';
import BooksTitle from '../../Component/Card/BooksTitle';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BooksTitle/>
            <CategoryList/>
        </div>
    );
};

export default Home;