'use client';

import React from 'react'
import RightSideHeader from '../rightSideHeader/RightSideHeader'
import CustomerListing from '../customerListing/CustomerListing'
import CustomerDetail from '../customerDetails/CustomerDetails';

const RightSidebar = () => {
    return (
        <div className='w-[calc(100%-366px)] flex flex-col'>
            <RightSideHeader />
            <div className='w-[100%] flex justify-between'>
                <CustomerListing />
                <CustomerDetail />
            </div>
        </div>
    )
}

export default RightSidebar