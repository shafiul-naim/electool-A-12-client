import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;