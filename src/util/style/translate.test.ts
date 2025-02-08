import { describe, expect, test } from 'bun:test'
import { normalizeTranslate } from './translate'

describe('normalizeTranslate', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeTranslate(null as any)).toBe('none')
    expect(normalizeTranslate(undefined as any)).toBe('none')
    expect(normalizeTranslate('none')).toBe('none')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTranslate('100px')).toBe('6.25rem') // Assuming 16px base font size
    expect(normalizeTranslate(200)).toBe('12.5rem')
  })

  test('should return single percentage or string values as-is', () => {
    expect(normalizeTranslate('50%')).toBe('50%')
  })

  test('should return two-value syntax as-is', () => {
    expect(normalizeTranslate('100px 200px')).toBe('100px 200px')
    expect(normalizeTranslate('50% 105px')).toBe('50% 105px')
  })

  test('should return three-value syntax as-is', () => {
    expect(normalizeTranslate('50% 105px 5rem')).toBe('50% 105px 5rem')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTranslate('inherit')).toBe('inherit')
    expect(normalizeTranslate('initial')).toBe('initial')
    expect(normalizeTranslate('revert')).toBe('revert')
    expect(normalizeTranslate('revert-layer')).toBe('revert-layer')
    expect(normalizeTranslate('unset')).toBe('unset')
  })
})
