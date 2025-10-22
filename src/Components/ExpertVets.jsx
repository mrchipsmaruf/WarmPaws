import React from 'react';
import drjoseph from "../assets/drJoseph.jpg"
import emly from "../assets/drsarah.jpg"
import micale from "../assets/drmicale.jpg"

const ExpertVets = () => {
    return (
        <div className='bg-orange-50'>
            <h2 className='text-3xl font-bold text-center pt-15 pb-15'>Meet Our <span className='text-orange-600'>Expert Vets</span></h2>
            <div className='grid grid-cols-3 gap-10 text-center pb-20'>
                <div className='flex flex-col items-center gap-3'>
                    <img className='w-[350px] rounded-4xl pb-3' src={drjoseph} alt="" />
                    <h2 className='text-2xl font-semibold text-orange-600 pb-3'>Dr. Joseph Thompson - Canine Specialist</h2>
                    <p className='text-gray-500'>Over 10 years of experience in dog health and nutrition.</p>
                    <p className='text-gray-500'>Expert in winter coat care and paw protection.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <img className='w-[350px] rounded-4xl pb-3' src={micale} alt="" />
                    <h2 className='text-2xl font-semibold text-orange-600 pb-3'>Dr. Michael Lee - Feline & Small Pets Expert</h2>
                    <p className='text-gray-500'>Specializes in grooming, diet, and winter care for cats and small pets.</p>
                    <p className='text-gray-500'>Focuses on stress-free veterinary care and comfort during colder months.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <img className='w-[350px] rounded-4xl pb-3' src={emly} alt="" />
                    <h2 className='text-2xl font-semibold text-orange-600 pb-3'>Dr. Emily Carter - Veterinary Nutritionist</h2>
                    <p className='text-gray-500'>Guides pet owners on winter diets, supplements, and hydration.</p>
                    <p className='text-gray-500'>Experienced in creating tailored nutrition plans for pets of all sizes.</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertVets;