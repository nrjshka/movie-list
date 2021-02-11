import React from 'react'
import { ArgType } from '@storybook/api'
import styled from 'styled-components'

import { movieMockNowYouSee, moviewMockSuicide, MovieType } from '../../models'

import { MovieCard, SkeletonCard } from './index'

const CardContainer = styled.div`
  width: 320px;
`

const Template: React.FC<MovieType> = (props) => (
  <CardContainer>
    <MovieCard {...props} />
  </CardContainer>
)

const SuicideSquad: ArgType = Template.bind({})

SuicideSquad.args = moviewMockSuicide

const NowYouSeeMe: ArgType = Template.bind({})

NowYouSeeMe.args = movieMockNowYouSee

const Skeleton: React.FC = (props) => (
  <CardContainer>
    <SkeletonCard {...props} />
  </CardContainer>
)

export default {
  component: MovieCard,
  title: 'Movie/Card',
}

export { SuicideSquad, NowYouSeeMe, Skeleton }
