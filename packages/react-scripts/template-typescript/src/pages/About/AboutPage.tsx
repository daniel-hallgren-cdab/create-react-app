import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { RouteComponentProps } from 'react-router-dom'

export interface AboutPageProps extends WithTranslation {}

class About extends React.Component<AboutPageProps> {
  render() {
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

export const AboutPage = withTranslation()(About)
