import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const Privaterouter = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    if(!user){
        return <Navigate to='/auth/login'></Navigate>
    }
    return children;
};

export default Privaterouter;