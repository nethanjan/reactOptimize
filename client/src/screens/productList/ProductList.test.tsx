import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductList from './ProductList'

import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Reducer from '../../reducers/Reducer'

const store = configureStore({ reducer: Reducer })

function renderWithProviders(ui: React.ReactNode = {}) {
  return render(<Provider store={store}>{ui}</Provider>, {
    wrapper: BrowserRouter,
  })
}

describe('Product list render', () => {
  test('it renders the loading text when component called without mocking api call', async () => {
    renderWithProviders(<ProductList />)

    const followerDivElement = screen.getByText('Loading...')
    expect(followerDivElement).toBeInTheDocument()
  })
})
