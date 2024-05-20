'use client';

import React from 'react'
import LeftSidebar from '@/components/leftSidebar/LeftSidebar'
import RightSidebar from '@/components/rightSidebar/RightSidebar'

const Home = () => {
    return (
        <div className='w-[100%] h-[100vh] flex justify-between p-4 bg-[rgba(243,244,246,1)] max-w-991:p-[10px]'>
            <LeftSidebar />
            <RightSidebar />
        </div>
    )
}

export default Home