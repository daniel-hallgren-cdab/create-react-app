import styled from '../../theme/StyledComponents'

import { IGridProps } from './Grid.interfaces'

export const StyledGrid: any = styled.div`
  /* If no value is provided use 4 columns */
  --grid-columns: ${(props: IGridProps) => (props.columns ? props.columns : 4)};

  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem 1rem;
`
