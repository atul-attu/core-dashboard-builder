'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/messagesSlice';

const MessageForm = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const status = useSelector((state) => state.messages.status);

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message.trim() === '') {
            setError('Message cannot be empty');
            return;
        }

        const newMessage = {
            content: message,
            timestamp: new Date().toISOString(),
        };

        dispatch(addMessage(newMessage)).then(() => {
            if (status === 'succeeded') {
                setIsSubmitted(true);
                setMessage('');
                setError('');
            }
        });
    };

    return (
        <>
            {isSubmitted ? (
                <p className="text-center text-green-500">Message submitted successfully!</p>
            ) : (
                <div className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-10">
                    <form onSubmit={handleSubmit} className="bg-white w-full max-w-[500px] fixed shadow-md rounded px-8 pt-6 pb-8">
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {error && <p className="text-red-500 text-xs italic">{error}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Add Message
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default MessageForm;
