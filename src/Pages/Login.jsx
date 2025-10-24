import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
const auth = getAuth(app);

const Login = () => {
    const emailRef = useRef();
    const [error, setError] = useState("");
    const { login, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            setError("Please enter your email first before resetting the password.");
            toast.error("Please enter your email first.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent. Please check your inbox.");
                setError("");
            })
            .catch((error) => {
                setError("Failed to send password reset email. Please try again.");
                console.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Successfully logged in!");
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(() => {
                toast.success("Successfully logged in!");
                setError("");
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className='flex justify-center items-center text-center'>
            <div className='bg-orange-50 rounded-4xl p-10'>
                <h2 className='text-xl text-orange-700 pb-1 pt-10'>Welcome Back</h2>
                <h2 className='pb-3'>
                    to <span className='text-5xl font-bold'>Warm<span className='text-orange-400'>Paws</span></span>
                </h2>

                <div>
                    <form onSubmit={handleLogin} className='space-y-3 pt-20 w-[600px] h-[500px]'>
                        {/* Email */}
                        <input
                            ref={emailRef}
                            className='input w-full rounded-4xl focus:outline-none focus:border-orange-300'
                            placeholder='Email'
                            type='email'
                            name='email'
                            required/>

                        {/* Password */}
                        <input
                            className='input w-full rounded-4xl focus:border-orange-300 focus:outline-none'
                            placeholder='Password'
                            type='password'
                            name='password'
                            required/>

                        {error && (
                            <p className='text-red-500 text-sm font-semibold'>User does not exist. Please enter a valid email and password or create an account.</p>
                        )}

                        {/* Forget Password */}
                        <p
                            onClick={handleForgetPassword}
                            className='text-start text-sm underline cursor-pointer pl-2 text-orange-400 hover:text-orange-300'>
                            Forget Password?
                        </p>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='btn w-full bg-orange-400 text-white hover:bg-orange-300 hover:text-white rounded-4xl'>
                            Login
                        </button>

                        <div className='flex items-center justify-center'>
                            <div className='flex-1 h-px bg-gray-300'></div>
                            <span className='px-4 text-gray-600 text-sm'>or</span>
                            <div className='flex-1 h-px bg-gray-300'></div>
                        </div>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleLogin}
                            type='button'
                            className='btn w-full bg-white hover:bg-orange-400 hover:text-white rounded-4xl'>
                            <FcGoogle /> Continue with Google
                        </button>

                        <p className='text-sm pt-5'>
                            Don't have an account yet?{" "}
                            <Link className='text-orange-400 hover:text-orange-300' to='/auth/register'>
                                Create an account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
