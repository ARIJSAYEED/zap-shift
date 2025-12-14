import React from 'react';
import useAuth from '../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const { signinwithgoogle } = useAuth();
    const navigate = useNavigate();
    
    const handleGoogleLogin = () => {
        signinwithgoogle()
            .then(res => {
                console.log(res.user);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <p className='text-[16px] font-normal text-center text-neutral-500'>Or</p>
            <div>
                <button onClick={handleGoogleLogin} className='btn bg-[#E6F2F3] w-full rounded-md text-[14px] font-medium text-black'>
                    <FcGoogle></FcGoogle>
                    Login with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;