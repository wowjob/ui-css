import { describe, expect, test } from 'bun:test'
import { normalizeForcedColorAdjust } from './forced-color-adjust'

describe('normalizeForcedColorAdjust', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeForcedColorAdjust(null as any)).toBe('auto')
    expect(normalizeForcedColorAdjust(undefined as any)).toBe('auto')
  })

  test('should return valid values as-is', () => {
    expect(normalizeForcedColorAdjust('auto')).toBe('auto')
    expect(normalizeForcedColorAdjust('none')).toBe('none')
    expect(normalizeForcedColorAdjust('preserve-parent-color')).toBe(
      'preserve-parent-color'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeForcedColorAdjust('inherit')).toBe('inherit')
    expect(normalizeForcedColorAdjust('initial')).toBe('initial')
    expect(normalizeForcedColorAdjust('revert')).toBe('revert')
    expect(normalizeForcedColorAdjust('revert-layer')).toBe('revert-layer')
    expect(normalizeForcedColorAdjust('unset')).toBe('unset')
  })
})
