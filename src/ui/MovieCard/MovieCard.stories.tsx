import React from 'react'

import { MovieCard } from './index'

const Preview: React.FC = (props) => <MovieCard {...props} />

export default {
  component: MovieCard,
  title: 'Movie/Card',
}

export { Preview }
