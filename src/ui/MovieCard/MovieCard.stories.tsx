import React from 'react'
import { ArgType } from '@storybook/api'

import { movieMockNowYouSee, moviewMockSuicide, MovieType } from '../../models'

import { MovieCard } from './index'

const Template: React.FC<MovieType> = (props) => (
  <div style={{ width: '320px' }}>
    <MovieCard {...props} />
  </div>
)

const SuicideSquad: ArgType = Template.bind({})

SuicideSquad.args = moviewMockSuicide

const NowYouSeeMe: ArgType = Template.bind({})

NowYouSeeMe.args = movieMockNowYouSee

export default {
  component: MovieCard,
  title: 'Movie/Card',
}

export { SuicideSquad, NowYouSeeMe }
