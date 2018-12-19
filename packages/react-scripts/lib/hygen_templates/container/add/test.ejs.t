---
to: <%= srcPath %>/src/containers/<%= name %>/<%= name %>.test.tsx
---
import * as React from 'react'
import { render } from 'react-testing-library'

import { <%= name %> } from './'

test('renders without crashing', () => {
  render(<<%= name %> />)
})
