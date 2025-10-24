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
        <div className='flex justify-center items-center text-center'>
            <div className='bg-orange-50 rounded-4xl p-10 w-[600px]'>
                <h2 className='text-xl text-orange-700 pb-1'>Welcome to</h2>
                <h2 className='pb-5'>
                    <span className='text-4xl font-bold'>
                        Warm<span className='text-orange-400'>Paws</span>
                    </span>
                </h2>
                <div>
                    <form onSubmit={handleRegister} className='space-y-3'>
                        {/* Name */}
                        <input className='input w-full rounded-4xl focus:outline-none focus:border-orange-300' placeholder='Name' type='text' required name='name' />
                        {nameError && <p className='text-red-500 text-sm font-semibold'>{nameError}</p>}

                        {/* Photo URL */}
                        <input className='input w-full rounded-4xl focus:outline-none focus:border-orange-300' placeholder='Photo-URL' type='url' required name='photo' />

                        {/* Email */}
                        <input className='input w-full rounded-4xl focus:outline-none focus:border-orange-300' placeholder='Email' type='email' required name='email' />

                        {/* Password */}
                        <input className='input w-full rounded-4xl focus:border-orange-300 focus:outline-none' placeholder='Password' type='password' required name='password' />
                        {error && <p className='text-red-500 text-sm font-semibold'>{error}</p>}

                        {/* Button */}
                        <button className='btn w-full bg-orange-400 text-white hover:bg-orange-300 hover:text-white rounded-4xl'>Register</button>

                        <div className='flex items-center justify-center'>
                            <div className='flex-1 h-px bg-gray-300'></div>
                            <span className='px-4 text-gray-600 text-sm'>or</span>
                            <div className='flex-1 h-px bg-gray-300'></div>
                        </div>

                        {/* Google Button */}
                        <button
                            onClick={handleGoogleSignUp}
                            type='button'
                            className='btn w-full bg-white hover:bg-orange-400 hover:text-white rounded-4xl'
                        >
                            <FcGoogle /> Continue with Google
                        </button>

                        <p className='text-sm pt-5'>
                            Already have an account?{" "}
                            <Link className='text-orange-400 hover:text-orange-300' to='/auth/login'>
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
