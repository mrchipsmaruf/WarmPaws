import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/petLogo.png"
import userImage from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-around gap-20 items-center pt-3 bg-white'>
            <div className='flex items-center gap-3'>
                <img className='w-[70px]' src={logo} alt="" />
                <p className='font-semibold text-2xl'>Warm<span className='text-orange-400'>Paws</span></p>
            </div>
            <div className='flex gap-10'>
                <NavLink className={"hover:text-orange-300"} to="/">Home</NavLink>
                <NavLink className={"hover:text-orange-300"} to="/services">Services</NavLink>
                <NavLink className={"hover:text-orange-300"} to="/myProfile">My Profile</NavLink>
            </div>
            <div className='flex items-center gap-5'>
                <img className='w-full h-[40px]' src={userImage} alt="" />
                <Link to="/auth/login" className="btn btn-neutral btn-outline">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;