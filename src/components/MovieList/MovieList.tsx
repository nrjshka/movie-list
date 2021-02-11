import React, { memo } from 'react'

import { Col, Row } from 'antd'
import { MovieCard, SkeletonCard } from '../../ui'

import { MovieListProps } from './types'

const MovieList: React.FC<MovieListProps> = memo(function MovieList({ loading = false, movies }) {
  return (
    <div>
      <Row justify="center" align="top" gutter={[30, 16]}>
        {movies.map((movie, index) => (
          <Col key={index} xs={12} md={8} lg={6}>
            {loading ? <SkeletonCard /> : <MovieCard {...movie} />}
          </Col>
        ))}
      </Row>
    </div>
  )
})

export { MovieList }
