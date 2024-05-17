import React from 'react'
import CustomerCard from '../customerCard/CustomerCard'

export const AllCustomersList = () => {
    return (
        <div className='bg-white p-4 rounded-2xl w-[320px] h-[calc(100vh-145px)] overflow-auto'>
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </div>
    )
}
