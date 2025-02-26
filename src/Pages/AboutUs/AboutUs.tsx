import React from "react";
import img from "../../assets/images/bg.jpg";
import img2 from "../../assets/images/img5.jpg";
const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-baseline my-5">
        <div className="w-full md:w-[100%] relative">
          <img src={img} alt="image" className="w-full h-[500px]" />
          <img
            src={img2}
            alt="image"
            className="w-full h-[500px] relative top-[-100px] left-[100px]"
          />
        </div>
        <div className="w-full md:w-[50%]">

            
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
