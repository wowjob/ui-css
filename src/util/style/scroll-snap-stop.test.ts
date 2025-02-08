import { describe, expect, test } from 'bun:test'
import { normalizeScrollSnapStop } from './scroll-snap-stop'

describe('normalizeScrollSnapStop', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeScrollSnapStop(null as any)).toBe('normal')
    expect(normalizeScrollSnapStop(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeScrollSnapStop('normal')).toBe('normal')
    expect(normalizeScrollSnapStop('always')).toBe('always')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollSnapStop('inherit')).toBe('inherit')
    expect(normalizeScrollSnapStop('initial')).toBe('initial')
    expect(normalizeScrollSnapStop('revert')).toBe('revert')
    expect(normalizeScrollSnapStop('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollSnapStop('unset')).toBe('unset')
  })
})
