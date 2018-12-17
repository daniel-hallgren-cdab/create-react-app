import * as React from 'react'
import * as Sentry from '@sentry/browser'

interface ErrorBoundaryProps {}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    error: null,
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error })

    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <React.Fragment>
          <h3>Oh now, something went wrong!</h3>
          <p>Please let us know what happened.</p>
          <button onClick={() => Sentry.showReportDialog()}>Report feedback</button>
        </React.Fragment>
      )
    }

    //when there's not an error, render children untouched
    return this.props.children
  }
}
