import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='max-w-[1600px] pt-9 mx-auto px-12 space-y-9 bg-[#EAECED]'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;