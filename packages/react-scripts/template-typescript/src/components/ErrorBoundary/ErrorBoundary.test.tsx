import 'jest-dom/extend-expect'
import * as React from 'react'
import { cleanup, render } from 'react-testing-library'
import { ThemeProvider } from '../../theme/StyledComponents'

import { theme } from '../../theme'

import { ErrorBoundary } from '.'

afterEach(cleanup)

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <p>I'm a test!</p>
      </ErrorBoundary>
    </ThemeProvider>
  )
})
