import { describe, expect, test } from 'bun:test'
import { normalizeStopColor } from './stop-color'

describe('normalizeStopColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeStopColor(null as any)).toBe('currentcolor')
    expect(normalizeStopColor(undefined as any)).toBe('currentcolor')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeStopColor('red')).toBe('red')
    expect(normalizeStopColor('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
    expect(normalizeStopColor('currentcolor')).toBe('currentcolor')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStopColor('inherit')).toBe('inherit')
    expect(normalizeStopColor('initial')).toBe('initial')
    expect(normalizeStopColor('revert')).toBe('revert')
    expect(normalizeStopColor('revert-layer')).toBe('revert-layer')
    expect(normalizeStopColor('unset')).toBe('unset')
  })
})
