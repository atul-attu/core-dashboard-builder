import React from 'react'
import LeftSidebar from '@/components/leftSidebar/LeftSidebar'
import RightSidebar from '@/components/rightSidebar/RightSidebar'

const Home = () => {
    return (
        <div className='w-[100%] h-[100vh] flex justify-between p-4 bg-[rgba(243,244,246,1)]'>
            <LeftSidebar />
            <RightSidebar />
        </div>
    )
}

export default Home