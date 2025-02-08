import { describe, expect, test } from 'bun:test'
import { normalizeScrollSnapType } from './scroll-snap-type'

describe('normalizeScrollSnapType', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollSnapType(null as any)).toBe('none')
    expect(normalizeScrollSnapType(undefined as any)).toBe('none')
  })

  test('should return valid keyword values for snap axes as-is', () => {
    expect(normalizeScrollSnapType('none')).toBe('none')
    expect(normalizeScrollSnapType('x')).toBe('x')
    expect(normalizeScrollSnapType('y')).toBe('y')
    expect(normalizeScrollSnapType('block')).toBe('block')
    expect(normalizeScrollSnapType('inline')).toBe('inline')
    expect(normalizeScrollSnapType('both')).toBe('both')
  })

  test('should return valid values with snap strictness as-is', () => {
    expect(normalizeScrollSnapType('x mandatory')).toBe('x mandatory')
    expect(normalizeScrollSnapType('y proximity')).toBe('y proximity')
    expect(normalizeScrollSnapType('both mandatory')).toBe('both mandatory')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollSnapType('inherit')).toBe('inherit')
    expect(normalizeScrollSnapType('initial')).toBe('initial')
    expect(normalizeScrollSnapType('revert')).toBe('revert')
    expect(normalizeScrollSnapType('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollSnapType('unset')).toBe('unset')
  })
})
