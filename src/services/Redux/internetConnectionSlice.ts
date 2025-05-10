import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface intrnetConnectionState {
  isConnected: boolean | null;
}

const initialState: intrnetConnectionState = {
  isConnected: false,
};

export const internetConnectionSlice = createSlice({
  name: 'internetConnection',
  initialState,
  reducers: {
    toggleConnection: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleConnection} = internetConnectionSlice.actions;

export default internetConnectionSlice.reducer;
