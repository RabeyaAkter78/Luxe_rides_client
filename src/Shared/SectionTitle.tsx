import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,  
        });
    }, []);

    return (
        <div className="container mx-auto ">
            <div className='md:py-20 '>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white " data-aos="fade-up" >
                {title}
            </h1>
            </div>
            
        </div>
    );
};

export default SectionTitle;
