import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [nameError, setNameError] = useState("");
    const [error, setError] = useState("");
    const { createUser, setUser, updateUser, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Welcome to WarmPaws");
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
            return;
        } else {
            setNameError("");
        }

        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            setError("Password must include at least one uppercase, one lowercase letter, and be at least 6 characters long.");
            return;
        } else {
            setError("");
        }

        createUser(email, password)
            .then((result) => {
                toast.success("Welcome to WarmPaws");
                const user = result.user;
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({
                            ...user,
                            displayName: name,
                            photoURL: photo
                        });
                        navigate("/");
                    })
                    .catch((error) => {
                        setUser(error);
                    });
            })
            .catch(() => {
                setError("User already exists, please login to your account or create a new account.");
            });
    };

    return (
        <div className='flex justify-center items-center bg-orange-50 p-10'>
            <div className='bg-orange-100 rounded-3xl p-6 sm:p-10 w-full max-w-lg lg:max-w-xl shadow-md'>
                <h2 className='text-xl sm:text-2xl text-orange-700 pb-1 pt-4 sm:pt-6'>Welcome <span className='text-xl font-bold text-black'>to</span></h2>
                <h2 className='pb-5 text-2xl sm:text-4xl font-bold'>
                    <span className='text-orange-400'>WarmPaws</span>
                </h2>

                <form onSubmit={handleRegister} className='space-y-3 mt-6'>
                    {/* Name */}
                    <input
                        className='input w-full rounded-3xl focus:outline-none focus:border-orange-300 p-2 sm:p-3'
                        placeholder='Name'
                        type='text'
                        required
                        name='name'
                    />
                    {nameError && <p className='text-red-500 text-sm font-semibold'>{nameError}</p>}

                    {/* Photo URL */}
                    <input
                        className='input w-full rounded-3xl focus:outline-none focus:border-orange-300 p-2 sm:p-3'
                        placeholder='Photo-URL'
                        type='url'
                        required
                        name='photo'
                    />

                    {/* Email */}
                    <input
                        className='input w-full rounded-3xl focus:outline-none focus:border-orange-300 p-2 sm:p-3'
                        placeholder='Email'
                        type='email'
                        required
                        name='email'
                    />

                    {/* Password */}
                    <input
                        className='input w-full rounded-3xl focus:border-orange-300 focus:outline-none p-2 sm:p-3'
                        placeholder='Password'
                        type='password'
                        required
                        name='password'
                    />
                    {error && <p className='text-red-500 text-sm font-semibold'>{error}</p>}

                    <button className='btn w-full bg-orange-400 text-white hover:bg-orange-300 hover:text-white rounded-3xl py-2 sm:py-3'>
                        Register
                    </button>

                    <div className='flex items-center justify-center mt-3'>
                        <div className='flex-1 h-px bg-gray-300'></div>
                        <span className='px-4 text-gray-600 text-sm'>or</span>
                        <div className='flex-1 h-px bg-gray-300'></div>
                    </div>

                    <button
                        onClick={handleGoogleSignUp}
                        type='button'
                        className='btn w-full bg-white hover:bg-orange-400 hover:text-white rounded-3xl py-2 sm:py-3 flex items-center justify-center gap-2'>
                        <FcGoogle size={20} /> Continue with Google
                    </button>

                    <p className='text-sm pt-4 text-center'>
                        Already have an account?{" "}
                        <Link className='text-orange-400 hover:text-orange-300' to='/auth/login'>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
