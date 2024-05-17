import React from 'react';
import Image from 'next/image';
import styles from './customerCard.scss';

const CustomerCard = () => {
    return (
        <div className='w-[100%] flex justify-start'>
            <input type="radio" name="customer_card" id="customer_card_1" className='hidden' />
            <label htmlFor="customer_card_1" className='w-[100%] flex justify-start align-top py-2 px-3 cursor-pointer rounded-xl cc-label'>
                <Image src='/images/user.jpeg' width={50} height={50} alt='' className='rounded-full' />
                <p className='w-[calc(100%-50px)] flex flex-col pl-3'>
                    <strong className='text-base leading-6 font-bold text-[#000]'>Chelsie Haley</strong>
                    <span className='text-sm text-[rgba(0,0,0,0.6)]'>@username</span>
                </p>
            </label>
        </div>
    )
}

export default CustomerCard