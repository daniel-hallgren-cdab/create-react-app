import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import { ThemeProvider } from '../../theme/StyledComponents'
import { theme } from '../../theme'

import { I18nextProvider } from 'react-i18next'

afterEach(cleanup)

/* Import utilities here */
import i18n from '../../config/i18n'

/* Import components here */
import { SentryErrorDialog } from './'


describe('SentryErrorDialog', () => {
  it('renders without crashing', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <SentryErrorDialog />
        </ThemeProvider>
      </I18nextProvider>
    )
  })
})
