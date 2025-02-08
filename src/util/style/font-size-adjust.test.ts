import { describe, expect, test } from 'bun:test'
import { normalizeFontSizeAdjust } from './font-size-adjust'

describe('normalizeFontSizeAdjust', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFontSizeAdjust(null as any)).toBe('none')
    expect(normalizeFontSizeAdjust(undefined as any)).toBe('none')
  })

  test('should return single values as-is', () => {
    expect(normalizeFontSizeAdjust(0.5)).toBe('0.5')
    expect(normalizeFontSizeAdjust('from-font')).toBe('from-font')
  })

  test('should return two values as-is', () => {
    expect(normalizeFontSizeAdjust('ex-height 0.5')).toBe('ex-height 0.5')
    expect(normalizeFontSizeAdjust('ch-width from-font')).toBe(
      'ch-width from-font'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSizeAdjust('inherit')).toBe('inherit')
    expect(normalizeFontSizeAdjust('initial')).toBe('initial')
    expect(normalizeFontSizeAdjust('revert')).toBe('revert')
    expect(normalizeFontSizeAdjust('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSizeAdjust('unset')).toBe('unset')
  })
})
