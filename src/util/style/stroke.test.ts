import { describe, expect, test } from 'bun:test'
import { normalizeStroke } from './stroke'

describe('normalizeStroke', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeStroke(null as any)).toBe('none')
    expect(normalizeStroke(undefined as any)).toBe('none')
  })

  test('should return assorted color values as-is', () => {
    expect(normalizeStroke('rgb(153 51 102 / 1)')).toBe('rgb(153 51 102 / 1)')
    expect(
      normalizeStroke('color-mix(in lch, var(--primaryColor) 35%, gray 15%)')
    ).toBe('color-mix(in lch, var(--primaryColor) 35%, gray 15%)')
    expect(normalizeStroke('dodgerblue')).toBe('dodgerblue')
    expect(normalizeStroke('currentColor')).toBe('currentColor')
    expect(normalizeStroke('transparent')).toBe('transparent')
    expect(normalizeStroke('context-stroke')).toBe('context-stroke')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStroke('inherit')).toBe('inherit')
    expect(normalizeStroke('initial')).toBe('initial')
    expect(normalizeStroke('revert')).toBe('revert')
    expect(normalizeStroke('revert-layer')).toBe('revert-layer')
    expect(normalizeStroke('unset')).toBe('unset')
  })
})
