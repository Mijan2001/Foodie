import React from 'react';
import Carousel from '../Carousel/Carousel';

const Testimonial = () => {
    return (
        <>
            <div>
                <div className="space-y-10 flex flex-col justify-center">
                    {/* testimonial header............  */}
                    <div
                        data-aos="fade-up"
                        className="flex w-full justify-center"
                    >
                        <div className="w-[400px] text-center flex flex-col gap-3">
                            <p className="text-[#FFECC4]">Testimonial</p>
                            <h3 className="text-xl font-bold">Testimonial</h3>
                            <p className="text-[#D0D4D9]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus error pariatur
                                corporis, atque est laudantium saepe iste
                                cupiditate consequuntur explicabo.
                            </p>
                        </div>
                    </div>
                    {/* testimonial image.............  */}
                    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
