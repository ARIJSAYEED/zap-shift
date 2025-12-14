import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUserAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Components/SocialLogin';

const Registerform = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();

    const handleRegister = (data) => {

        console.log(data.photo[0]);

        registerUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className='max-w-md space-y-5 mb-28'>
            <div>
                <h1 className='text-[42px] font-extrabold'>Create An Account</h1>
                <p className='text-[16px] font-medium'>Register with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className='fieldset *:w-full'>

                    {/* image  */}
                    <input 
                    className='file-input' 
                    type="file"
                    {...register("photo")}
                     />

                    {/* name  */}
                    <label className='label text-[14px] font-medium text-black'>Name</label>
                    <input
                        className="input"
                        type="text"
                        placeholder='Name'
                        {...register("name")}
                    />

                    {/* email  */}
                    <label className='label text-[14px] font-medium text-black'>Email</label>
                    <input
                        className='input'
                        type="text"
                        placeholder='Email'
                        {...register("email", { required: true })}
                    />
                    {
                        errors.email?.type === "required" && (
                            <p className='text-red-500 font-bold'>This field is required</p>
                        )
                    }
                    {/* password  */}
                    <label className='label text-[14px] font-medium text-black'>Password</label>
                    <input
                        className='input'
                        type="password"
                        placeholder='Password'
                        {...register("password", { required: true })}
                    />
                    {
                        errors.password?.type === "required" && (
                            <p className='text-red-500 font-bold'>This field is required</p>
                        )
                    }
                    <button className='btn btn-primary text-black text-[14px] font-medium rounded-md'>Register</button>
                </fieldset>
                <div>
                    <p className='text-[16px] font-normal text-neutral-500'>Already have an account? <Link to='/auth/login' className='link link-hover text-[#8FA748]'>login</Link></p>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>
    );
};

export default Registerform;