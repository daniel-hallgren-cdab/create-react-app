import * as React from 'react'
import { I18nextProvider } from 'react-i18next'

import { AppRouter } from '../pages'

import { IAppProps } from './App.interfaces'

import { instance as i18n } from '../config/i18n'
import { sentryConfig } from '../config/sentry'

sentryConfig()

export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <I18nextProvider i18n={i18n}>
        <AppRouter />
      </I18nextProvider>
    )
  }
}
