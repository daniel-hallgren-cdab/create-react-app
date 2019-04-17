---
to: <%= srcPath %>/src/pages/<%= name %>/<%= name %>.test.tsx
---
import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import { StaticRouter, StaticRouterContext } from 'react-router'

import { ThemeProvider } from '../../theme/StyledComponents'
import { theme } from '../../theme'
<% if (locals.i18n) { -%>

import { I18nextProvider } from 'react-i18next'
<% } -%>

afterEach(cleanup)

/* Import utilities here */
<% if (locals.i18n) { -%>
import i18n from '../../config/i18n'
<% } -%>

/* Import components here */
import { <%= name %> } from './'

const context: StaticRouterContext = {}

describe('<%= name %>', () => {
  it('renders without crashing', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <StaticRouter context={context}>
            <<%= name %> />
          </StaticRouter>
        </ThemeProvider>
      </I18nextProvider>
    )
  })
})
