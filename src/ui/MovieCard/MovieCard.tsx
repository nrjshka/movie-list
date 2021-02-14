import React, { memo } from 'react'

import { Card, Tag } from 'antd'
import { HeartOutlined, HeartFilled, EyeOutlined, EyeFilled, YoutubeOutlined } from '@ant-design/icons'

import { PosterImg, Overview, Title, SkeletonImage } from './Styled'
import { MovieCardType } from './types'

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w185/'

const MovieCard: React.FC<MovieCardType> = memo(function MovieCard(props) {
  const {
    poster_path,
    release_date,
    title,
    overview,
    vote_average,
    onWatchLater,
    onLike,
    isInFavouriteList = false,
    isInWatchList = false,
  } = props

  const posterSrc = `${IMG_BASE_URL}${poster_path}`

  const FavouriteComponent = isInFavouriteList ? HeartFilled : HeartOutlined
  const WatchComponent = isInWatchList ? EyeFilled : EyeOutlined

  const onLikeWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => onLike(isInFavouriteList, e)
  const onWatchLaterWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => onWatchLater(isInWatchList, e)

  return (
    <Card
      hoverable
      cover={poster_path ? <PosterImg alt={title} src={posterSrc} /> : <SkeletonImage />}
      actions={[
        <FavouriteComponent onClick={onLikeWrapper} />,
        <WatchComponent onClick={onWatchLaterWrapper} />,
        <YoutubeOutlined />,
      ]}
    >
      <Title>{title}</Title>
      <Overview title={overview}>{overview}</Overview>
      <Tag>{release_date}</Tag>

      <div style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: 'red' }}>{vote_average}</div>
    </Card>
  )
})

export { MovieCard }
