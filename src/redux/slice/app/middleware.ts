import { createAsyncThunk } from '@reduxjs/toolkit'

import { parse } from 'query-string'

import { setSearchText } from '../search'

import { AppActionTypes } from './types'

// initialize app
const loadApp = createAsyncThunk(AppActionTypes.LOAD, async (_, { dispatch }) => {
  const { q } = parse(window.location.search)

  await dispatch(setSearchText(q))
})

export { loadApp }
