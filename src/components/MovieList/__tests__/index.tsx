import * as React from 'react'

import { MovieList } from '../index'

import { render, screen } from '../../../utils/testUtilts'
import { movieMockNowYouSee, moviewMockSuicide } from '../../../models'

const mockMovieList = [movieMockNowYouSee, moviewMockSuicide]

test('<MovieList /> render list with showing movie information', () => {
  render(<MovieList movies={mockMovieList} />)

  const titleFirstMoview = screen.getByRole('heading', {
    name: /now you see me 2/i,
  })
  const titleSecondMoview = screen.getByRole('heading', {
    name: /suicide squad/i,
  })

  expect(titleFirstMoview).toBeInTheDocument()
  expect(titleSecondMoview).toBeTruthy()
})

test('<MovieList /> show skeletons with loading=true prop', () => {
  render(<MovieList loading movies={mockMovieList} />)

  expect.assertions(0)

  try {
    const titleFirstMoview = screen.getByRole('heading', {
      name: /now you see me 2/i,
    })
    const titleSecondMoview = screen.getByRole('heading', {
      name: /suicide squad/i,
    })

    expect(titleFirstMoview).toBeFalsy()
    expect(titleSecondMoview).toBeFalsy()
  } catch (e) {}
})
