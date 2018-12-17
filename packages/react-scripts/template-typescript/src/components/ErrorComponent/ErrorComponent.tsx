import * as React from 'react'

export class ErrorComponent extends React.Component {
  componentDidMount = () => {
    throw new Error('A very dangerous error')
  }

  render() {
    return <h4>This components makes the app crash</h4>
  }
}
