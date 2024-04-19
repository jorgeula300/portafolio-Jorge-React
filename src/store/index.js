import { configureStore } from '@reduxjs/toolkit'
import headerColorSlice from './state/headerColor.slice'
import datosPotafolioSlice from './state/datosPotafolio.slice'
import contactoSlice from './state/contacto.slice'

export default configureStore({
    reducer: {
        headerColorSlice,
        datosPotafolioSlice,
        contactoSlice
    }
})