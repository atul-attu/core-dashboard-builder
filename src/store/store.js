// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerSlice';
import messagesReducer from './messagesSlice';

const store = configureStore({
    reducer: {
        customer: customerReducer,
        messages: messagesReducer,
    },
});

export default store;
