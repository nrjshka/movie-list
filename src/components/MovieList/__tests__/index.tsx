import * as React from 'react'
import userEvent from '@testing-library/user-event'

import { MovieList } from '../index'

import { render, screen } from '../../../utils/testUtilts'

test('default test case', () => {
  render(<MovieList />)

  expect(true).toBe(true)
})
