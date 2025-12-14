import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';


const Logo = () => {
    return (
        <Link to='/'>
        <div className='flex items-end text-xl'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='-ml-3'>
                <h1 className='text-3xl text-logotext font-extrabold'>ZapShift</h1>
            </div>
        </div>
        </Link>
    );
};

export default Logo;