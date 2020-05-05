import { render, cleanup } from '@testing-library/react'

import PotdContainer from './PotdContainer'

describe('PotdContainer', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PotdContainer />)
    }).not.toThrow()
  })
})
