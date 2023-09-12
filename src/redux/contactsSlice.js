import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './contactsThunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.rejected, handleReject)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.rejected, handleReject)
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const { addContactsAction, deleteContactsAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
