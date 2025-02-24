import React from 'react';
import Banner from '../../Components/HomeComponents/Banner';
import FeatureProducts from '../../Components/HomeComponents/FeatureProducts';
import GuideLine from '../../Components/HomeComponents/guideLine';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeatureProducts/>
           <GuideLine/>
        </div>
    );
};

export default Home;