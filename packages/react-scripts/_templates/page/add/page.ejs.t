---
to: <%= srcPath %>/src/pages/<%= name %>/<%= name %>.tsx
---
import * as React from 'react'
import { withI18n, WithI18n } from 'react-i18next'
import styled from 'styled-components'

/* Import utilities here */

/* Import components here */

// CSS
const Styled<%= name %> = styled.div`
  /* background: white; */

  /* Nested CSS
  span {
    color: black;
  }
  */
`

// Props
export interface I<%= name %>Props extends WithI18n {
  /** A great <%= name %> title */
  /* title: string */
}

// Component
<% if (locals.class) { -%>
export class <%= name %> extends React.Component<I<%= name %>Props> {
  render () {
    const { t, children, ...props } = this.props

    return (
      <Styled<%= name %> {...props}>
        <span><%= name %></span>
        { children }
      </Styled<%= name %>>
    )
  }
}
<% } else { -%>
export const <%= name %>: React.SFC<I<%= name %>Props> = ({ t, children, ...props }) => {
  return (
    <Styled<%= name %> {...props}>
      <span><%= name %></span>
      { children }
    </Styled<%= name %>>
  )
}
<% } -%>

/** @component */
export default withI18n()(<%= name %>)
