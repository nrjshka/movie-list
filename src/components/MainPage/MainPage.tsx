import React, { memo } from 'react'
import { RouteComponentProps, StaticContext } from 'react-router'

import { PopularMovies } from '../PopularMovies'

const MainPage: React.FC<RouteComponentProps<{}, StaticContext, { q: string }>> = memo(function MainPage(props) {
  // react-router have not supported query prop ever in types yet
  // @ts-ignore
  const { query } = props.location

  if (query?.q) {
    return <div>Search results</div>
  }

  return <PopularMovies />
})

export { MainPage }
