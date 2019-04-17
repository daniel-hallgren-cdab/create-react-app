import * as React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import { ThemeProvider } from '../../theme/StyledComponents'
import { theme } from '../../theme'


afterEach(cleanup)

/* Import utilities here */

/* Import components here */
import { Button } from './'


describe('Button', () => {
  it('renders without crashing', () => {
    render(
        <ThemeProvider theme={theme}>
          <Button />
        </ThemeProvider>
    )
  })

  it('changes text on click', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button>Please click me</Button>
      </ThemeProvider>
    )

    const elem = container.firstChild

    expect(elem).toHaveTextContent('Please click me')

    fireEvent.click(elem as HTMLElement)

    expect(elem).toHaveTextContent('I changed')
  })

  it('does not change text on click', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={() => { return null }}>I will not change</Button>
      </ThemeProvider>
    )

    const elem = container.firstChild

    expect(elem).toHaveTextContent('I will not change')

    fireEvent.click(elem as HTMLElement)

    expect(elem).toHaveTextContent('I will not change')
  })
})
