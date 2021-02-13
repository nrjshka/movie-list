import { createAsyncThunk } from '@reduxjs/toolkit'

import { movieApi } from '../../../api'

import { PopularActionTypes } from './types'

const getPopulatMoviewData = createAsyncThunk(PopularActionTypes.GET_DATA, async () => {
  try {
    const data = await movieApi.getPopularMovies()
  } catch (e) {}
})

export { getPopulatMoviewData }
