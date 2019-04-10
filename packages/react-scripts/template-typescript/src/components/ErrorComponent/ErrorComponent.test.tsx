import 'jest-dom/extend-expect'
import * as React from 'react'
import { cleanup, render } from 'react-testing-library'
import { ThemeProvider } from '../../theme/StyledComponents'

import { theme } from '../../theme'

import { ErrorComponent } from '.'

afterEach(cleanup)

test('throws an error', () => {
  expect(() => {
    render(
      <ThemeProvider theme={theme}>
        <ErrorComponent />
      </ThemeProvider>
    )
  }).toThrowError('A very dangerous error')
})
