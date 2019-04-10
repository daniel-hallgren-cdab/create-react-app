import * as React from 'react'

/* Import utilities here */
import { IGridProps } from './Grid.interfaces'

/* Import components here */
import { StyledGrid } from './Grid.styles'

// Component
export const Grid: React.FunctionComponent<IGridProps> = ({ children, columns, ...props }) => {
  return (
    <StyledGrid columns={columns} {...props}>
      {children}
    </StyledGrid>
  )
}

/** @component */
export default Grid
