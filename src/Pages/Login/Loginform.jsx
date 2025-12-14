import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Components/SocialLogin';

const Loginform = () => {

    const { register, handleSubmit } = useForm();
    const { signInUser } = useAuth();

    const handleLogin = (data) => {

        console.log(data);

        signInUser(data.email, data.password)
            .then(res => {
                console.log(`${data.email} logged in successfully`, res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }

    

    return (
        <div className='max-w-md space-y-5'>
            <div>
                <h1 className='text-[42px] font-extrabold'>Welcome Back</h1>
                <p className='text-[16px] font-medium'>Login with Zapshift</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className='fieldset'>
                    {/* email  */}
                    <label className='label text-[14px] font-medium text-black'>Email</label>
                    <input
                        className='input'
                        type="text"
                        placeholder='Email'
                        {...register('email')}
                    />

                    {/* password  */}
                    <label className='label text-[14px] font-medium text-black'>Password</label>
                    <input
                        className='input'
                        type="password"
                        placeholder='Password'
                        {...register('password')}
                    />

                    <div>
                        <a className='text-[16px] font-normal text-neutral-500 link'>Forgot Password</a>
                    </div>
                    <button className='btn btn-primary text-black text-[14px] font-medium rounded-md'>Login</button>
                </fieldset>
                <div>
                    <p className='text-[16px] font-normal text-neutral-500'>Don't have any account <Link to='/auth/register' className='link link-hover text-[#8FA748]'>Register</Link></p>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>
    );
};

export default Loginform;