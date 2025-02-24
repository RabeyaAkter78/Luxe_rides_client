import React from 'react';
import { FaStar } from 'react-icons/fa6';
import SectionTitle from '../../Shared/SectionTitle';

const Testimonials = () => {
    return (
        <div className='container mx-auto md:mt-20 px-2 md:px-0'>
          <SectionTitle title='What Our Customers Say About Us'/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:mr-20 mb-5'>
                <div className='border p-3 rounded-lg'>
                    <div>
                        <div className='flex gap-2 mb-3'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p>"The best car dealership experience I've ever had! Great selection and amazing customer service. Highly recommended!"</p>
                        <div className="flex justify-start items-center gap-2">
                            <div>
                                <h1 className="text-xl font-semibold">John Doe</h1>
                                <p className="text-xs text-neutral-500">Los Angeles, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border p-3 rounded-lg'>
                    <div>
                        <div className='flex gap-2 mb-3'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p>"I found my dream car at an unbeatable price. The whole process was smooth and hassle-free. Thank you!"</p>
                        <div className="flex justify-start items-center gap-2">
                            <div>
                                <h1 className="text-xl font-semibold">Emily Carter</h1>
                                <p className="text-xs text-neutral-500">New York, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border p-3 rounded-lg'>
                    <div>
                        <div className='flex gap-2 mb-3'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p>"Excellent service and great deals. The team was very professional and helped me choose the perfect car for my needs."</p>
                        <div className="flex justify-start items-center gap-2">
                            <div>
                                <h1 className="text-xl font-semibold">Michael Smith</h1>
                                <p className="text-xs text-neutral-500">Chicago, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:ml-20'>
                <div className='border p-3 rounded-lg'>
                    <div>
                        <div className='flex gap-2 mb-3'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p>"Fast and easy car buying process. I was impressed with the transparency and honesty of the team."</p>
                        <div className="flex justify-start items-center gap-2">
                            <div>
                                <h1 className="text-xl font-semibold">Sarah Williams</h1>
                                <p className="text-xs text-neutral-500">Dallas, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border p-3 rounded-lg'>
                    <div>
                        <div className='flex gap-2 mb-3'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p>"I got an amazing deal on my new car! The financing options were great, and the staff was very helpful."</p>
                        <div className="flex justify-start items-center gap-2">
                            <div>
                                <h1 className="text-xl font-semibold">David Johnson</h1>
                                <p className="text-xs text-neutral-500">Miami, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border p-3 rounded-lg'>
                    <div>
                        <div className='flex gap-2 mb-3'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p>"A fantastic experience from start to finish. The staff was knowledgeable and guided me through every step of the way."</p>
                        <div className="flex justify-start items-center gap-2">
                            <div>
                                <h1 className="text-xl font-semibold">Olivia Brown</h1>
                                <p className="text-xs text-neutral-500">San Francisco, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
