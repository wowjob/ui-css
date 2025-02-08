import { describe, expect, test } from 'bun:test'
import { normalizeColumnGap } from './column-gap'

describe('normalizeColumnGap', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeColumnGap(null as any)).toBe('normal')
    expect(normalizeColumnGap(undefined as any)).toBe('normal')
  })

  test('should return the "normal" keyword value as-is', () => {
    expect(normalizeColumnGap('normal')).toBe('normal')
  })

  test('should convert valid <length> pixel values to rem', () => {
    expect(normalizeColumnGap('16px')).toBe('1rem')
    expect(normalizeColumnGap('32px')).toBe('2rem')
    expect(normalizeColumnGap(16)).toBe('1rem')
    expect(normalizeColumnGap(32)).toBe('2rem')
  })

  test('should return valid <length> values as-is when not in px', () => {
    expect(normalizeColumnGap('2.5em')).toBe('2.5em')
  })

  test('should return valid <percentage> values as-is', () => {
    expect(normalizeColumnGap('3%')).toBe('3%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnGap('inherit')).toBe('inherit')
    expect(normalizeColumnGap('initial')).toBe('initial')
    expect(normalizeColumnGap('revert')).toBe('revert')
    expect(normalizeColumnGap('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnGap('unset')).toBe('unset')
  })
})
