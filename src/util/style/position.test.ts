import { describe, expect, test } from 'bun:test'
import { normalizePosition } from './position'

describe('normalizePosition', () => {
  test('should return "static" for null, undefined, or "static"', () => {
    expect(normalizePosition(null as any)).toBe('static')
    expect(normalizePosition(undefined as any)).toBe('static')
    expect(normalizePosition('static')).toBe('static')
  })

  test('should return positional keyword values as-is', () => {
    expect(normalizePosition('relative')).toBe('relative')
    expect(normalizePosition('absolute')).toBe('absolute')
    expect(normalizePosition('fixed')).toBe('fixed')
    expect(normalizePosition('sticky')).toBe('sticky')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePosition('inherit')).toBe('inherit')
    expect(normalizePosition('initial')).toBe('initial')
    expect(normalizePosition('revert')).toBe('revert')
    expect(normalizePosition('revert-layer')).toBe('revert-layer')
    expect(normalizePosition('unset')).toBe('unset')
  })
})
