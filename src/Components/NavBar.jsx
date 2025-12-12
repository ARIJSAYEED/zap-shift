import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router';
import { LuArrowUpRight } from 'react-icons/lu';

const NavBar = () => {
    const links = <>
        <li><NavLink>services</NavLink></li>
        <li><NavLink>coverage</NavLink></li>
        <li><NavLink>about us</NavLink></li>
        <li><NavLink>pricing</NavLink></li>
        <li><NavLink>blog</NavLink></li>
        <li><NavLink>contact</NavLink></li>
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 shadow-sm rounded-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow capitalize">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Logo></Logo>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 capitalize">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end capitalize">
                    <a className="btn border-neutral-300">sign in</a>
                    <a className="btn bg-primary ml-3">sign up</a>
                    <a className="btn text-primary text-3xl p-1 rounded-full bg-secondary">
                        <LuArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;