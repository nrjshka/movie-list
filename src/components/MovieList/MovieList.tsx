import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Col, Row } from 'antd'
import { MovieCard, SkeletonCard } from '../../ui'

import { MovieListProps } from './types'
import { getSavedMovieData, saveMovie, removeMovie, SupportedStores } from '../../redux'

const emptyMockArr = new Array(4).fill(0)

const MovieList: React.FC<MovieListProps> = memo(function MovieList({ loading = false, movies }) {
  const dispatch = useDispatch()

  const watchLaterData = useSelector(getSavedMovieData('watchLater'))
  const favouriteData = useSelector(getSavedMovieData('favourite'))

  const onMovieActionClick = useCallback(
    (store: SupportedStores, id: number) => (flag: boolean) => {
      if (flag) {
        dispatch(removeMovie({ store, movie: movies[id] }))
      } else {
        dispatch(saveMovie({ store, movie: movies[id] }))
      }
    },
    [movies, dispatch],
  )

  if (loading) {
    return (
      <div>
        <Row justify="center" align="top" gutter={[30, 16]}>
          {emptyMockArr.map((_, index) => (
            <Col key={index} xs={12} md={8} lg={6}>
              <SkeletonCard key={index} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }

  return (
    <div>
      <Row justify="center" align="top" gutter={[30, 16]}>
        {movies.map((movie, index) => (
          <Col key={index} xs={12} md={8} lg={6}>
            <MovieCard
              isInFavouriteList={!!favouriteData.find(({ id }) => id === movie.id)}
              isInWatchList={!!watchLaterData.find(({ id }) => id === movie.id)}
              onLike={onMovieActionClick('favourite', index)}
              onWatchLater={onMovieActionClick('watchLater', index)}
              {...movie}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
})

export { MovieList }
