import React, { memo } from 'react'
import { RouteComponentProps } from 'react-router'

import { PopularMovies } from '../PopularMovies'

const MainPage: React.FC<RouteComponentProps> = memo(function MainPage() {
  return <PopularMovies />
})

export { MainPage }
