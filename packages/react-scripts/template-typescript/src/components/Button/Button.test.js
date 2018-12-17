import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import { Button } from './'

test('renders without crashing', () => {
  const div = document.createElement('div')

  render(<Button />, div)
})

test('changes text on click', () => {
  const { container } = render(<Button>My button</Button>)

  expect(container.firstChild).toHaveTextContent('My button')

  fireEvent.click(container.firstChild)

  expect(container.firstChild).toHaveTextContent('I CHANGED')
})

test('changes does not change on click', () => {
  const { container } = render(
    <Button onClick={() => console.log('hello world')}>My button</Button>
  )

  expect(container.firstChild).toHaveTextContent('My button')

  fireEvent.click(container.firstChild)

  expect(container.firstChild).toHaveTextContent('My button')
})
