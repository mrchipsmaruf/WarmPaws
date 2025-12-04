import React, { Suspense } from 'react';
import PetsSliderBanner from '../Components/petsSliderBanner';
import Services from './Services';
import WinterCareTips from '../Components/WinterCareTips';
import ExpertVets from '../Components/ExpertVets';
import AboutUs from '../Components/AboutUs';


const Home = () => {
    return (
        <div>
            <PetsSliderBanner></PetsSliderBanner>
            <div className='flex justify-center'>
                <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                    <Services></Services>
                </Suspense>
            </div>
            <WinterCareTips></WinterCareTips>
            <ExpertVets></ExpertVets>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;