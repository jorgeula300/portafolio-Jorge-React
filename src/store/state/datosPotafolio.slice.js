import { createSlice } from '@reduxjs/toolkit';

export const datosPotafolioslice = createSlice({
    name: 'datosPotafolio',
    initialState:{
        datos: null
    },
    reducers: {
        setDatosPotafolio: (state, action) => {
            return state = action.payload;
        }

    }
})

export const { setDatosPotafolio } = datosPotafolioslice.actions;

export default datosPotafolioslice.reducer;
