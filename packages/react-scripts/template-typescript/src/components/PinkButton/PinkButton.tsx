import * as React from 'react'

import { StyledPinkButton } from './PinkButton.styles'

export const PinkButton: React.FunctionComponent = ({ children, ...props }) => (
  <StyledPinkButton {...props}>{children}</StyledPinkButton>
)

/** @component */
export default PinkButton
