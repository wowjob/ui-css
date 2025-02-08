import { describe, expect, test } from 'bun:test'
import { normalizeLightingColor } from './lighting-color'

describe('normalizeLightingColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeLightingColor(null as any)).toBe('currentcolor')
    expect(normalizeLightingColor(undefined as any)).toBe('currentcolor')
  })

  test('should return color values as-is', () => {
    expect(normalizeLightingColor('red')).toBe('red')
    expect(normalizeLightingColor('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
    expect(normalizeLightingColor('currentcolor')).toBe('currentcolor')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLightingColor('inherit')).toBe('inherit')
    expect(normalizeLightingColor('initial')).toBe('initial')
    expect(normalizeLightingColor('revert')).toBe('revert')
    expect(normalizeLightingColor('revert-layer')).toBe('revert-layer')
    expect(normalizeLightingColor('unset')).toBe('unset')
  })
})
