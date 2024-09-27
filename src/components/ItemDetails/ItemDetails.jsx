import React from 'react';
import ItemImage from '../../assets/hero/biryani5.png';
import { FaLock } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const ItemDetails = () => {
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="mt-10 pb-32"
            >
                <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center dark:bg-gray-900 dark:text-white">
                    {/* item image .............  */}
                    <div className="w-full sm:w-full md:w-1/2 space-y-5 px-0 md:px-16 flex justify-center items-center">
                        <img
                            src={ItemImage}
                            alt="item image"
                            className="inline-block object-cover w-full h-full"
                        />
                    </div>

                    {/* item detials..............  */}
                    <div className="w-1/2">
                        <div className="space-y-5 px-16">
                            <h1 className="text-4xl font-bold">
                                Lorem ipsum dolor
                            </h1>
                            <p className="text-slate-400">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquam sed, fugit eos
                                repellendus in animi excepturi molestias tenetur
                                maxime nihil. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Nostrum minus eum
                                ducimus excepturi, corporis eveniet consequatur
                                enim fuga, inventore ut quo suscipit earum est
                                consectetur dolores placeat iure soluta ea.
                            </p>
                            <div className="flex gap-5">
                                <GrSecure className="text-4xl w-20 h-20 rounded-full bg-violet-100 p-5 dark:text-white dark:bg-indigo-300" />
                                <IoFastFood className="text-4xl w-20 h-20 rounded-full bg-violet-100 p-5 dark:text-white dark:bg-yellow-300" />
                                <GiFoodTruck className="text-4xl w-20 h-20 rounded-full bg-violet-100 p-5 dark:text-white dark:bg-green-300" />
                            </div>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetails;
