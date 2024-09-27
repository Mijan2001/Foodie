import darkPng from '../../assets/navbar/dark_mode.png';
import lightPng from '../../assets/navbar/light-mode.png';

import React, { useEffect, useState } from 'react';

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );
    const element = document.documentElement;
    useEffect(() => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'light');
            element.classList.remove('dark');
            element.classList.add('light');
        } else {
            localStorage.setItem('theme', 'dark');
            element.classList.remove('light');
            element.classList.add('dark');
        }
    }, [theme]);

    const changeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };

    return (
        <>
            <div>
                {theme === 'dark' ? (
                    <img
                        onClick={changeTheme}
                        src={lightPng}
                        alt="lightMode"
                        className="w-8 cursor-pointer transition-all duration-200 shadow-md rounded-full"
                    />
                ) : (
                    <img
                        onClick={changeTheme}
                        src={darkPng}
                        alt="darkMode"
                        className="w-8 cursor-pointer transition-all duration-200 shadow-md rounded-full"
                    />
                )}
            </div>
        </>
    );
};

export default DarkMode;
