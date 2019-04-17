import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import { ThemeProvider } from '../../theme/StyledComponents'
import { theme } from '../../theme'


afterEach(cleanup)

/* Import utilities here */

/* Import components here */
import { Module } from './'


describe('Module', () => {
  it('renders without crashing', () => {
    render(
        <ThemeProvider theme={theme}>
          <Module>
            <p>I'm a child</p>
          </Module>
        </ThemeProvider>
    )
  })
})