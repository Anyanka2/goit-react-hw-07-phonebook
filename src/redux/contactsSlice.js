import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleReject
      );
  },
});

export const { addContactsAction, deleteContactsAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
