import { describe, expect, test } from 'bun:test'
import { normalizeTop } from './top'

describe('normalizeTop', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeTop(null as any)).toBe('auto')
    expect(normalizeTop(undefined as any)).toBe('auto')
    expect(normalizeTop('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeTop('3px')).toBe('0.1875rem')
    expect(normalizeTop(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeTop('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeTop('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeTop('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeTop('inherit')).toBe('inherit')
    expect(normalizeTop('initial')).toBe('initial')
    expect(normalizeTop('revert')).toBe('revert')
    expect(normalizeTop('revert-layer')).toBe('revert-layer')
    expect(normalizeTop('unset')).toBe('unset')
  })
})
