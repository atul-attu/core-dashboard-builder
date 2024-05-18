// components/CustomerDetail.js
'use client';

import React from 'react';
import { useSelector } from 'react-redux';

const CustomerDetail = () => {
    const selectedCustomer = useSelector((state) => state.customer.selectedCustomer);

    if (!selectedCustomer) {
        return <div className='w-[calc(100%-336px)] flex customer-detail mt-4 flex-col bg-white p-8 rounded-2xl'>No customer selected</div>;
    }

    return (
        <div className='w-[calc(100%-336px)] flex customer-detail mt-4 flex-col bg-white p-8 rounded-2xl'>
            <h2>{selectedCustomer.name}</h2>
            <p>@{selectedCustomer.username}</p>
            <img src={selectedCustomer.image_url} alt={selectedCustomer.name} width={100} height={100} />
        </div>
    );
}

export default CustomerDetail;
