"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import styles from './leftNavMenu.scss'

const LeftNavMenu = () => {
    const [openMenu, setOpenMenu] = useState({
        products: false,
        customers: false,
        income: false,
    });

    // Toggle function
    const handleToggle = (menu) => {
        setOpenMenu((prevState) => ({
        ...prevState,
        [menu]: !prevState[menu],
        }));
    };

    return (
        <div className='w-[100%] mt-16 inline-block'>
            <ul className='w-[100%] flex flex-col'>
                <li className='list-none my-1 menu-li home-li rounded-lg relative'>
                    <Link href="/" className="w-[100%] inline-block py-3 rounded-lg pl-12 text-base text-[rgba(0,0,0,0.6)] bg-[url('/images/home-default.svg')] bg-no-repeat">
                        Home
                    </Link>
                </li>
                <li className='list-none my-1 menu-li rounded-lg products-li relative'>
                    <Link href="/" className="w-[100%] inline-block py-3 pl-12 rounded-lg text-base text-[rgba(0,0,0,0.6)] bg-[url('/images/products-default.svg')] bg-no-repeat">
                        Products
                    </Link>
                    <span onClick={() => handleToggle('products')} className={`w-[36px] h-[36px] absolute top-[5px] right-0 bg-[url('/images/down-arrow-default.svg')] bg-no-repeat bg-center cursor-pointer z-[2] down-arrow ${openMenu.products ? 'up-arrow' : 'down-arrow'}`}></span>
                    <ul className={`w-[100%] flex-col ${openMenu.products ? 'flex' : 'hidden'}`}>
                        <li className='list-none my-1 menu-li rounded-lg pl-14'>
                            <Link href='/' className='w-[100%] inline-block text-sm py-2 px-4 text-[rgba(0,0,0,0.4)]'>Product 1</Link>
                        </li>

                        <li className='list-none my-1 menu-li rounded-lg pl-14'>
                            <Link href='/' className='w-[100%] inline-block text-sm py-2 px-4 text-[rgba(0,0,0,0.4)]'>Product 2</Link>
                        </li>
                    </ul>
                </li>
                <li className='list-none my-1 menu-li rounded-lg relative customers-li'>
                    <Link href="/" className="w-[100%] inline-block py-3 pl-12 rounded-lg text-base text-[rgba(0,0,0,0.6)] bg-[url('/images/customers-default.svg')] bg-no-repeat">
                        Customers
                    </Link>
                    <span onClick={() => handleToggle('customers')} className={`w-[36px] h-[36px] absolute top-[5px] right-0 bg-[url('/images/down-arrow-default.svg')] bg-no-repeat bg-center cursor-pointer z-[2] down-arrow ${openMenu.customers ? 'up-arrow' : 'down-arrow'}`}></span>
                    <ul className={`w-[100%] flex-col ${openMenu.customers ? 'flex' : 'hidden'}`}>
                        <li className='list-none my-1 menu-li rounded-lg pl-14'>
                            <Link href='/' className='w-[100%] inline-block text-sm py-2 px-4 text-[rgba(0,0,0,0.4)]'>Customers 1</Link>
                        </li>

                        <li className='list-none my-1 menu-li rounded-lg pl-14'>
                            <Link href='/' className='w-[100%] inline-block text-sm py-2 px-4 text-[rgba(0,0,0,0.4)]'>Customers 2</Link>
                        </li>
                    </ul>
                </li>
                <li className='list-none my-1 menu-li rounded-lg relative shop-li'>
                    <Link href="/" className="w-[100%] inline-block py-3 pl-12 rounded-lg text-base text-[rgba(0,0,0,0.6)] bg-[url('/images/shop-default.svg')] bg-no-repeat">
                        Shop
                    </Link>
                </li>
                <li className="list-none my-1 menu-li rounded-lg relative income-li">
                    <Link href="/" className="w-[100%] inline-block py-3 pl-12 rounded-lg text-base text-[rgba(0,0,0,0.6)] bg-[url('/images/income-default.svg')] bg-no-repeat">
                        Income
                    </Link>
                    <span onClick={() => handleToggle('income')} className={`w-[36px] h-[36px] absolute top-[5px] right-0 bg-[url('/images/down-arrow-default.svg')] bg-no-repeat bg-center cursor-pointer z-[2] down-arrow ${openMenu.income ? 'up-arrow' : 'down-arrow'}`}></span>
                    <ul className={`w-[100%] flex-col ${openMenu.income ? 'flex' : 'hidden'}`}>
                        <li className='list-none my-1 menu-li rounded-lg pl-14'>
                            <Link href='/' className='w-[100%] inline-block text-sm py-2 px-4 text-[rgba(0,0,0,0.4)]'>Income 1</Link>
                        </li>

                        <li className='list-none my-1 menu-li rounded-lg pl-14'>
                            <Link href='/' className='w-[100%] inline-block text-sm py-2 px-4 text-[rgba(0,0,0,0.4)]'>Income 2</Link>
                        </li>
                    </ul>
                </li>
                <li className='list-none my-1 menu-li rounded-lg relative promote-li'>
                    <Link href="/" className="w-[100%] inline-block py-3 pl-12 rounded-lg text-base text-[rgba(0,0,0,0.6)] bg-[url('/images/promote-default.svg')] bg-no-repeat">
                        Promote
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftNavMenu