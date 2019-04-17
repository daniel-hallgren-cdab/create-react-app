import * as React from 'react'

/* Import components here */
import { StyledPinkButton } from './PinkButton.styles'

/* Import interfaces here */
import { IPinkButtonProps } from './PinkButton.interfaces'

/* Import utilities here */

/* Component */

export const PinkButton: React.FunctionComponent<IPinkButtonProps> = ({ children, ...props }) => {
  return (
    <StyledPinkButton {...props}>
      { children }
    </StyledPinkButton>
  )
}

/** @component */
export default PinkButton
