'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { selectCustomer } from '../../store/customerSlice';
import styles from './customerCard.scss';

const CustomerCard = () => {
    const dispatch = useDispatch();
    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        const fetchCustomerList = async () => {
            try {
                const response = await fetch('https://mocki.io/v1/12e2d365-1240-44ef-ba1c-a2278603b58a');
                const data = await response.json();
                setCustomerList(data);
            } catch (error) {
                console.error('Error fetching customer list:', error);
            }
        };

        fetchCustomerList();
    }, []);

    const handleChange = (customer) => {
        dispatch(selectCustomer(customer));
    };

    return (
        <div className='w-[100%] flex flex-col'>
            {customerList.map((customer, index) => (
                <div key={index} className='w-[100%] flex justify-start mb-4 max-w-991:mb-0'>
                    <input
                        type="radio"
                        name="customer_card"
                        id={`customer_card_${index}`}
                        className='hidden'
                        defaultChecked={customer.checked}
                        onChange={() => handleChange(customer)}
                    />
                    <label htmlFor={`customer_card_${index}`} className='w-[100%] flex justify-start align-top py-2 px-3 cursor-pointer rounded-xl cc-label max-w-991:rounded-none'>
                        <Image src={customer.image_url} width={50} height={50} alt={customer.name} className='rounded-full max-w-991:w-8 max-w-991:h-8' />
                        <div className='w-[calc(100%-50px)] flex flex-col pl-3'>
                            <strong className='text-base leading-6 font-bold text-[#000] max-w-991:text-sm max-w-991:leading-5'>{customer.name}</strong>
                            <span className='text-sm text-[rgba(0,0,0,0.6)] max-w-991:text-xs max-w-991:leading-4'>@{customer.username}</span>
                        </div>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CustomerCard;
