import { configureStore } from '@reduxjs/toolkit'

import menu from './menuSlice'
import search from './searchSlice'
import post from './postSlice'

export const store = configureStore({
  reducer: {
    menu,
    search,
    post,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
