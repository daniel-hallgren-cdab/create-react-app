import * as React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

afterEach(cleanup)

/* Import utilities here */
import i18n from '../../config/i18n'
import { theme } from '../../theme'

/* Import components here */
import { Button } from './'

describe('Button', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Button>My button</Button>
        </ThemeProvider>
      </I18nextProvider>
    )
  })
  
  it('does no change text on click', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Button>My button</Button>
        </ThemeProvider>
      </I18nextProvider>
    )

    expect(container.firstChild).toHaveTextContent('My button')
  
    fireEvent.click(container.firstChild)
  
    expect(container.firstChild).toHaveTextContent('My button')
  })
})
