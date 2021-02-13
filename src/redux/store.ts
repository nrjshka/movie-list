import { configureStore } from '@reduxjs/toolkit'

import { reducer } from './slice'

const preloadedState = {}

const store = configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
})

type AppDispatch = typeof store.dispatch

export { store }
export type { AppDispatch }
