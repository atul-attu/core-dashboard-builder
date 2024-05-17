import React from 'react'
import RightSideHeader from '../rightSideHeader/RightSideHeader'
import CustomerListing from '../customerListing/CustomerListing'

const RightSidebar = () => {
    return (
        <div className='w-[calc(100%-366px)] flex flex-col'>
            <RightSideHeader />
            <CustomerListing />
        </div>
    )
}

export default RightSidebar