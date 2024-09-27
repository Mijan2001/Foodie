import React from 'react';
import Biryani from '../../assets/hero/biryani2.png';

const Services = () => {
    return (
        <>
            <div>
                {/* services title............  */}

                <div>
                    <div className="flex flex-col py-5 justify-center items-center">
                        <p className="text-yellow-500">Our services</p>
                        <h3 className="font-bold text-3xl">Services</h3>
                        <p className="md:px-[120px] lg:px-[200px]  text-center dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis, necessitatibus? Quos nostrum quam
                            similique iusto, repudiandae error sunt itaque
                            minus!
                        </p>
                    </div>
                </div>

                {/* services image..............  */}

                <div className="mt-10 mx-10 ">
                    <div className="flex space-x-5 ">
                        <div
                            data-aos="zoom-in"
                            className="text-center w-[500px] shadow-lg rounded-lg hover:bg-yellow-400 group dark:bg-gray-800 dark:hover:bg-yellow-400"
                        >
                            <img
                                src={Biryani}
                                alt="biryani"
                                className="inline-block w-[200px] hover:scale-105 hover:duration-300 relative -top-[50px]"
                            />
                            <div className="overflow-hidden w-full h-full">
                                <h3 className="text-2xl font-bold group-hover:text-white">
                                    Biryani
                                </h3>
                                <p className="group-hover:text-white px-3 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Impedit delectus corporis
                                    perspiciatis rerum sint minus?
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="zoom-in"
                            className="text-center w-[500px] shadow-lg rounded-lg hover:bg-yellow-400 group dark:bg-gray-800 dark:hover:bg-yellow-400"
                        >
                            <img
                                src={Biryani}
                                alt="biryani"
                                className="inline-block w-[200px] hover:scale-105 hover:duration-300 relative -top-[50px]"
                            />
                            <div className="overflow-hidden w-full h-full">
                                <h3 className="text-2xl font-bold group-hover:text-white">
                                    Chiken kari
                                </h3>
                                <p className="group-hover:text-white px-3 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Impedit delectus corporis
                                    perspiciatis rerum sint minus?
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="zoom-in"
                            className="text-center w-[500px] shadow-lg rounded-lg hover:bg-yellow-400 group dark:bg-gray-800 dark:hover:bg-yellow-400 "
                        >
                            <img
                                src={Biryani}
                                alt="biryani"
                                className="inline-block w-[200px] hover:scale-105 hover:duration-300 relative -top-[50px]"
                            />
                            <div className="overflow-hidden w-full h-full">
                                <h3 className="text-2xl font-bold group-hover:text-white">
                                    Cold Cofee
                                </h3>
                                <p className="group-hover:text-white px-3 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Impedit delectus corporis
                                    perspiciatis rerum sint minus?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
