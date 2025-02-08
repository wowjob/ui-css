import { describe, expect, test } from 'bun:test'
import { normalizeBackgroundOrigin } from './background-origin'

describe('normalizeBackgroundOrigin', () => {
  test('should return valid keyword values as-is', () => {
    expect(normalizeBackgroundOrigin('border-box')).toBe('border-box')
    expect(normalizeBackgroundOrigin('padding-box')).toBe('padding-box')
    expect(normalizeBackgroundOrigin('content-box')).toBe('content-box')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackgroundOrigin('inherit')).toBe('inherit')
    expect(normalizeBackgroundOrigin('initial')).toBe('initial')
    expect(normalizeBackgroundOrigin('revert')).toBe('revert')
    expect(normalizeBackgroundOrigin('revert-layer')).toBe('revert-layer')
    expect(normalizeBackgroundOrigin('unset')).toBe('unset')
  })

  test('should return "border-box" for null or undefined', () => {
    expect(normalizeBackgroundOrigin(undefined as any)).toBe('border-box')
    expect(normalizeBackgroundOrigin(null as any)).toBe('border-box')
  })
})
