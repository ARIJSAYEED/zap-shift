import React from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const links = <>
        <Link to='/services'>services</Link>
        <Link to='/coverage'>coverage</Link>
        <Link to='/about-us'>about us</Link>
        <Link>pricing</Link>
        <Link>blog</Link>
        <Link>contact</Link>
    </>
    return (
        <div className='px-28 py-20 rounded-4xl bg-black space-y-8 mb-12'>
            <div className='text-white flex flex-col justify-center items-center text-center space-y-4'>
                <Logo></Logo>
                <p className='text-[16px] font-thin'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br />business shipments — we deliver on time, every time.</p>
            </div>
            <div className='border-b border-dashed border-[#03464D]'></div>
            <ul className="text-white flex flex-wrap gap-5 capitalize justify-center items-center">
                {links}
            </ul>
            <div className='border-b border-dashed border-[#03464D]'></div>
            <div className='flex flex-wrap gap-6 justify-center items-center'>
                <div className='bg-primary text-[#03464D] p-2 rounded-full'>
                    <FaLinkedinIn></FaLinkedinIn>
                </div>
                <div className='bg-primary text-[#03464D] p-2 rounded-full'>
                    <FaXTwitter></FaXTwitter>
                </div>
                <div className='bg-primary text-[#03464D] p-2 rounded-full'>
                    <FaFacebookF></FaFacebookF>
                </div>
                <div className='bg-primary text-[#03464D] p-2 rounded-full'>
                    <FaYoutube></FaYoutube>
                </div>
            </div>
        </div>
    );
};

export default Footer;