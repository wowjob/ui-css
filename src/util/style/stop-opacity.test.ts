import { describe, expect, test } from 'bun:test'
import { normalizeStopOpacity } from './stop-opacity'

describe('normalizeStopOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeStopOpacity(null as any)).toBe('1')
    expect(normalizeStopOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as a string', () => {
    expect(normalizeStopOpacity(0.2)).toBe('0.2')
    expect(normalizeStopOpacity(1)).toBe('1')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeStopOpacity('20%')).toBe('20%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStopOpacity('inherit')).toBe('inherit')
    expect(normalizeStopOpacity('initial')).toBe('initial')
    expect(normalizeStopOpacity('revert')).toBe('revert')
    expect(normalizeStopOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeStopOpacity('unset')).toBe('unset')
  })
})
