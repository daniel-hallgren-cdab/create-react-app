import * as React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from '../../theme/StyledComponents'

import { theme } from '../../theme'

import { Grid } from './'

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <Grid />
    </ThemeProvider>
  )
})
