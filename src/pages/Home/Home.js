import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contactus from './Contactus';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div className=' '>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;