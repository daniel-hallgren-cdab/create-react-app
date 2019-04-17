import * as React from 'react'
import * as Sentry from '@sentry/browser'

/* Import components here */
import { SentryErrorDialog } from '../'

/* Import interfaces here */
import { IErrorBoundaryProps, IErrorBoundaryState } from './ErrorBoundary.interfaces'

/* Import utilities here */

/* Component */

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public state = {
    error: null
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

  public render () {
    const { children, ...props } = this.props

    if (this.state.error) {
      // Render fallback UI
      return <SentryErrorDialog {...props} />
    }

    // When there's not an error, render children untouched
    return this.props.children
  }
}

/** @component */
export default ErrorBoundary
