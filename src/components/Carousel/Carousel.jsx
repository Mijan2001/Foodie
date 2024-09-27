import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Samuel from '../../assets/carousel/samuel.jpg';
import Jhondoe from '../../assets/carousel/jhondoe.jpg';
import Smith from '../../assets/carousel/smith.jpg';

const Carousel = () => {
    return (
        <div
            data-aos="zoom-in"
            className="max-w-2xl mx-auto dark:bg-gray-900 dark:text-white"
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
                spaceBetween={30}
                slidesPerView={1}
                loop={true} // Enables infinite looping
                autoplay={{
                    delay: 0, // No delay between slides
                    disableOnInteraction: false, // Keeps autoplay running even when interacted with
                    pauseOnMouseEnter: false // Keeps autoplay even when mouse is over
                }}
                speed={3000} // Speed of the animation (adjust as needed)
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide className="py-10">
                    <div className="flex flex-col space-y-5 bg-orange-200 rounded-md">
                        <div>
                            <img
                                src={Samuel}
                                alt="Samuel"
                                className="w-[150px] h-[150px] rounded-full mx-auto"
                            />
                        </div>
                        <div>
                            <p className="text-center py-5 px-10 dark:text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Libero alias reprehenderit
                                vitae inventore magni quia!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-10">
                    <div className="flex flex-col space-y-5 bg-orange-200 rounded-md">
                        <div>
                            <img
                                src={Jhondoe}
                                alt="Jhondoe"
                                className="w-[150px] h-[150px] rounded-full mx-auto"
                            />
                        </div>
                        <div>
                            <p className="text-center py-5 px-10 dark:text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Libero alias reprehenderit
                                vitae inventore magni quia!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="py-10">
                    <div className="flex flex-col space-y-5 bg-orange-200 rounded-md">
                        <div>
                            <img
                                src={Smith}
                                alt="Smith"
                                className="w-[150px] h-[150px] rounded-full mx-auto"
                            />
                        </div>
                        <div>
                            <p className="text-center py-5 px-10 dark:text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Libero alias reprehenderit
                                vitae inventore magni quia!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
