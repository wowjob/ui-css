import { describe, expect, test } from 'bun:test'
import { normalizeWidth } from './width'

describe('normalizeWidth', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeWidth(null as any)).toBe('auto')
    expect(normalizeWidth(undefined as any)).toBe('auto')
  })

  test('should convert px values to rem', () => {
    expect(normalizeWidth('300px')).toBe('18.75rem') // Assuming 16px base font size
    expect(normalizeWidth(400)).toBe('25rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeWidth('75%')).toBe('75%')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWidth('auto')).toBe('auto')
    expect(normalizeWidth('stretch')).toBe('stretch')
    expect(normalizeWidth('max-content')).toBe('max-content')
    expect(normalizeWidth('min-content')).toBe('min-content')
  })

  test('should return valid function syntax as-is', () => {
    expect(normalizeWidth('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeWidth('anchor-size(--myAnchor inline, 120%)')).toBe(
      'anchor-size(--myAnchor inline, 120%)'
    )
    expect(normalizeWidth('minmax(100px, anchor-size(width))')).toBe(
      'minmax(100px, anchor-size(width))'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWidth('inherit')).toBe('inherit')
    expect(normalizeWidth('initial')).toBe('initial')
    expect(normalizeWidth('revert')).toBe('revert')
    expect(normalizeWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeWidth('unset')).toBe('unset')
  })
})
