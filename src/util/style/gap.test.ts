import { describe, expect, test } from 'bun:test'
import { normalizeGap } from './gap'

describe('normalizeGap', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeGap(null as any)).toBe('0')
    expect(normalizeGap(undefined as any)).toBe('0')
  })

  test('should normalize single values', () => {
    expect(normalizeGap('20px')).toBe('1.25rem')
    expect(normalizeGap(16)).toBe('1rem')
    expect(normalizeGap('100%')).toBe('100%')
    expect(normalizeGap('calc(10% + 20px)')).toBe('calc(10% + 20px)')
  })

  test('should normalize array of values', () => {
    expect(normalizeGap(['20px', '10px'])).toBe('1.25rem 0.625rem')
    expect(normalizeGap(['1em', '0.5em'])).toBe('1em 0.5em')
    expect(normalizeGap([16, '100%'])).toBe('1rem 100%')
    expect(normalizeGap(['calc(10% + 20px)', 'calc(20px + 10%)'])).toBe(
      'calc(10% + 20px) calc(20px + 10%)'
    )
  })

  test('should handle invalid or missing array values gracefully', () => {
    expect(normalizeGap([undefined, '10px'])).toBe('0 0.625rem')
    expect(normalizeGap(['20px', null])).toBe('1.25rem 0')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGap('inherit')).toBe('inherit')
    expect(normalizeGap('initial')).toBe('initial')
    expect(normalizeGap('revert')).toBe('revert')
    expect(normalizeGap('revert-layer')).toBe('revert-layer')
    expect(normalizeGap('unset')).toBe('unset')
  })
})
