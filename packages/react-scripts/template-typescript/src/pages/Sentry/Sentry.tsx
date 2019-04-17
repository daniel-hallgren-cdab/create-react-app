import * as React from 'react'
import { useTranslation } from 'react-i18next'

/* Import components here */
import { StyledSentry } from './Sentry.styles'
import { ErrorBoundary, ErrorComponent } from '../../components'

/* Import interfaces here */
import { ISentryProps } from './Sentry.interfaces'

/* Import utilities here */

/* Component */

export const Sentry: React.FunctionComponent<ISentryProps> = ({ children, ...props }) => {
  const { t } = useTranslation()

  return (
    <StyledSentry {...props}>
      <h1>Sentry</h1>
      <ErrorBoundary>
        <p>{ t('error:no-error-occurred') }</p>
        <ErrorComponent />
      </ErrorBoundary>
    </StyledSentry>
  )
}

/** @component */
export default Sentry
