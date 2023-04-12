import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {baseCurrencySlicer} from "./reducers/index"

const rootReducer = combineReducers({
    baseCurrencySlicer : baseCurrencySlicer.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})