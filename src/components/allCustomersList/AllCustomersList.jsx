'use client';
import React from 'react'
import CustomerCard from '../customerCard/CustomerCard'

export const AllCustomersList = () => {
    return (
        <div className='bg-white p-4 rounded-2xl w-[320px] h-[calc(100vh-145px)] overflow-auto max-w-991:rounded-md max-w-991:p-0 max-w-991:w-[230px]'>
            <CustomerCard />
        </div>
    )
}
