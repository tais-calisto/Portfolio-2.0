import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('Should be able to see the initial text on screen', async () => {
    render(<Header />)
    const title = await screen.findByText('Taís')
    expect(title).toBeInTheDocument()
  })
})
