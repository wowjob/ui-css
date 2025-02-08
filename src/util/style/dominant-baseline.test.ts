import { describe, expect, test } from 'bun:test'
import { normalizeDominantBaseline } from './dominant-baseline'

describe('normalizeDominantBaseline', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeDominantBaseline(null as any)).toBe('auto')
    expect(normalizeDominantBaseline(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeDominantBaseline('auto')).toBe('auto')
    expect(normalizeDominantBaseline('alphabetic')).toBe('alphabetic')
    expect(normalizeDominantBaseline('central')).toBe('central')
    expect(normalizeDominantBaseline('hanging')).toBe('hanging')
    expect(normalizeDominantBaseline('ideographic')).toBe('ideographic')
    expect(normalizeDominantBaseline('mathematical')).toBe('mathematical')
    expect(normalizeDominantBaseline('middle')).toBe('middle')
    expect(normalizeDominantBaseline('text-bottom')).toBe('text-bottom')
    expect(normalizeDominantBaseline('text-top')).toBe('text-top')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeDominantBaseline('inherit')).toBe('inherit')
    expect(normalizeDominantBaseline('initial')).toBe('initial')
    expect(normalizeDominantBaseline('revert')).toBe('revert')
    expect(normalizeDominantBaseline('revert-layer')).toBe('revert-layer')
    expect(normalizeDominantBaseline('unset')).toBe('unset')
  })
})
