import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { ErrorBoundary } from '../../components/ErrorBoundary'
import { ErrorComponent } from '../../components/ErrorComponent'

export interface SentryPageProps extends RouteComponentProps<{}> {}

export class SentryPage extends React.Component<SentryPageProps> {
  render() {
    return (
      <div>
        <h1>Sentry</h1>
        <ErrorBoundary>
          <ErrorComponent />
          <p>So far no error has occured. Press button to trigger error.</p>
        </ErrorBoundary>
      </div>
    )
  }
}
