import React, { memo } from 'react'

import { Card, Tag } from 'antd'
import { HeartOutlined, EyeOutlined, YoutubeOutlined } from '@ant-design/icons'

import { PosterImg, Overview, Title } from './Styled'
import { MovieCardType } from './types'

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w185/'

const MovieCard: React.FC<MovieCardType> = memo(function MovieCard(props) {
  const { poster_path, release_date, title, overview, vote_average, onWatchLater, onLike } = props

  const posterSrc = `${IMG_BASE_URL}${poster_path}`

  return (
    <Card
      hoverable
      cover={<PosterImg alt={title} src={posterSrc} />}
      actions={[<HeartOutlined onClick={onLike} />, <EyeOutlined onClick={onWatchLater} />, <YoutubeOutlined />]}
    >
      <Title>{title}</Title>
      <Overview title={overview}>{overview}</Overview>
      <Tag>{release_date}</Tag>

      <div style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: 'red' }}>{vote_average}</div>
    </Card>
  )
})

export { MovieCard }
