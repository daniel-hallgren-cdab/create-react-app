---
to: <%= srcPath %>/src/components/<%= name %>/<%= name %>.test.tsx
---
import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
<% if (locals.router) { -%>
import { StaticRouter, StaticRouterContext } from 'react-router'
<% } -%>

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
<% if (locals.router) { -%>

const context: StaticRouterContext = {}
<% } -%>

describe('<%= name %>', () => {
  it('renders without crashing', () => {
    render(
<% if (locals.i18n) { -%>
      <I18nextProvider i18n={i18n}>
<% } -%>
        <ThemeProvider theme={theme}>
<% if (locals.router) { -%>
          <StaticRouter context={context}>
            <<%= name %> title='I love <%= name %>' />
          </StaticRouter>
<% } else { -%>
          <<%= name %> title='I love <%= name %>' />
<% } -%>
        </ThemeProvider>
<% if (locals.i18n) { -%>
      </I18nextProvider>
<% } -%>
    )
  })
})
