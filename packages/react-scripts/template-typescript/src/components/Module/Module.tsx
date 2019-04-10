import * as React from 'react'

/* Import utilities here */
import { IModuleProps } from './Module.interfaces'

/* Import components here */
import { StyledModule } from './Module.styles'

// Component
export const Module: React.FunctionComponent<IModuleProps> = ({ children, title, ...props }) => {
  return (
    <StyledModule {...props}>
      {title && <h3>{title}</h3>}
      {children}
    </StyledModule>
  )
}

/** @component */
export default Module
