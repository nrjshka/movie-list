import React, { memo } from 'react'

import { Card, Tag } from 'antd'

import { MovieType } from '../../models'

import { PosterImg } from './Styled'

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w185/'

const MovieCard: React.FC<MovieType> = memo(function MovieCard(props) {
  const { poster_path, release_date, title, overview, vote_average } = props

  const posterSrc = `${IMG_BASE_URL}${poster_path}`

  return (
    <Card
      hoverable
      cover={<PosterImg alt={title} src={posterSrc} />}
      actions={[<div>Watch Later</div>, <div>Like</div>, <div>YouTube</div>]}
    >
      <h1>{title}</h1>
      <p title={overview}>{overview}</p>
      <Tag>{release_date}</Tag>

      <div style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: 'red' }}>{vote_average}</div>
    </Card>
  )
})

export { MovieCard }
