---
to: <%= srcPath %>/src/contexts/<%= name %>/<%= name %>Context.tsx
---
import * as React from 'react'

/* import utilities here */

/* Interfaces */

interface I<%= name %>ContextState {
  loading: boolean
  <%= name.toLowerCase() %>?: any
}

export interface I<%= name %>Context {
  loading: boolean
  <%= name.toLowerCase() %>?: any
  set<%= name %>(<%= name.toLowerCase() %>: any): void
}

/* Context */

const initialContext: I<%= name %>Context = {
  loading: false,
  <%= name.toLowerCase() %>: undefined,
  set<%= name %>: () => null,
}

const <%= name %>Context = React.createContext<I<%= name %>Context>(initialContext)

export class <%= name %>Provider extends React.Component<{}, I<%= name %>ContextState> {
  state: I<%= name %>ContextState = {
    loading: false,
    <%= name.toLowerCase() %>: undefined
  }

  render () {
    const { children } = this.props

    return (
      <<%= name %>Context.Provider
        value={{
          loading: this.state.loading,
          <%= name.toLowerCase() %>: this.state.<%= name.toLowerCase() %>,
          set<%= name %>: (<%= name.toLowerCase() %>: any) => this.setState({ <%= name.toLowerCase() %> })
        }}
      >
        {children}
      </<%= name %>Context.Provider>
    )
  }
}

export const <%= name %>Consumer = <%= name %>Context.Consumer

export const with<%= name %>Context = (Component: any) => (props: any) => (
  <<%= name %>Consumer>
    {
      <%= name.charAt(0).toLowerCase() + name.slice(1) %>Context => <Component <%= name.charAt(0).toLowerCase() + name.slice(1) %>Context={<%= name.charAt(0).toLowerCase() + name.slice(1) %>Context} {...props} />
    }
  </<%= name %>Consumer>
)

export interface With<%= name %>Context {
  <%= name.charAt(0).toLowerCase() + name.slice(1) %>Context: I<%= name %>Context
}
