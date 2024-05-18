// components/CustomerCard.js
'use client';

import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { selectCustomer } from '../../store/customerSlice';
import styles from './customerCard.scss';

const CustomerCard = () => {
    const dispatch = useDispatch();

    const customerList = [
        {
            "name": "Alice Smith",
            "username": "alicesmith",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-1.jpg",
            "checked": false
        },
        {
            "name": "Bob Johnson",
            "username": "bobjohnson",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-5.jpg",
            "checked": false
        },
        {
            "name": "Emma Davis",
            "username": "emmadavis",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-3.jpg",
            "checked": false
        },
        {
            "name": "Michael Wilson",
            "username": "michaelwilson",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-4.jpg",
            "checked": false
        },
        {
            "name": "Sophia Brown",
            "username": "sophiabrown",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-5.jpg",
            "checked": false
        },
        {
            "name": "David Martinez",
            "username": "davidmartinez",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-3.jpg",
            "checked": false
        },
        {
            "name": "Olivia Anderson",
            "username": "oliviaanderson",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-4.jpg",
            "checked": false
        },
        {
            "name": "James Taylor",
            "username": "jamestaylor",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-2.jpg",
            "checked": false
        },
        {
            "name": "Ava Thomas",
            "username": "avathomas",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-1.jpg",
            "checked": false
        },
        {
            "name": "Daniel Hernandez",
            "username": "danielhernandez",
            "image_url": "https://ui8-core.herokuapp.com/img/content/avatar-4.jpg",
            "checked": false
        }
    ];

    const handleChange = (customer) => {
        dispatch(selectCustomer(customer));
    };

    return (
        <div className='w-[100%] flex flex-col'>
            {customerList.map((customer, index) => (
                <div key={index} className='w-[100%] flex justify-start mb-4'>
                    <input
                        type="radio"
                        name="customer_card"
                        id={`customer_card_${index}`}
                        className='hidden'
                        defaultChecked={customer.checked}
                        onChange={() => handleChange(customer)}
                    />
                    <label htmlFor={`customer_card_${index}`} className='w-[100%] flex justify-start align-top py-2 px-3 cursor-pointer rounded-xl cc-label'>
                        <Image src={customer.image_url} width={50} height={50} alt={customer.name} className='rounded-full' />
                        <div className='w-[calc(100%-50px)] flex flex-col pl-3'>
                            <strong className='text-base leading-6 font-bold text-[#000]'>{customer.name}</strong>
                            <span className='text-sm text-[rgba(0,0,0,0.6)]'>@{customer.username}</span>
                        </div>
                    </label>
                </div>
            ))}
        </div>
    );
}

export default CustomerCard;
