import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    let [nameError, setNameError] = useState("");
    let { createUser, setUser, updateUser } = useContext(AuthContext);
    let navigate = useNavigate();

    let handleRegister = (e) => {
        e.preventDefault();

        let form = e.target;
        let name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 character");
            return;
        }
        else {
            setNameError("");
        };

        let email = form.email.value;
        let photo = form.photo.value;
        let password = form.password.value;
        console.log(name, photo)

        createUser(email, password)
            .then((result) => {
                toast.success("Welcome to WarmPaws");
                let user = result.user;
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({
                            ...user, displayName: name,
                            photoURL: photo
                        });
                    })
                    .catch((error) => {
                        setUser(error)
                    });
                navigate("/");
            })
            .catch(error => {
                toast.error("User already exist please login your account", error);
            });

    };
    return (
        <div className='flex justify-center items-center text-center'>
            <div className='bg-orange-50 rounded-4xl p-10 w-[600px]'>
                <h2 className='text-xl text-orange-700 pb-1'>Welcome to</h2>
                <h2 className='pb-5'><span className='text-4xl font-bold'>Warm<span className='text-orange-400'>Paws</span></span></h2>
                <div>
                    <form onSubmit={handleRegister} className='space-y-3'>
                        {/* name */}
                        <input className='input w-full rounded-4xl  focus:outline-none focus:border-orange-300' placeholder='Name' type="text" required name="name" id="" />
                        {
                            nameError && <p className='text-red-500 text-sm font-semibold'>{nameError}</p>
                        }
                        {/* photo url */}
                        <input className='input w-full rounded-4xl  focus:outline-none focus:border-orange-300' placeholder='Photo-URL' type="url" required name="photo" id="" />
                        {/* email */}
                        <input className='input w-full rounded-4xl  focus:outline-none focus:border-orange-300' placeholder='Email' type="email" required name="email" id="" />
                        {/* password */}
                        <input className='input w-full rounded-4xl focus:border-orange-300 focus:outline-none' placeholder='Password' type="password" required name="password" id="" />
                        {/* button */}
                        <button className='btn w-full bg-orange-400 text-white hover:bg-orange-300  hover:text-white rounded-4xl'>Register</button>
                        <div className='flex items-center justify-center'>
                            <div className='flex-1 h-px bg-gray-300'></div>
                            <span className='px-4 text-gray-600 text-sm'>or</span>
                            <div className='flex-1 h-px bg-gray-300'></div>
                        </div>
                        <button type="submit" className='btn w-full bg-white hover:bg-orange-400  hover:text-white rounded-4xl'><FcGoogle></FcGoogle> Continue with Google</button>
                        <p className='text-sm pt-5'>Already have an account? <Link className="text-orange-400 hover:text-orange-300" to="/auth/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;