import { describe, expect, test } from 'bun:test'
import { normalizeMask } from './mask'

describe('normalizeMask', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeMask(null as any)).toBe('none')
    expect(normalizeMask(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeMask('url(mask.svg)')).toBe('url(mask.svg)')
    expect(normalizeMask('alpha')).toBe('alpha')
  })

  test('should handle objects with multiple properties', () => {
    expect(
      normalizeMask({
        mode: 'alpha',
        image: 'url(mask1.svg)',
        origin: 'content-box',
        repeat: 'no-repeat',
        size: 'contain',
        composite: 'add',
        type: 'alpha',
      })
    ).toBe('alpha url(mask1.svg) content-box no-repeat contain add alpha')

    expect(
      normalizeMask({
        image: 'url(mask1.svg)',
        size: '50%',
      })
    ).toBe('url(mask1.svg) 50%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMask('inherit')).toBe('inherit')
    expect(normalizeMask('initial')).toBe('initial')
    expect(normalizeMask('revert')).toBe('revert')
    expect(normalizeMask('revert-layer')).toBe('revert-layer')
    expect(normalizeMask('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeMask('')).toBe('none')
    expect(normalizeMask('invalid-value')).toBe('invalid-value')
  })
})
