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
        <div className='flex justify-center items-center bg-orange-50 p-10'>
            <div className='bg-orange-100 rounded-3xl p-6 sm:p-10 w-full max-w-md shadow-md'>
                <h2 className='text-xl sm:text-2xl text-orange-700 pb-1 pt-4 sm:pt-6'>Welcome Back</h2>
                <h2 className='pb-3 text-2xl sm:text-4xl font-bold'>
                    to <span className='text-orange-400'>WarmPaws</span>
                </h2>

                <form onSubmit={handleLogin} className='space-y-3 mt-6'>
                    {/* Email */}
                    <input
                        ref={emailRef}
                        className='input w-full rounded-3xl focus:outline-none focus:border-orange-300 p-2 sm:p-3'
                        placeholder='Email'
                        type='email'
                        name='email'
                        required
                    />

                    {/* Password */}
                    <input
                        className='input w-full rounded-3xl focus:border-orange-300 focus:outline-none p-2 sm:p-3'
                        placeholder='Password'
                        type='password'
                        name='password'
                        required
                    />

                    {error && (
                        <p className='text-red-500 text-sm font-semibold'>{error}</p>
                    )}

                    <p
                        onClick={handleForgetPassword}
                        className='text-start text-sm underline cursor-pointer pl-2 text-orange-400 hover:text-orange-300'>
                        Forget Password?
                    </p>

                    <button
                        type='submit'
                        className='btn w-full bg-orange-400 text-white hover:bg-orange-300 hover:text-white rounded-3xl py-2 sm:py-3'>
                        Login
                    </button>

                    <div className='flex items-center justify-center mt-3'>
                        <div className='flex-1 h-px bg-gray-300'></div>
                        <span className='px-4 text-gray-600 text-sm'>or</span>
                        <div className='flex-1 h-px bg-gray-300'></div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        type='button'
                        className='btn w-full bg-white hover:bg-orange-400 hover:text-white rounded-3xl py-2 sm:py-3 flex items-center justify-center gap-2'>
                        <FcGoogle size={20} /> Continue with Google
                    </button>

                    <p className='text-sm pt-4 text-center'>
                        Don't have an account yet?{" "}
                        <Link className='text-orange-400 hover:text-orange-300' to='/auth/register'>
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
