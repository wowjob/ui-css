import { describe, expect, test } from 'bun:test'
import { normalizeFloodColor } from './flood-color'

describe('normalizeFloodColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeFloodColor(null as any)).toBe('currentcolor')
    expect(normalizeFloodColor(undefined as any)).toBe('currentcolor')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeFloodColor('red')).toBe('red')
    expect(normalizeFloodColor('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
    expect(normalizeFloodColor('currentcolor')).toBe('currentcolor')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFloodColor('inherit')).toBe('inherit')
    expect(normalizeFloodColor('initial')).toBe('initial')
    expect(normalizeFloodColor('revert')).toBe('revert')
    expect(normalizeFloodColor('revert-layer')).toBe('revert-layer')
    expect(normalizeFloodColor('unset')).toBe('unset')
  })
})
