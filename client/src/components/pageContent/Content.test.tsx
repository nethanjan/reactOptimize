import React from 'react'

import { render, screen } from '@testing-library/react'
import Content from './Content'

const articles01 = [
  {
    name: 'Article Name',
    variantName: 'Variant',
    prices: {
      currency: 'EUR',
      regular: {
        value: 1001,
      },
    },
    images: [
      {
        path: '/path',
      },
    ],
  },
]

const articles02 = [
  {
    name: 'Article Name',
    variantName: 'Variant',
    prices: {
      currency: 'GBP',
      regular: {
        value: 1001,
      },
    },
    images: [
      {
        path: '/path',
      },
    ],
  },
]

const articles03 = [
  {
    name: 'Article Name',
    variantName: 'Variant',
    prices: {
      currency: 'USD',
      regular: {
        value: 1001,
      },
    },
    images: [
      {
        path: '/path',
      },
    ],
  },
]

const articles04 = [
  {
    name: 'Article Name',
    variantName: 'Variant',
    prices: {
      currency: '',
      regular: {
        value: 1001,
      },
    },
    images: [
      {
        path: '/path',
      },
    ],
  },
]

test('it renders the page content with passed prop values', () => {
  render(<Content content={articles01} />)
  expect(screen.getByText('Article Name')).toBeInTheDocument()
  expect(screen.getByText('€1001')).toBeInTheDocument()
})

test('it renders the page content with passed prop values', () => {
  render(<Content content={articles02} />)
  expect(screen.getByText('Article Name')).toBeInTheDocument()
  expect(screen.getByText('£1001')).toBeInTheDocument()
})

test('it renders the page content with passed prop values', () => {
  render(<Content content={articles03} />)
  expect(screen.getByText('Article Name')).toBeInTheDocument()
  expect(screen.getByText('$1001')).toBeInTheDocument()
})

test('it renders the page content with passed prop values', () => {
  render(<Content content={articles04} />)
  expect(screen.getByText('Article Name')).toBeInTheDocument()
  expect(screen.getByText('€1001')).toBeInTheDocument()
})
