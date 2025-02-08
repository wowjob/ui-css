import { describe, expect, test } from 'bun:test'
import { normalizeFloodOpacity } from './flood-opacity'

describe('normalizeFloodOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeFloodOpacity(null as any)).toBe('1')
    expect(normalizeFloodOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as-is', () => {
    expect(normalizeFloodOpacity(0.2)).toBe('0.2')
    expect(normalizeFloodOpacity(1)).toBe('1')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFloodOpacity('20%')).toBe('20%')
    expect(normalizeFloodOpacity('100%')).toBe('100%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFloodOpacity('inherit')).toBe('inherit')
    expect(normalizeFloodOpacity('initial')).toBe('initial')
    expect(normalizeFloodOpacity('revert')).toBe('revert')
    expect(normalizeFloodOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeFloodOpacity('unset')).toBe('unset')
  })
})
