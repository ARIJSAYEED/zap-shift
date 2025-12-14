import React from 'react';
import Logo from '../Components/Logo';
import Loginform from '../Pages/Login/Loginform';
import AuthImage from '../assets/authimage.png'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-[1600px] mx-auto grid grid-cols-2'>
            <div>
                <div className='p-16'>
                    <Logo></Logo>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='bg-[#FAFDF0] min-h-screen flex justify-center items-center' >
                <img src={AuthImage} alt="" />
            </div>
        </div>
    );
};

export default AuthLayout;