import { render, cleanup } from '@testing-library/react'

import POTDPage from './POTDPage'

describe('POTDPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<POTDPage />)
    }).not.toThrow()
  })
})
