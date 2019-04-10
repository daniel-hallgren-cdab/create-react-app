import * as React from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from 'react-testing-library'

import { SentryErrorDialog } from '.'

import i18n from '../../config/i18n'
import { ThemeProvider } from '../../theme/StyledComponents'
import { theme } from '../../theme'

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <SentryErrorDialog />
      </I18nextProvider>
    </ThemeProvider>
  )
})
