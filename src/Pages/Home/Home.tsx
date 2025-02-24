import React from 'react';
import Banner from '../../Components/HomeComponents/Banner';
import FeatureProducts from '../../Components/HomeComponents/FeatureProducts';
import GuideLine from '../../Components/HomeComponents/guideLine';
import Testimonials from '../../Components/HomeComponents/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeatureProducts/>
           <GuideLine/>
           <Testimonials/>
        </div>
    );
};

export default Home;