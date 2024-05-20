'use client';

import React from 'react'
import { AllCustomersList } from '../allCustomersList/AllCustomersList'

const CustomerListing = () => {
    return (
        <div className='mt-4 max-w-991:mt-[10px] max-w-991:w-[230px]'>
            <AllCustomersList />
        </div>
    )
}

export default CustomerListing