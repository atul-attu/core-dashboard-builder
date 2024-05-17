"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BottomHelp = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Apply dark mode class to the body
    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className='w-[100%] absolute bottom-0 left-0 p-5'>
            <p className='w-[100%] flex align-middle justify-center border-t-[1px] pt-5'>
                <Image src='/images/help-icon.svg' alt='help-icon' width={20} height={20} /> 
                <span className='text-[rgba(0,0,0,0.6)] text-base ml-2'>Help &amp; getting started</span>
            </p>
            <div className="flex items-center justify-center bg-white mt-3">
                <div className="flex items-center space-x-2">
                    <span className="text-[#000]">Light</span>
                    <button
                    onClick={toggleDarkMode}
                    className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
                    >
                    <span
                        className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''
                        }`}
                    ></span>
                    </button>
                    <span className="text-[#000]">Dark</span>
                </div>
            </div>
        </div>
    )
}

export default BottomHelp