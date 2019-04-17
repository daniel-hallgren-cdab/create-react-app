import * as React from 'react'
import { useTranslation } from 'react-i18next'

/* Import components here */
import { StyledAbout } from './About.styles'

/* Import interfaces here */
import { IAboutProps } from './About.interfaces'

/* Import utilities here */

/* Component */

export const About: React.FunctionComponent<IAboutProps> = ({ children, ...props }) => {
  const { t } = useTranslation()

  return (
    <StyledAbout {...props}>
      <h1>{ t('common:about') }</h1>
      <p>{ t('common:lorem') }</p>
    </StyledAbout>
  )
}

/** @component */
export default About
