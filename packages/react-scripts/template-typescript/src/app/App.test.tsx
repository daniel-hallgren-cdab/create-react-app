import * as React from 'react'
import { render, cleanup } from 'react-testing-library'

afterEach(cleanup)

import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
