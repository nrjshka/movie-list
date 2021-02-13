import { createSlice } from '@reduxjs/toolkit'

import { SearchState } from './types'

const initialState: SearchState = {
  text: '',
  data: [],
}

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      const { payload } = action

      state.text = payload
    },
  },
  extraReducers: {},
})

const { reducer, actions } = search

export default reducer
export const { setSearchText } = actions

export * from './types'
