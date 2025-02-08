import { describe, expect, test } from 'bun:test'
import { normalizeLeft } from './left'

describe('normalizeLeft', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeLeft(null as any)).toBe('auto')
    expect(normalizeLeft(undefined as any)).toBe('auto')
    expect(normalizeLeft('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeLeft('3px')).toBe('0.1875rem')
    expect(normalizeLeft(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeLeft('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeLeft('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeLeft('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLeft('inherit')).toBe('inherit')
    expect(normalizeLeft('initial')).toBe('initial')
    expect(normalizeLeft('revert')).toBe('revert')
    expect(normalizeLeft('revert-layer')).toBe('revert-layer')
    expect(normalizeLeft('unset')).toBe('unset')
  })
})
