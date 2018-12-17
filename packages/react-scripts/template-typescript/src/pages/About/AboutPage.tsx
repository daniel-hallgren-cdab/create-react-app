import * as React from 'react'
import { withI18n, WithI18n } from 'react-i18next'
import { RouteComponentProps } from 'react-router-dom'

export interface AboutPageProps extends WithI18n {}

class About extends React.Component<AboutPageProps> {
  render() {
    const { t } = this.props

    return (
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laboriosam quis sint earum
          nihil consectetur eius harum vel aut repudiandae?
        </p>
      </div>
    )
  }
}

export const AboutPage = withI18n()(About)
