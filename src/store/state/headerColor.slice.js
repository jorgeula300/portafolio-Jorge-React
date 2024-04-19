import { createSlice } from '@reduxjs/toolkit';

export const headerColorslice = createSlice({
    name: 'headerColor',
    initialState: 'bg-[#091922]',
    reducers: {
        setColor: (state, action) => {
            return action.payload;
        }
    }
})

export const {setColor } = headerColorslice.actions;

export default headerColorslice.reducer;
