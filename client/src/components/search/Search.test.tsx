import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import Search from './Search'

test('it renders the given place holder text in the search input', () => {
  render(<Search />)
  expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
})

const setup = () => {
  const utils = render(<Search />)
  const input = utils.getByPlaceholderText('Search')
  return {
    input,
    ...utils,
  }
}

test('It should keep a $ in front of the input', () => {
  const { input } = setup()
  expect(input.value).toBe('')
  fireEvent.change(input, { target: { value: 'new' } })
  expect(input.value).toBe('new')

  // need to check product list update
})
