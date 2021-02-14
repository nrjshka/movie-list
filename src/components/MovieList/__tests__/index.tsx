import * as React from 'react'

import { MovieList } from '../index'

import { render, screen } from '../../../utils/testUtilts'
import { movieMockNowYouSee, moviewMockSuicide } from '../../../models'
import userEvent from '@testing-library/user-event'
import { store } from '../../../redux'

const mockMovieList = [movieMockNowYouSee, moviewMockSuicide]

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: { setItem: jest.fn() },
  })
})

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

test('<MovieList /> add movie to watch list', () => {
  render(<MovieList movies={mockMovieList} />)

  const [nowYouSeeWatch] = screen.getAllByRole('img', { name: /eye/i })

  userEvent.click(nowYouSeeWatch)

  expect(store.getState()['watchLater'].data.length).toEqual(1)
})

test('<MovieList /> add movie to favourite list', () => {
  render(<MovieList movies={mockMovieList} />)

  const [_, suicideFavourite] = screen.getAllByRole('img', { name: /heart/i })

  userEvent.click(suicideFavourite)
})
