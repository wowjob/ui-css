import { describe, expect, test } from 'bun:test'
import { normalizeFillRule } from './fill-rule'

describe('normalizeFillRule', () => {
  test('should return "evenodd" for null or undefined', () => {
    expect(normalizeFillRule(null as any)).toBe('evenodd')
    expect(normalizeFillRule(undefined as any)).toBe('evenodd')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFillRule('evenodd')).toBe('evenodd')
    expect(normalizeFillRule('nonzero')).toBe('nonzero')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFillRule('inherit')).toBe('inherit')
    expect(normalizeFillRule('initial')).toBe('initial')
    expect(normalizeFillRule('revert')).toBe('revert')
    expect(normalizeFillRule('revert-layer')).toBe('revert-layer')
    expect(normalizeFillRule('unset')).toBe('unset')
  })
})
