import React from 'react';
import logo from '../assets/logo.png'


const Logo = () => {
    return (
        <div className='flex items-end'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='-ml-3'>
                <h1 className='text-3xl text-logotext font-extrabold'>ZapShift</h1>
            </div>
        </div>
    );
};

export default Logo;