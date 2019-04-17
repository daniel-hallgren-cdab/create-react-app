import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

/* Import components here */
import { StyledStart, AppHeader, AppLink, AppLogo } from './Start.styles'
import { GlobalStyle } from '../../theme'
import { Button } from '../../components'
import { logo } from './'

/* Import interfaces here */
import { IStartProps } from './Start.interfaces'

/* Import utilities here */

/* Component */

export const Start: React.FunctionComponent<IStartProps> = ({ children, ...props }) => {
  const { t } = useTranslation()

  return (
    <StyledStart {...props}>
      <GlobalStyle />
      <AppHeader>
        <AppLogo src={logo} alt='logo' />
        <p>{ t('common:description') }</p>
        <Button>Click me!</Button>
        <AppLink href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            {t('common:applink')}
          </AppLink>
        <NavLink to='/about'>About this boilerplate</NavLink>
        <NavLink to='/Sentry'>Play with Sentry</NavLink>
        <NavLink to='/nonexistingpage'>Go to a non-existing page</NavLink>
      </AppHeader>
    </StyledStart>
  )
}

/** @component */
export default Start
