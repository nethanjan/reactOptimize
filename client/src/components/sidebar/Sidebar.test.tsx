import React from 'react'

import { render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'

test('it renders the given side bar title in the side bar', () => {
  const sideBarTitle = 'Kategorien'
  render(<Sidebar />)
  expect(screen.getByText(`${sideBarTitle}`)).toBeInTheDocument()
})

const categories = [
  {
    name: 'Unique Category Name',
    urlPath: '/path',
  },
]

test('it renders the category names in side bar with passed prop values', () => {
  render(<Sidebar categories={categories} />)
  expect(screen.getByText('Unique Category Name')).toBeInTheDocument()
})
