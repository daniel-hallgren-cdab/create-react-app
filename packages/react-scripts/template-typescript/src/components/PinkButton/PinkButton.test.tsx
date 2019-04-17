import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import { ThemeProvider } from '../../theme/StyledComponents'
import { theme } from '../../theme'


afterEach(cleanup)

/* Import utilities here */

/* Import components here */
import { PinkButton } from './'


describe('PinkButton', () => {
  it('renders without crashing', () => {
    render(
        <ThemeProvider theme={theme}>
          <PinkButton title='I love PinkButton' />
        </ThemeProvider>
    )
  })
})
