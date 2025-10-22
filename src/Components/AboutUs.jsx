import React from 'react';
import logo from "../assets/petLogo.png"

const AboutUs = () => {
    return (
        <div className='w-11/12 mx-auto bg-orange-100 px-10'>
            <img className='w-[150px] mx-auto pt-5 ' src={logo} alt="" />
            <h2 className='text-3xl font-bold text-center pb-5 '>About <span className='text-orange-600'>Us</span></h2>
            <h2 className='text-4xl font-semibold text-center pb-5 '>Welcome to Warm<span className='text-orange-600'>Paws</span></h2>
            <p className='pb-20 text-orange-400'><span className='text-2xl font-bold text-black'>Warm</span><span className='text-orange-600 text-2xl font-bold'>Paws</span> – Your Pet’s Cozy Winter Companion

                WarmPaws is a dedicated online platform designed to help pet owners care for their furry friends during the colder months. Our mission is to ensure that pets stay warm, healthy, and happy, no matter how chilly the weather gets.
                <br />
                <br />
                On WarmPaws, users can:

                Discover Winter Pet Care Tips: Learn how to protect your pets from the cold, maintain their health, and provide the right nutrition during winter.

                Explore Local Services: Find nearby groomers, veterinary clinics, and pet-friendly businesses that offer winter-specific services.

                Shop Winter Essentials: Browse winter clothing, paw protection products, and cozy bedding designed to keep pets comfortable.

                Stay Informed with Expert Advice: Access guides, articles, and videos from pet care professionals on seasonal wellness.

                With a friendly, intuitive interface, WarmPaws makes winter pet care simple, practical, and enjoyable. From playful puppies to senior cats, we’re here to ensure every pet experiences a safe and warm winter.</p>
        </div>
    );
};

export default AboutUs;