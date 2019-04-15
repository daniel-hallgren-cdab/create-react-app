import { styled } from '../../theme'

import { IModuleProps } from './Module.interfaces'
import { ITheme } from '../../theme'

export const StyledModule = styled.div`
  /* Different values for the grid column span */
  --columns: ${(props: IModuleProps) => props.columns || 'var(--grid-columns)'};
  --md-columns: ${(props: IModuleProps) => props.mdColumns || 'var(--columns)'};
  --xl-columns: ${(props: IModuleProps) => props.xlColumns || 'var(--md-columns)'};

  /*
  * The grid column span rule
  * (Bubbles up)
  */
  --column-span: var(--columns);

  /* Different values for the grid offset column */
  --start-column: ${(props: IModuleProps) => props.startColumn || 'auto'};
  --md-start-column: ${(props: IModuleProps) => props.mdStartColumn || 'var(--start-column)'};
  --xl-start-column: ${(props: IModuleProps) => props.xlStartColumn || 'var(--md-start-column)'};

  /* The grid offset column rule */
  --offset-column: var(--start-column);

  grid-column-start: var(--start-column);
  grid-column-end: span var(--column-span);

  /* -- Update the grid column rules with a proper value based on the screen size */

  /* Medium, and above */
  @media (min-width: ${(props: { theme: ITheme }) => props.theme.sizes.mdContainer}) {
    --column-span: var(--md-columns);
    --offset-column: var(--md-start-column);
  }

  /* Extra large, and above */
  @media (min-width: ${(props: { theme: ITheme }) => props.theme.sizes.xlContainer}) {
    --column-span: var(--xl-columns);
    --offset-column: var(--xl-start-column);
  }

  /* -- End: Update the grid column rules with a proper value based on the screen size */

  /* Nested CSS */
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
  }
`
