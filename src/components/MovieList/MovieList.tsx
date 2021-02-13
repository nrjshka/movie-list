import React, { memo, useCallback } from 'react'

import { Col, Row } from 'antd'
import { MovieCard, SkeletonCard } from '../../ui'

import { MovieListProps } from './types'

const emptyMockArr = new Array(4).fill(0)

const MovieList: React.FC<MovieListProps> = memo(function MovieList({ loading = false, movies }) {
  const onWatchLater = useCallback((id: number) => () => {}, [])

  const onLike = useCallback((id: number) => () => {}, [])

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
            <MovieCard onLike={onLike(movie.id)} onWatchLater={onWatchLater(movie.id)} {...movie} />
          </Col>
        ))}
      </Row>
    </div>
  )
})

export { MovieList }
