import { combineReducers } from '@reduxjs/toolkit'

import popular, { PopularState } from './popular'
import search, { SearchState } from './search'

const reducer = combineReducers({
  popular,
  search,
})

type StoreType = {
  popular: PopularState
  search: SearchState
}

export { reducer }
export type { StoreType }

export * from './popular'
export * from './search'
