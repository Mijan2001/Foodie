import React, { useState } from 'react';
import Food1 from '../../assets/hero/biryani2.png';
import Food2 from '../../assets/hero/biryani3.png';
import Food3 from '../../assets/hero/biryani5.png';
import bgImg from '../../assets/hero/vector3.png';

const imageList = [
    {
        id: 1,
        image: Food1
    },
    {
        id: 2,
        image: Food2
    },
    {
        id: 3,
        image: Food3
    }
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgrundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
};

const Hero = () => {
    const [imageId, setImg] = useState(Food1);
    return (
        <>
            <div
                data-aos="zoom-in"
                style={bgImage}
                className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section.........  */}
                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Welcome to the Foodie Zone
                            </h1>
                            <p class="text-sm">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Nostrum magni quos itaque
                                eveniet voluptates, unde numquam ullam vel
                                repellat harum.
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* image section..............  */}
                        <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
                            {/* main image section...........  */}
                            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                                <img
                                    src={imageId}
                                    alt=""
                                    className="w-[300px] sm:w-[450px] mx-auto spin"
                                />
                            </div>
                            {/* image list section............  */}

                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/20 rounded-full items-center">
                                {imageList.map(item => (
                                    <img
                                        key={item.id}
                                        src={item.image}
                                        object-content
                                        className="max-w-[80px] inline-block top-1/2 -translate-y-1/2 "
                                        onClick={() => {
                                            setImg(item.image);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
