// components/CustomerDetail.js
'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import Image from 'next/image';
import Link from 'next/link';

const CustomerDetail = () => {
    const selectedCustomer = useSelector((state) => state.customer.selectedCustomer);

    if (!selectedCustomer) {
        return <div className='w-[calc(100%-336px)] flex customer-detail mt-4 flex-col bg-white p-8 rounded-2xl'>No customer selected</div>;
    }

    return (
        <div className='w-[calc(100%-336px)] flex customer-detail mt-4 flex-col bg-white p-8 h-[calc(100vh-145px)] overflow-auto rounded-2xl'>
            <div className='w-[100%] flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <img src={selectedCustomer.image_url} alt={selectedCustomer.name} width={100} height={100} className='rounded-[100px]' />
                    <div className='flex flex-col ml-5'>
                        <h4 className='text-2xl font-semibold text-black'>{selectedCustomer.name}</h4>
                        <p className='text-base text-[rgba(0,0,0,0.4)]'>@{selectedCustomer.username}</p>
                    </div>
                </div>
                <div className='flex justify-start'>
                    <button className='font-base font-semibold text-black border border-[rgba(0,0,0,0.2)] py-3 rounded-lg px-10 cursor-pointer'>Follow</button>
                    <button className='font-base font-semibold text-black border border-[rgba(0,0,0,0.2)] py-3 rounded-lg px-8 cursor-pointer ml-3'>Message</button>
                </div>
            </div>
            <p className='text-base text-black mt-8 font-semibold mb-3'>Private Note</p>
            <div className='w-[100%] h-[400px] flex'>
                <Editor
                    className="w-[100%] flex"
                    apiKey='hgl9nv0qmy66r8g7w81m9wcqbn9n3uqqr3aingoxzk5cacyd'
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                        mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                        ],
                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue="Welcome to TinyMCE!"
                />
            </div>
            <p className='w-[100%] flex justify-start items-center text-base mt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]'>
                <Image src="/images/mail.svg" alt='mail icon' width={20} height={20} className='mr-3' /> {selectedCustomer.email}
            </p>
            <ul className='w-[100%] flex flex-row mt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]'>
                <li className='list-none mx-4 ml-0'>
                    <Link href='/' className=''>
                        <Image src="/images/twitter.svg" alt='social icon' width={20} height={20} />
                    </Link>
                </li>

                <li className='list-none mx-4'>
                    <Link href='/' className=''>
                        <Image src="/images/insta.svg" alt='social icon' width={20} height={20} />
                    </Link>
                </li>

                <li className='list-none mx-4'>
                    <Link href='/' className=''>
                        <Image src="/images/pin.svg" alt='social icon' width={20} height={20} />
                    </Link>
                </li>

                <li className='list-none mx-4'>
                    <Link href='/' className=''>
                        <Image src="/images/facebook.svg" alt='social icon' width={10} height={10} />
                    </Link>
                </li>
            </ul>

            <div className='w-[100%] flex my-9'>
                <table className='w-[100%]' border={0} cellPadding={0} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th className='text-base text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                Product
                            </th>
                            <th className='text-base text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                Price
                            </th>
                            <th className='text-base text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <strong className='text-base text-[#000] font-bold'>
                                    Product Title
                                    <br />
                                    <span className='text-xs leading-4 font-normal text-[rgba(0,0,0,0.6)]'>Product Link</span>
                                </strong>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,1)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <span className='bg-[#b3f9c1] py-1 px-2 rounded-md'>
                                    $64.00
                                </span>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                May 19, 2024
                            </td>
                        </tr>

                        <tr>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <strong className='text-base text-[#000] font-bold'>
                                    Product Title
                                    <br />
                                    <span className='text-xs leading-4 font-normal text-[rgba(0,0,0,0.6)]'>Product Link</span>
                                </strong>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,1)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <span className='bg-[#e9f6a9] py-1 px-2 rounded-md'>
                                    $64.00
                                </span>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                May 19, 2024
                            </td>
                        </tr>

                        <tr>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <strong className='text-base text-[#000] font-bold'>
                                    Product Title
                                    <br />
                                    <span className='text-xs leading-4 font-normal text-[rgba(0,0,0,0.6)]'>Product Link</span>
                                </strong>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,1)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <span className='bg-[#b3f9c1] py-1 px-2 rounded-md'>
                                    $64.00
                                </span>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                May 19, 2024
                            </td>
                        </tr>

                        <tr>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <strong className='text-base text-[#000] font-bold'>
                                    Product Title
                                    <br />
                                    <span className='text-xs leading-4 font-normal text-[rgba(0,0,0,0.6)]'>Product Link</span>
                                </strong>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,1)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                <span className='bg-[#b3f9c1] py-1 px-2 rounded-md'>
                                    $64.00
                                </span>
                            </td>
                            <td className='text-sm text-[rgba(0,0,0,0.6)] text-left p-[10px] border-b font-normal border-[rgba(0,0,0,0.1)]'>
                                May 19, 2024
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CustomerDetail;
