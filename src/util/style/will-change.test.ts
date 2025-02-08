import { describe, expect, test } from 'bun:test'
import { normalizeWillChange } from './will-change'

describe('normalizeWillChange', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeWillChange(null as any)).toBe('auto')
    expect(normalizeWillChange(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWillChange('auto')).toBe('auto')
    expect(normalizeWillChange('scroll-position')).toBe('scroll-position')
    expect(normalizeWillChange('contents')).toBe('contents')
  })

  test('should return custom-ident and animatable-feature values as-is', () => {
    expect(normalizeWillChange('transform')).toBe('transform')
    expect(normalizeWillChange('opacity')).toBe('opacity')
    expect(normalizeWillChange('left, top')).toBe('left, top')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWillChange('inherit')).toBe('inherit')
    expect(normalizeWillChange('initial')).toBe('initial')
    expect(normalizeWillChange('revert')).toBe('revert')
    expect(normalizeWillChange('revert-layer')).toBe('revert-layer')
    expect(normalizeWillChange('unset')).toBe('unset')
  })
})
