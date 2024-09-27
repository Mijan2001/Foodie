import React from 'react';
import GooglePlayStor from '../../assets/appStore/play_store.png';
import AppleStore from '../../assets/appStore/app_store.png';
import MobileWithBike from '../../assets/appStore/mobile_bike.gif';
const AppStore = () => {
    return (
        <>
            <div className="dark:bg-gray-900">
                <div
                    data-aos="fade-up"
                    className="flex flex-col md:flex-row justify-center items-center bg-slate-100 dark:bg-gray-800 p-10 space-y-5 md:space-y-0"
                >
                    {/* app linke section..........  */}
                    <div className="w-2/3 pl-20">
                        <h3 className="text-3xl font-bold text-slate-500">
                            Foodly is Available for Android and IOS
                        </h3>
                        <div className="flex ">
                            <img
                                src={GooglePlayStor}
                                alt="google playstore"
                                className="w-[200px] h-[80px]"
                            />
                            <img
                                src={AppleStore}
                                alt="apple store"
                                className="w-[200px] h-[80px]"
                            />
                        </div>
                    </div>
                    {/* app container section........  */}
                    <div className="w-1/3 pr-0 md:pr-10 lg:pr-52">
                        <img
                            data-aos="zoom-in"
                            src={MobileWithBike}
                            alt="mobile with bike"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppStore;
