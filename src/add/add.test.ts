import { describe, expect, it } from 'vitest'
import { add } from './add'

describe('Add should', () => {
  it('add two number', () => {
    expect(add(2, 2)).toBe(4)
  })
  it('add multiple numbers', () => {
    expect(add(1, 2, 3, 4, 5)).toBe(15)
  })
  it('add negative numbers', () => {
    expect(add(-1, -2, -3, -4, 5)).toBe(-5)
  })
})
