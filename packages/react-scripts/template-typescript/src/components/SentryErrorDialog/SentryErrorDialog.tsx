import * as React from 'react'

import * as Sentry from '@sentry/browser'
import { useTranslation } from 'react-i18next'

import { Button } from '../'
import { StyledSentryErrorDialog } from './SentryErrorDialog.styles'

function showReportDialog() {
  Sentry.showReportDialog()
}

// Component
/**
 * This component assumes that the exception has already been registered with Sentry
 * and just shows the UI required to send a User Feedback Report.
 */
export const SentryErrorDialog: React.FunctionComponent = () => {
  const { t } = useTranslation()

  return (
    <StyledSentryErrorDialog>
      <h3>{t('error:crash.header')}</h3>
      <p>{t('error:crash.message')}</p>
      <Button onClick={showReportDialog}>{t('error:crash.feedback-button')}</Button>
    </StyledSentryErrorDialog>
  )
}

/** @component */
export default SentryErrorDialog
