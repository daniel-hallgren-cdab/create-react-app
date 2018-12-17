import * as React from 'react'
import { BrowserRouter as Router, RouteProps } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import { AppRouter } from '../pages'

import i18nConfig from '../config/i18n'
import { sentryConfig } from '../config/sentry'

sentryConfig()

export interface AppProps extends RouteProps {}

export class App extends React.Component<AppProps> {
  public render() {
    return (
      <I18nextProvider i18n={i18nConfig}>
        <AppRouter />
      </I18nextProvider>
    )
  }
}
