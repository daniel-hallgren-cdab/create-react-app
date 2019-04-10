import * as React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from '../../theme/StyledComponents'

import { theme } from '../../theme'

import { Module } from './'

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <Module>
        <p>I'm a child</p>
      </Module>
    </ThemeProvider>
  )
})
