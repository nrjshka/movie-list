import React from 'react'
import { movieMock, MovieType } from '../../models'

import { MovieCard } from './index'

const Preview: React.FC<MovieType> = (props) => (
  <div style={{ width: '320px' }}>
    <MovieCard {...props} />
  </div>
)

export default {
  component: MovieCard,
  title: 'Movie/Card',
  args: movieMock,
}

export { Preview }
