import React from 'react';
import warmImage from "../assets/warm.jpg"
import pawHealth from "../assets/pawHealth.jpg"
import nutritionImage from "../assets/nutration.jpg"

const WinterCareTips = () => {
    return (
        <div className='pb-20 bg-orange-100 px-3'>
            <h2 className='text-3xl font-bold text-center pt-15 pb-10'>Winter Care Tips for <span className='text-orange-600'>Pets</span></h2>
            <div className='grid grid-cols-3 pb-10 gap-10'>
                <div className='flex items-center gap-3 border-r-2 border-gray-300 pr-5'>
                    <div className='space-y-1'>
                        <h2 className='text-2xl font-semibold text-orange-600 pb-3'>Winter Warmth & Comfort</h2>
                        <p className='text-gray-500'>Dress your pets in cozy sweaters or jackets during cold walks.</p>
                        <p className='text-gray-500'>Provide insulated bedding away from drafts.</p>
                        <p className='text-gray-500'>Limit outdoor exposure during extreme cold.</p>
                    </div>
                    <img className='w-[250px] rounded-4xl' src={warmImage} alt="" />
                </div>
                <div className='flex items-center gap-3 border-r-2 border-gray-300 pr-5'>
                    <div className='space-y-1'>
                        <h2 className='text-2xl font-semibold text-orange-600 pb-3'>Paw & Health Protection</h2>
                        <p className='text-gray-500'>Apply paw balm to prevent cracking from ice, snow, and salt.</p>
                        <p className='text-gray-500'>Avoid icy sidewalks and areas treated with salt.</p>
                        <p className='text-gray-500'>Watch for signs of hypothermia or frostbite; consult a vet if needed.</p>
                    </div>
                    <img className='w-[250px] rounded-4xl' src={pawHealth} alt="" />

                </div>
                <div className='flex items-center gap-3'>
                    <div className='space-y-1'>
                        <h2 className='text-2xl font-semibold text-orange-600 pb-3'>Nutrition & Safety</h2>
                        <p className='text-gray-500'>Provide a balanced diet with extra calories if pets are active outdoors.</p>
                        <p className='text-gray-500'>Ensure pets have fresh water at all times.</p>
                        <p className='text-gray-500'>Use reflective jackets, collars, or LED lights for evening walks.</p>
                    </div>
                    <img className='w-[250px] rounded-4xl' src={nutritionImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WinterCareTips;