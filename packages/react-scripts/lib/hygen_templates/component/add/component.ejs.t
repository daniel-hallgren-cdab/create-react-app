---
to: <%= srcPath %>/src/components/<%= name %>/<%= name %>.tsx
---
import * as React from 'react'
<% if (locals.i18n) { -%>
import { useTranslation } from 'react-i18next'
<% } -%>

/* Import components here */
import { Styled<%= name %> } from './<%= name %>.styles'

/* Import interfaces here */
<% if (locals.class) { -%>
import { I<%= name %>Props, I<%= name %>State } from './<%= name %>.interfaces'
<% } else { -%>
import { I<%= name %>Props } from './<%= name %>.interfaces'
<% } -%>

/* Import utilities here */

/* Component */

<% if (locals.class) { -%>
export class <%= name %> extends React.Component<I<%= name %>Props, I<%= name %>State> {
  public state = {
    counter: 0
  }

  public render () {
<% if (locals.i18n) { -%>
    const { t } = useTranslation()
<% } -%>

    const { children, ...props } = this.props

    return (
      <Styled<%= name %> { ...props }>
        <h1><%= name %></h1>
        <p>{ props.title }</p>
        { children }
      </Styled<%= name %>>
    )
  }
}
<% } else { -%>
export const <%= name %>: React.FunctionComponent<I<%= name %>Props> = ({ children, ...props }) => {
<% if (locals.i18n) { -%>
  const { t } = useTranslation()

<% } -%>
  return (
    <Styled<%= name %> {...props}>
      <h1><%= name %></h1>
      <p>{ props.title }</p>
      { children }
    </Styled<%= name %>>
  )
}
<% } -%>

/** @component */
export default <%= name %>
