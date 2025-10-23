import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <div className='bg-orange-50 rounded-4xl p-10 w-[600px]'>
                <h2 className='text-xl text-orange-700 pb-1'>Welcome to</h2>
                <h2 className='pb-5'><span className='text-4xl font-bold'>Warm<span className='text-orange-400'>Paws</span></span></h2>
                <div>
                    <form className='space-y-3'>
                        {/* email */}
                        <input className='input w-full rounded-4xl  focus:outline-none focus:border-orange-300' placeholder='Name' type="text" name="" id="" />
                        {/* photo url */}
                        <input className='input w-full rounded-4xl  focus:outline-none focus:border-orange-300' placeholder='Photo-URL' type="url" name="" id="" />
                        {/* email */}
                        <input className='input w-full rounded-4xl  focus:outline-none focus:border-orange-300' placeholder='Email' type="email" name="" id="" />
                        {/* password */}
                        <input className='input w-full rounded-4xl focus:border-orange-300 focus:outline-none' placeholder='Password' type="password" name="" id="" />
                        {/* button */}
                        <button className='btn w-full bg-orange-400 text-white hover:bg-orange-300  hover:text-white rounded-4xl'>Register</button>
                        <div className='flex items-center justify-center'>
                            <div className='flex-1 h-px bg-gray-300'></div>
                            <span className='px-4 text-gray-600 text-sm'>or</span>
                            <div className='flex-1 h-px bg-gray-300'></div>
                        </div>
                        <button className='btn w-full bg-white hover:bg-orange-400  hover:text-white rounded-4xl'><FcGoogle></FcGoogle> Continue with Google</button>
                        <p className='text-sm'>Already have an account? <Link className="text-orange-400 hover:text-orange-300" to="/auth/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;