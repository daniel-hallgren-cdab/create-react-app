import * as React from 'react'
import { useTranslation } from 'react-i18next'

/* Import components here */
import { StyledError } from './Error.styles'

/* Import interfaces here */
import { IErrorProps } from './Error.interfaces'

/* Import utilities here */

/* Component */

export const Error: React.FunctionComponent<IErrorProps> = ({ children, ...props }) => {
  const { t } = useTranslation()

  return (
    <StyledError {...props}>
      <h1>{ t('error:page.not-found') }</h1>
      <p>{ t('error:page.not-found-text') }</p>
      { children }
    </StyledError>
  )
}

/** @component */
export default Error
