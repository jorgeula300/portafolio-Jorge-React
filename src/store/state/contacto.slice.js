import { createSlice } from '@reduxjs/toolkit';

export const contactoslice = createSlice({
    name: 'contacto',
    initialState: false,
    reducers: {
        setContacto: (state, action) => {
            return action.payload;
        }

    }
})

export const { setContacto } = contactoslice.actions;

export default contactoslice.reducer;
