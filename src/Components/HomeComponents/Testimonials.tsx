import React from "react";
import { Avatar } from "antd";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const data = [
    {
      name: "Mr Alex Smith",
      role: "Satisfied Customer",
      image:
        "https://media.istockphoto.com/id/1490616593/photo/portrait-of-pleased-young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mcxk-7ZmRtyRUEJ_6Wpovzj6I3yIj6lcc6iQlrlHjQg=",
      message:
        "LuxeRides car showroom has completely transformed my driving experience. The cars are top-notch, and the customer service is impeccable!",
    },
    {
      name: "Jane Smith",
      role: "Satisfied Customer",
      image:
        "https://media.istockphoto.com/id/175440771/photo/handsome-young-man-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=RMLEXPrDjwFg7uPb_Ri3KqpYF0BAEPjzloAB81viyCk=",
      message:
        "From the moment I stepped into the showroom, I was blown away by their professionalism and range of cars. Highly recommend!",
    },
    {
      name: "John Doe",
      role: "Car Enthusiast",
      image:
        "https://media.istockphoto.com/id/1498992722/photo/portrait-of-smiling-entrepreneur-showing-thumbs-up-and-messaging-on-smartphone-on-yellow.jpg?s=612x612&w=0&k=20&c=X1rBwaBXebL-fxc__LuNaFKQh92bFPgdZDFaB5P-Fo8=",
      message:
        "The best car showroom in town. They offer amazing deals and the latest models. I wouldn’t go anywhere else!",
    },
    {
        name: "Jane Smith",
        role: "Satisfied Customer",
        image:
          "https://media.istockphoto.com/id/175440771/photo/handsome-young-man-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=RMLEXPrDjwFg7uPb_Ri3KqpYF0BAEPjzloAB81viyCk=",
        message:
          "From the moment I stepped into the showroom, I was blown away by their professionalism and range of cars. Highly recommend!",
      },
      {
        name: "John Doe",
        role: "Car Enthusiast",
        image:
          "https://media.istockphoto.com/id/1498992722/photo/portrait-of-smiling-entrepreneur-showing-thumbs-up-and-messaging-on-smartphone-on-yellow.jpg?s=612x612&w=0&k=20&c=X1rBwaBXebL-fxc__LuNaFKQh92bFPgdZDFaB5P-Fo8=",
        message:
          "The best car showroom in town. They offer amazing deals and the latest models. I wouldn’t go anywhere else!",
      },
  ];

  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        What Our Customers Say
      </h2>
      <Marquee pauseOnHover={true} speed={40}>
        {data.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 shadow-xl rounded-2xl bg-white border-2 flex-shrink-0"
          >
            <div className="flex flex-col items-center">
              <Avatar
                size={100}
                src={testimonial.image}
                className="border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-lg">{testimonial.role}</p>
            </div>
            <p className="text-center mt-4 text-lg leading-relaxed">
              "{testimonial.message}"
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;