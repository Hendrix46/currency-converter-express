import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    baseCurrency: 'USD',
    rates: {},
}

export const baseCurrencySlicer = createSlice({
    name: 'baseCurrency',
    initialState,
    reducers: {
        setBaseCurrency (state, action) {
            state.baseCurrency = action.payload
        }
    }
})

