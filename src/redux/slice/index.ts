import { combineReducers } from '@reduxjs/toolkit'

import popular, { PopularState } from './popular'

const reducer = combineReducers({
  popular,
})

type StoreType = {
  popular: PopularState
}

export { reducer }
export type { StoreType }

export * from './popular'
