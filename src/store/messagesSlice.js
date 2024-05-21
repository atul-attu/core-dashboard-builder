import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (newMessage) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    });
    return response.json();
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addMessage.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default messagesSlice.reducer;
