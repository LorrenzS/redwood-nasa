import { render, cleanup } from '@testing-library/react'

import Potd from './Potd'

describe('Potd', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Potd />)
    }).not.toThrow()
  })
})
