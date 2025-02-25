import React from "react";
import banner from "../../assets/images/banner.mp4";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={banner}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 px-4">
        <h1 className="text-4xl md:text-8xl font-bold text-white drop-shadow-lg">
          LuxeRides
        </h1>
        <p className="text-lg md:text-3xl text-gray-200 mt-2 ">
          Elevate Your Drive with Premium & Luxury Cars
        </p>
        <Link to="/all-products">
        <button className="mt-6 px-6 py-3 text-lg font-semibold text-white border-2 rounded-lg shadow-md hover:scale-105 transition">
          Explore Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
