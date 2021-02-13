import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getPopularMovies } from '../../redux'
import { MovieList } from '../MovieList'

const PopularMovies: React.FC = memo(function MainPage(props) {
  const popularMovies = useSelector(getPopularMovies)
  const isPopularMovieEmpty = !popularMovies.length

  useEffect(() => {
    if (!popularMovies.length) {
      // call getting popular movies
    }
  }, [popularMovies])

  return <MovieList loading={isPopularMovieEmpty} movies={popularMovies} />
})

export { PopularMovies }
