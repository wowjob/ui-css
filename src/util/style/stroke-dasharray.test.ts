import { describe, expect, test } from 'bun:test'
import { normalizeStrokeDasharray } from './stroke-dasharray'

describe('normalizeStrokeDasharray', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeStrokeDasharray(null as any)).toBe('none')
    expect(normalizeStrokeDasharray(undefined as any)).toBe('none')
    expect(normalizeStrokeDasharray('none')).toBe('none')
  })

  test('should normalize array of numbers or strings', () => {
    expect(normalizeStrokeDasharray([2, 5])).toBe('2, 5')
    expect(normalizeStrokeDasharray(['20%', '50%'])).toBe('20%, 50%')
    expect(normalizeStrokeDasharray([2, 5, 3])).toBe('2, 5, 3')
  })

  test('should handle individual numeric or string values', () => {
    expect(normalizeStrokeDasharray(2)).toBe('2')
    expect(normalizeStrokeDasharray('5px')).toBe('5px')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeDasharray('inherit')).toBe('inherit')
    expect(normalizeStrokeDasharray('initial')).toBe('initial')
    expect(normalizeStrokeDasharray('revert')).toBe('revert')
    expect(normalizeStrokeDasharray('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeDasharray('unset')).toBe('unset')
  })
})
