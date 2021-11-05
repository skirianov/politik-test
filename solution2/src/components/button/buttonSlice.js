import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  value: {
    name: 'please select data to load',
    data: [
      {
        'no data selected': 'none',
      }
    ],
  },
};

export const buttonSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    storeData: (state, action) => {
      const newState = state;
      newState.value = {
        name: action.payload.name,
        data: action.payload.data,
      };
    }
  }
})

export const { storeData } = buttonSlice.actions;

export default buttonSlice.reducer