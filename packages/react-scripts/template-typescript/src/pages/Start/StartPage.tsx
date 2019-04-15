import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { withTranslation, WithTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { Button } from '../../components/Button'

import { logo } from './'

import { GlobalStyle } from '../../theme'

const AppWrapper = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLink = styled.a`
  color: #61dafb;
`

const AppLogo = styled.img`
  height: 80px;

  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

export interface StartPageProps extends WithTranslation {}

class Start extends React.Component<StartPageProps> {
  render() {
    const { t } = this.props

    return (
      <AppWrapper>
        <GlobalStyle />
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>{t('common:description')}</p>
          <Button>Click me!</Button>
          <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            {t('common:applink')}
          </AppLink>
          <NavLink to="/about">About this boilerplate</NavLink>
          <NavLink to="/Sentry">Play with Sentry</NavLink>
          <NavLink to="/nonexistingpage">Go to a non-existing page</NavLink>
        </AppHeader>
      </AppWrapper>
    )
  }
}

export const StartPage = withTranslation()(Start)
