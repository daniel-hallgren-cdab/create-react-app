import 'jest-dom/extend-expect'
import * as React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import { ThemeProvider } from '../../theme/StyledComponents'

import { theme } from '../../theme'

import { Button } from '.'

afterEach(cleanup)

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  )
})

test('changes text on click', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Button>My button</Button>
    </ThemeProvider>
  )

  const elem = container.firstChild

  expect(elem).toHaveTextContent('My button')
})

test('changes does not change on click', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Button
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => {
          return null
        }}
      >
        My button
      </Button>
    </ThemeProvider>
  )

  const elem = container.firstChild

  expect(elem).toHaveTextContent('My button')

  fireEvent.click(elem as HTMLElement)

  expect(elem).toHaveTextContent('My button')
})
