import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export const ErrorPage: React.SFC<RouteComponentProps<{}>> = () => {
  return (
    <div>
      <h1>Error</h1>
    </div>
  )
}
