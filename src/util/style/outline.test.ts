import { describe, expect, test } from 'bun:test'
import { normalizeOutline } from './outline'

describe('normalizeOutline', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeOutline(null as any)).toBe('none')
    expect(normalizeOutline(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeOutline('1px solid blue')).toBe('1px solid blue')
  })

  test('should handle arrays with valid values only', () => {
    expect(normalizeOutline(['1px', 'solid', 'blue', '', undefined])).toBe(
      '1px solid blue'
    )
  })

  test('should handle objects with multiple properties', () => {
    expect(
      normalizeOutline({
        color: '#f92525',
        style: 'solid',
        width: '1px',
      })
    ).toBe('#f92525 solid 1px')

    expect(
      normalizeOutline({
        color: 'rgb(30 222 121)',
        style: 'dashed',
      })
    ).toBe('rgb(30 222 121) dashed')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOutline('inherit')).toBe('inherit')
    expect(normalizeOutline('initial')).toBe('initial')
    expect(normalizeOutline('revert')).toBe('revert')
    expect(normalizeOutline('revert-layer')).toBe('revert-layer')
    expect(normalizeOutline('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeOutline('')).toBe('none')
    expect(normalizeOutline('invalid-value')).toBe('invalid-value')
  })
})
