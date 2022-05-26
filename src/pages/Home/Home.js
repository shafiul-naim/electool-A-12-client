import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div className=' px-12 max-w-7xl mx-auto'>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;