import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import about2 from "../../../public/image/imageAbout.jpg";
import React from "react";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative w-full h-screen flex flex-col md:flex-row">
            <div className="md:w-1/2 h-full bg-cover bg-center">
                <img src="../../../public/image/imageAbout.jpg" alt="Car" className="w-full h-full object-cover" />
            </div>
            
            <div className="md:w-1/2 h-full flex items-center justify-center bg-black bg-opacity-90 p-6 md:p-12 lg:p-24">
                <div data-aos="fade-up" className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        Welcome to our world of high-performance vehicles and premium automotive experiences. 
                        We are dedicated to delivering top-tier services, ensuring you get the best cars, 
                        latest innovations, and the ultimate driving experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
