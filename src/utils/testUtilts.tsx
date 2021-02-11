import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'

import { theme } from '../ui'

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
