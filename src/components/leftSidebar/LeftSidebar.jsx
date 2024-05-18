'use client';

import React from 'react';
import Image from 'next/image';
import LeftNavMenu from '../leftNavMenu/LeftNavMenu';
import BottomHelp from '../bottomHelp/BottomHelp';

const LeftSidebar = () => {
    return (
        <div className='w-[100%] max-w-[350px] h-[calc(100vh-32px)] bg-white p-4 rounded-2xl relative'>
            <Image src='/images/logo-dark.png' alt='logo image' width={60} height={60} />
            <LeftNavMenu />
            <BottomHelp />
        </div>
    )
}

export default LeftSidebar