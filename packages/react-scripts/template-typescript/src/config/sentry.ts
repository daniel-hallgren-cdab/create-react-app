import * as Sentry from '@sentry/browser'

const debug = !!process.env.REACT_APP_SENTRY_DEBUG
const enabled = !!process.env.REACT_APP_SENTRY_ENABLED
const dsn = process.env.REACT_APP_SENTRY_DSN || ''
const release = process.env.REACT_APP_VERSION
const environment = process.env.NODE_ENV || ''

export const sentryConfig = () => {
  Sentry.init({
    debug,
    dsn,
    release,
    enabled,
    environment,
    attachStacktrace: true,
  })

  /*
  * Configuration for Scope.
  */
  Sentry.configureScope(scope => {
    scope.setExtra('reactplate', true)
  })
}
