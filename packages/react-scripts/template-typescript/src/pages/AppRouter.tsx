import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, RouteProps } from 'react-router-dom'

import { AboutPage } from './'
import { ErrorPage } from './'
import { SentryPage } from './'
import { StartPage } from './'

export class AppRouter extends React.Component<RouteProps> {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/start" />} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/start" component={StartPage} />
          <Route path="/sentry" component={SentryPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    )
  }
}
