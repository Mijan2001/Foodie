import React from 'react';

const DialogModel = () => {
    return (
        <div className="h-screen flex items-center dark:bg-gray-900 dark:text-white transition-all duration-300">
            <div className="container w-[500px]">
                <div className="flex flex-col gap-y-5 shadow-md p-10 rounded-md border-gray-300 border outline-none">
                    <h3 className="text-center font-bold">FORM HANDLING</h3>
                    <div className="flex justify-between items-center gap-2">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="border border-gray-400 outline-none rounded-md focus:border-gray-600 focus:border-2 focus:outline-none dark:text-black dark:font-semibold dark:px-1"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="border border-gray-400 outline-none rounded-md focus:border-gray-600 focus:border-2 focus:outline-none dark:text-black dark:font-semibold dark:px-1"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="border border-gray-400 outline-none rounded-md focus:border-gray-600 focus:border-2 focus:outline-none dark:text-black dark:font-semibold dark:px-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogModel;
