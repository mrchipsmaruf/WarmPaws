import React from 'react';
import PetsSliderBanner from '../Components/petsSliderBanner';
import Services from './Services';
import WinterCareTips from '../Components/WinterCareTips';
import ExpertVets from '../Components/ExpertVets';



const Home = () => {
    return (
        <div>
            <PetsSliderBanner></PetsSliderBanner>
            <Services></Services>
            <WinterCareTips></WinterCareTips>
            <ExpertVets></ExpertVets>
        </div>
    );
};

export default Home;