import * as React from 'react'
import { Component } from 'react'

/**
 * Button properties.
 */
export interface IButtonProps {
  /** Pass your own click event handler, if you wish */
  onClick?(): void
}

/**
 * Form Button
 */
export class Button extends Component<IButtonProps> {
  state = {
    text: this.props.children,
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      text: 'I CHANGED',
    })
  }

  render() {
    const { children, onClick, ...props } = this.props

    return (
      <button onClick={onClick || this.handleClick} {...props}>
        {this.state.text}
      </button>
    )
  }
}
