import React, { memo } from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'

import { MovieList } from '..'

import { SupportedStores, getSavedMovieData } from '../../redux'

const SavedMoviesList: React.FC<RouteComponentProps<{ category: SupportedStores }>> = memo(function SavedMoviesList(
  props,
) {
  const { category } = props.match.params

  const data = useSelector(getSavedMovieData(category))

  return <MovieList movies={data} />
})

export { SavedMoviesList }
