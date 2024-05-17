import React from 'react';
import Image from 'next/image';
import LeftNavMenu from '../leftNavMenu/LeftNavMenu';

const LeftSidebar = () => {
    return (
        <div className='w-[100%] max-w-[350px] h-[calc(100vh-32px)] bg-white p-4 rounded-2xl'>
            <Image src='/images/logo-dark.png' alt='logo image' width={60} height={60} />

            <LeftNavMenu />
        </div>
    )
}

export default LeftSidebar