import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import ContentTitle from './ContentTitle'

const pageTitle = 'Page Title'
const pageCount = 1001

test("it renders the loading text in the page content when api hasn't fetch data", () => {
  render(<ContentTitle title={''} count={0} loading={true} />)
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})

test('it renders the page content title and content count in the page content with passed prop values', () => {
  render(<ContentTitle title={pageTitle} count={pageCount} loading={false} />)
  expect(screen.getByText('Page Title')).toBeInTheDocument()
  expect(screen.getByText('(1001)')).toBeInTheDocument()
})

test('it renders the page content title in the page content with passed prop values', () => {
  render(<ContentTitle title={pageTitle} count={0} loading={false} />)
  expect(screen.getByText('Page Title')).toBeInTheDocument()
})

test('it renders the page content count in the page content with passed prop values', () => {
  render(<ContentTitle title={''} count={pageCount} loading={false} />)
  expect(screen.getByText('(1001)')).toBeInTheDocument()
})
