import * as React from 'react'
import { Component } from 'react'

/* Import utilities here */
import { StyledButton } from './Button.styles'
import { IButtonProps } from './Button.interfaces'

/**
 * Form Button
 */
export class Button extends Component<IButtonProps> {
  public state = {
    text: this.props.children,
  }

  public render() {
    const { children, onClick, ...props } = this.props

    return (
      <StyledButton onClick={onClick || this.handleClick} {...props}>
        {this.state.text}
      </StyledButton>
    )
  }

  private handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      text: 'I CHANGED',
    })
  }
}

/** @component */
export default Button
