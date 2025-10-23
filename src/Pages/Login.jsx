import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    let { login } = useContext(AuthContext);
    let location = useLocation();
    let navigate = useNavigate();

    let handleLogin = (e) => {
        e.preventDefault();
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        login(email, password)
            .then((result) => {
                result.user;
                toast.success("Successfully logged in");
                navigate(`${location.state? location.state : "/"}`);
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };
    return (
        <div className='flex justify-center items-center text-center'>
            <div className='bg-orange-50 rounded-4xl p-10'>
                <h2 className='text-xl text-orange-700 pb-1'>Welcome Back</h2>
                <h2 className='pb-5'>to <span className='text-4xl font-bold'>Warm<span className='text-orange-400'>Paws</span></span></h2>
                <div>
                    <form onSubmit={handleLogin} className='space-y-3'>
                        {/* email */}
                        <input className='input w-full rounded-4xl  focus:outline-none focus:border-orange-300' placeholder='Email' type="email" name="email" id="" />
                        {/* password */}
                        <input className='input w-full rounded-4xl focus:border-orange-300 focus:outline-none' placeholder='Password' type="password" name="password" id="" />
                        <p className='text-start text-sm underline pl-2 text-orange-400 hover:text-orange-300'>Forget Password?</p>
                        <button type="submit" className='btn w-full bg-orange-400 text-white hover:bg-orange-300  hover:text-white rounded-4xl'>Login</button>
                        <div className='flex items-center justify-center'>
                            <div className='flex-1 h-px bg-gray-300'></div>
                            <span className='px-4 text-gray-600 text-sm'>or</span>
                            <div className='flex-1 h-px bg-gray-300'></div>
                        </div>
                        <button className='btn w-full bg-white hover:bg-orange-400  hover:text-white rounded-4xl'><FcGoogle></FcGoogle> Continue with Google</button>
                        <p className='text-sm pt-5'>Don't have an account yet? <Link className="text-orange-400 hover:text-orange-300" to="/auth/register">Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;