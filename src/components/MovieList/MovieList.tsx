import React, { memo } from 'react'

import { Col, Row } from 'antd'
import { MovieCard, SkeletonCard } from '../../ui'

import { MovieListProps } from './types'

const emptyMockArr = new Array(4).fill(0)

const MovieList: React.FC<MovieListProps> = memo(function MovieList({ loading = false, movies }) {
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
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </div>
  )
})

export { MovieList }
