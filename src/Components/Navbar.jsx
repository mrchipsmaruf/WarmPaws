import React from 'react';
import { NavLink } from 'react-router';
import logo from "../assets/petLogo.png"
import userImage from "../assets/user.jpeg"

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-around gap-100 items-center pt-10'>
            <div className='flex items-center gap-3'>
                <img className='w-[70px]' src={logo} alt="" />
                <p className='font-semibold text-2xl'>Warm<span className='text-orange-400'>Paws</span></p>
            </div>
            <div className='flex gap-10'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/myProfile">My Profile</NavLink>
            </div>
            <div className='flex items-center gap-5'>
                <img className='w-full h-[40px]' src={userImage} alt="" />
                <button className='btn'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;