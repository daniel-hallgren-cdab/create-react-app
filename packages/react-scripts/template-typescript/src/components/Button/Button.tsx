import * as React from 'react'
import { withI18n, WithI18n } from 'react-i18next'
import styled from 'styled-components'

/* Import utilities here */

/* Import components here */

// CSS
const StyledButton = styled.button`
  /* background: white; */

  /* Nested CSS
  span {
    color: black;
  }
  */
`

// Props
export interface IButtonProps extends WithI18n {
  /** A great Button title */
  /* title: string */
}

// Component
const Button: React.FunctionComponent<IButtonProps> = ({ t, children, ...props }) => {
  return (
    <StyledButton {...props}>
      { children }
    </StyledButton>
  )
}

/** @component */
export default withI18n()(Button)
