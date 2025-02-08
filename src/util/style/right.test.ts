import { describe, expect, test } from 'bun:test'
import { normalizeRight } from './right'

describe('normalizeRight', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeRight(null as any)).toBe('auto')
    expect(normalizeRight(undefined as any)).toBe('auto')
    expect(normalizeRight('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeRight('3px')).toBe('0.1875rem')
    expect(normalizeRight(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeRight('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeRight('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeRight('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeRight('inherit')).toBe('inherit')
    expect(normalizeRight('initial')).toBe('initial')
    expect(normalizeRight('revert')).toBe('revert')
    expect(normalizeRight('revert-layer')).toBe('revert-layer')
    expect(normalizeRight('unset')).toBe('unset')
  })
})
