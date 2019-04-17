import * as React from 'react'

/* Import components here */
import { StyledButton } from './Button.styles'

/* Import interfaces here */
import { IButtonProps, IButtonState } from './Button.interfaces'

/* Import utilities here */

/* Component */

export class Button extends React.Component<IButtonProps, IButtonState> {
  public state = {
    text: this.props.children
  }

  public render () {
    const { children, onClick, ...props } = this.props

    return (
      <StyledButton onClick={ onClick || this.handleClick } { ...props }>
        { this.state.text }
      </StyledButton>
    )
  }

  private handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      text: 'I changed!'
    })
  }
}

/** @component */
export default Button
