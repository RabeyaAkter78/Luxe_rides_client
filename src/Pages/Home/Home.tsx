import React from 'react';
import Banner from '../../Components/HomeComponents/Banner';
import FeatureProducts from '../../Components/HomeComponents/FeatureProducts';
import GuideLine from '../../Components/HomeComponents/guideLine';
import Testimonials from '../../Components/HomeComponents/Testimonials';
import Faqs from '../../Components/HomeComponents/Faqs';

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