import React from 'react';
import Banner from '../../Components/HomeComponents/Banner';
import FeatureProducts from '../../Components/HomeComponents/FeatureProducts';
import Testimonials from '../../Components/HomeComponents/Testimonials';
import Faqs from '../../Components/HomeComponents/Faqs';
import GuideLine from '../../Components/HomeComponents/GuideLine';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeatureProducts/>
           <GuideLine/>
           <Testimonials/>
           <Faqs/>
        </div>
    );
};

export default Home;