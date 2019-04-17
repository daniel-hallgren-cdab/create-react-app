import * as React from 'react'

/* Import components here */
import { StyledModule } from './Module.styles'

/* Import interfaces here */
import { IModuleProps } from './Module.interfaces'

/* Import utilities here */

/* Component */

export const Module: React.FunctionComponent<IModuleProps> = ({ children, title, ...props }) => {
  return (
    <StyledModule {...props}>
      { title && <h3>{ title }</h3> }
      { children }
    </StyledModule>
  )
}

/** @component */
export default Module
