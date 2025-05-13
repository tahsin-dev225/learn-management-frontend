import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from './user/userSlice'
import { apiSlice } from './apiSlice/apiSlice'

export const store = configureStore({
    reducer : {
        userReducer ,
         [apiSlice.reducerPath] : apiSlice.reducer, 

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)