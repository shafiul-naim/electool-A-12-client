import React from 'react';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;