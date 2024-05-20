'use client';

import React from 'react'
import RightSideHeader from '../rightSideHeader/RightSideHeader'
import CustomerListing from '../customerListing/CustomerListing'
import CustomerDetail from '../customerDetails/CustomerDetails';

const RightSidebar = () => {
    return (
        <div className='w-[calc(100%-366px)] flex flex-col max-w-1279:w-[100%]'>
            <RightSideHeader />
            <div className='w-[100%] flex justify-between max-w-991:overflow-auto'>
                <div className='w-[100%] flex justify-between max-w-991:w-[742px]'>
                    <CustomerListing />
                    <CustomerDetail />
                </div>
            </div>
        </div>
    )
}

export default RightSidebar