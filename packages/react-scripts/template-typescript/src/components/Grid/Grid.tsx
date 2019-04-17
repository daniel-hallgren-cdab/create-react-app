import * as React from 'react'

/* Import components here */
import { StyledGrid } from './Grid.styles'

/* Import interfaces here */
import { IGridProps } from './Grid.interfaces'

/* Import utilities here */

/* Component */

export const Grid: React.FunctionComponent<IGridProps> = ({ children, columns, ...props }) => {
  return (
    <StyledGrid columns={columns} {...props}>
      { children }
    </StyledGrid>
  )
}

/** @component */
export default Grid
