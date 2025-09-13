import { describe, test, expect } from 'bun:test'
import { increasingTriplet } from './inc-triplet'

describe("increasing triplet", () => {
  test("[20,100,10,12,5,13] should return true", () => {
    const input = [20, 100, 10, 12, 5, 13]
    const got = increasingTriplet(input)
    expect(got).toBe(true)
  })

  test("[1,2,3,4,5] should return true", () => {
    const input = [1, 2, 3, 4, 5]
    const got = increasingTriplet(input)
    expect(got).toBe(true)
  })

  test("[2,1,5,0,4,6] should return true", () => {
    const input = [2, 1, 5, 0, 4, 6]
    const got = increasingTriplet(input)
    expect(got).toBe(true)
  })
})
