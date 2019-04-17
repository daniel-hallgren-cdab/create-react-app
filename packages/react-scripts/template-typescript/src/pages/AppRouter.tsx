import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, RouteProps } from 'react-router-dom'

import { About } from './'
import { Error } from './'
import { Sentry } from './'
import { Start } from './'

export class AppRouter extends React.Component<RouteProps> {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/start" />} />
          <Route path="/about" component={About} />
          <Route exact path="/start" component={Start} />
          <Route path="/sentry" component={Sentry} />
          <Route component={Error} />
        </Switch>
      </Router>
    )
  }
}
