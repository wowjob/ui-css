import { describe, expect, test } from 'bun:test'
import { normalizeBottom } from './bottom'

describe('normalizeBottom', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeBottom(null as any)).toBe('auto')
    expect(normalizeBottom(undefined as any)).toBe('auto')
    expect(normalizeBottom('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeBottom('3px')).toBe('0.1875rem')
    expect(normalizeBottom(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeBottom('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeBottom('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeBottom('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBottom('inherit')).toBe('inherit')
    expect(normalizeBottom('initial')).toBe('initial')
    expect(normalizeBottom('revert')).toBe('revert')
    expect(normalizeBottom('revert-layer')).toBe('revert-layer')
    expect(normalizeBottom('unset')).toBe('unset')
  })
})
