import { describe, expect, test } from 'bun:test'
import { normalizeTextUnderlinePosition } from './text-underline-position'

describe('normalizeTextUnderlinePosition', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextUnderlinePosition(null as any)).toBe('auto')
    expect(normalizeTextUnderlinePosition(undefined as any)).toBe('auto')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeTextUnderlinePosition('auto')).toBe('auto')
    expect(normalizeTextUnderlinePosition('under')).toBe('under')
    expect(normalizeTextUnderlinePosition('left')).toBe('left')
    expect(normalizeTextUnderlinePosition('right')).toBe('right')
  })

  test('should return valid multiple keyword values as-is', () => {
    expect(normalizeTextUnderlinePosition('under left')).toBe('under left')
    expect(normalizeTextUnderlinePosition('right under')).toBe('right under')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextUnderlinePosition('inherit')).toBe('inherit')
    expect(normalizeTextUnderlinePosition('initial')).toBe('initial')
    expect(normalizeTextUnderlinePosition('revert')).toBe('revert')
    expect(normalizeTextUnderlinePosition('revert-layer')).toBe('revert-layer')
    expect(normalizeTextUnderlinePosition('unset')).toBe('unset')
  })
})
