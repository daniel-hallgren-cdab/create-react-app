import * as React from 'react'

import * as Sentry from '@sentry/browser'

import { SentryErrorDialog } from '../'

export class ErrorBoundary extends React.Component {
  public state = {
    error: null,
  }

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error })

    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  public render() {
    if (this.state.error) {
      // render fallback UI
      return <SentryErrorDialog />
    }

    // when there's not an error, render children untouched
    return this.props.children
  }
}

/** @component */
export default ErrorBoundary
