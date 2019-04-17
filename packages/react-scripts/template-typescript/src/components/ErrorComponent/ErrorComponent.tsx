import * as React from 'react'

/* Import components here */
import { StyledErrorComponent } from './ErrorComponent.styles'

/* Import interfaces here */
import { IErrorComponentProps } from './ErrorComponent.interfaces'

/* Import utilities here */

/* Component */

export const ErrorComponent: React.FunctionComponent<IErrorComponentProps> = ({ children, ...props }) => {
  React.useEffect(() => {
    throw new Error('A very dangerous error…')
  })

  return (
    <StyledErrorComponent {...props}>
      <h4>This component makes the app crash</h4>
    </StyledErrorComponent>
  )
}

/** @component */
export default ErrorComponent
