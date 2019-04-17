import * as React from 'react'
import { useTranslation } from 'react-i18next'

/* Import components here */
import { StyledSentryErrorDialog } from './SentryErrorDialog.styles'
import { Button } from '../'

/* Import interfaces here */
import { ISentryErrorDialogProps } from './SentryErrorDialog.interfaces'

/* Import utilities here */
import * as Sentry from '@sentry/browser'

function showReportDialog () {
  Sentry.showReportDialog()
}

/* Component */

/**
 * This component assumes that the exception has already been registered with Sentry
 * and just shows the UI required to send a User Feedback Report.
 */
export const SentryErrorDialog: React.FunctionComponent<ISentryErrorDialogProps> = ({ children, ...props }) => {
  const { t } = useTranslation()

  return (
    <StyledSentryErrorDialog {...props}>
      <h3>{ t('error:crash.header') }</h3>
      <p>{ t('error:crash.message') }</p>
      <Button onClick={ showReportDialog }>{ t('error:crash.feedback-button') }</Button>
    </StyledSentryErrorDialog>
  )
}

/** @component */
export default SentryErrorDialog
