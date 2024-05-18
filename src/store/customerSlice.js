// src/store/customerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        selectedCustomer: null,
    },
    reducers: {
        selectCustomer: (state, action) => {
            state.selectedCustomer = action.payload;
        },
    },
});

export const { selectCustomer } = customerSlice.actions;
export default customerSlice.reducer;
