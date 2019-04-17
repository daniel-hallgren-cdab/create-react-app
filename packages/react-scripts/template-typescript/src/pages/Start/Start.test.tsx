import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import { StaticRouter, StaticRouterContext } from 'react-router'

import { ThemeProvider } from '../../theme/StyledComponents'
import { theme } from '../../theme'

import { I18nextProvider } from 'react-i18next'

afterEach(cleanup)

/* Import utilities here */
import i18n from '../../config/i18n'
import { theme } from '../../theme'

/* Import components here */
import { Start } from './'

const context: StaticRouterContext = {}

describe('Start', () => {
  it('renders without crashing', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <StaticRouter context={context}>
            <Start />
          </StaticRouter>
        </ThemeProvider>
      </I18nextProvider>
    )
  })
})
