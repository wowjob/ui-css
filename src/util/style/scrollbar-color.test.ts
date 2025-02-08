import { describe, expect, test } from 'bun:test'
import { normalizeScrollbarColor } from './scrollbar-color'

describe('normalizeScrollbarColor', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollbarColor(null as any)).toBe('auto')
    expect(normalizeScrollbarColor(undefined as any)).toBe('auto')
  })

  test('should return valid keyword value as-is', () => {
    expect(normalizeScrollbarColor('auto')).toBe('auto')
  })

  test('should return valid color values as-is', () => {
    expect(normalizeScrollbarColor('rebeccapurple green')).toBe(
      'rebeccapurple green'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollbarColor('inherit')).toBe('inherit')
    expect(normalizeScrollbarColor('initial')).toBe('initial')
    expect(normalizeScrollbarColor('revert')).toBe('revert')
    expect(normalizeScrollbarColor('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollbarColor('unset')).toBe('unset')
  })
})
