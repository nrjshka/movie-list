import { createSlice } from '@reduxjs/toolkit'

import { PopularState } from './types'

const initialState: PopularState = {}

const popular = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
})

const { reducer, actions } = popular

export default reducer
export const {} = actions

export * from './types'
