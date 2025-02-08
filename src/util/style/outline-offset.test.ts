import { describe, expect, test } from 'bun:test'
import { normalizeOutlineOffset } from './outline-offset'

describe('normalizeOutlineOffset', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeOutlineOffset(null as any)).toBe('0')
    expect(normalizeOutlineOffset(undefined as any)).toBe('0')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeOutlineOffset('3px')).toBe('0.1875rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizeOutlineOffset('0.2em')).toBe('0.2em')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOutlineOffset('inherit')).toBe('inherit')
    expect(normalizeOutlineOffset('initial')).toBe('initial')
    expect(normalizeOutlineOffset('revert')).toBe('revert')
    expect(normalizeOutlineOffset('revert-layer')).toBe('revert-layer')
    expect(normalizeOutlineOffset('unset')).toBe('unset')
  })
})
