import React from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import { LuArrowUpRight } from 'react-icons/lu';
import useAuth from '../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const handleSignOut = () => {
        logOut()
    }
    const links = <>
        <NavLink
            to='/services'
            className='p-2 rounded-sm'
        >
            services
        </NavLink>

        <NavLink
            to='/coverage'
            className='p-2 rounded-sm'
        >
            coverage
        </NavLink>

        <NavLink
            to='/about-us'
            className='p-2 rounded-sm'
        >
            about us
        </NavLink>

        <NavLink
            to='/pricing'
            className='p-2 rounded-sm'
        >
            pricing
        </NavLink>

        <NavLink
            to='/blog'
            className='p-2 rounded-sm'
        >
            blog
        </NavLink>

        <NavLink
            to='/contact'
            className='p-2 rounded-sm'
        >
            contact
        </NavLink>
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
                    <div>
                        <Logo></Logo>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 capitalize">
                        {links}
                    </ul>
                </div>
                {
                    user ?

                        <div className="navbar-end capitalize">
                            <Link onClick={handleSignOut} className="btn bg-primary ml-3">sign out</Link>
                        </div>
                        :
                        <div className="navbar-end capitalize">
                            <Link to='/auth/login' className="btn border-neutral-300">sign in</Link>
                            <Link to='/auth/register' className="btn bg-primary ml-3">sign up</Link>
                            <Link to='/auth/register' className="btn text-primary text-3xl p-1 rounded-full bg-secondary">
                                <LuArrowUpRight />
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default NavBar;