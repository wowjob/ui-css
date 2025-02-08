import { describe, expect, test } from 'bun:test'
import { normalizeFillOpacity } from './fill-opacity'

describe('normalizeFillOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeFillOpacity(null as any)).toBe('1')
    expect(normalizeFillOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as-is', () => {
    expect(normalizeFillOpacity(0.2)).toBe('0.2')
    expect(normalizeFillOpacity(1)).toBe('1')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFillOpacity('20%')).toBe('20%')
    expect(normalizeFillOpacity('100%')).toBe('100%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFillOpacity('inherit')).toBe('inherit')
    expect(normalizeFillOpacity('initial')).toBe('initial')
    expect(normalizeFillOpacity('revert')).toBe('revert')
    expect(normalizeFillOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeFillOpacity('unset')).toBe('unset')
  })
})
