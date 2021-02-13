import React, { memo } from 'react'
import { RouteComponentProps, StaticContext } from 'react-router'

import { parse } from 'query-string'

import { PopularMovies } from '../PopularMovies'

const MainPage: React.FC<RouteComponentProps<{}, StaticContext, { q: string }>> = memo(function MainPage(props) {
  const { q } = parse(props.location.search)

  if (q) {
    return <div>Search results</div>
  }

  return <PopularMovies />
})

export { MainPage }
