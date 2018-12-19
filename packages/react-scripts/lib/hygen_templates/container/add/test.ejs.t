---
to: <%= srcPath %>/src/containers/<%= name %>/<%= name %>.test.tsx
---
import * as React from 'react'
import { render, cleanup } from 'react-testing-library'

import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

afterEach(cleanup)

/* Import utilities here */
import i18n from '../../config/i18n'
import { theme } from '../../theme'

/* Import components here */
import { <%= name %> } from './'

describe('<%= name %>', () => {
  it('renders without crashing', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <<%= name %> />
        </ThemeProvider>
      </I18nextProvider>
    )
  })
})
