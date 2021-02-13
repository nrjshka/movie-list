import { createSlice, CreateSliceOptions } from '@reduxjs/toolkit'

import { SavedMoviesType } from './types'

const initialState: SavedMoviesType = {
  data: [],
}

const savedMoviesFactory = (name: string): CreateSliceOptions => ({
  name,
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {},
})

const watchLater = createSlice(savedMoviesFactory('watch'))
const favourite = createSlice(savedMoviesFactory('favourite'))

export { watchLater, favourite }
