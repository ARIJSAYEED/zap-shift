import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Howitworks from './Howitworks';
import Ourservices from './Ourservices';

const Home = () => {
    return (
        <div className='space-y-16'>
            <Banner></Banner>
            <Howitworks></Howitworks>
            <Ourservices></Ourservices>
            <Brands></Brands>
        </div>
    );
};

export default Home;