import { describe, expect, test } from 'bun:test'
import { normalizeColumnWidth } from './column-width'

describe('normalizeColumnWidth', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColumnWidth(null as any)).toBe('auto')
    expect(normalizeColumnWidth(undefined as any)).toBe('auto')
  })

  test('should return "auto" keyword value as-is', () => {
    expect(normalizeColumnWidth('auto')).toBe('auto')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeColumnWidth('16px')).toBe('1rem')
    expect(normalizeColumnWidth('32px')).toBe('2rem')
    expect(normalizeColumnWidth(16)).toBe('1rem')
    expect(normalizeColumnWidth(32)).toBe('2rem')
  })

  test('should return valid <length> values as-is when not in px', () => {
    expect(normalizeColumnWidth('15.5em')).toBe('15.5em')
    expect(normalizeColumnWidth('3.3vw')).toBe('3.3vw')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnWidth('inherit')).toBe('inherit')
    expect(normalizeColumnWidth('initial')).toBe('initial')
    expect(normalizeColumnWidth('revert')).toBe('revert')
    expect(normalizeColumnWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnWidth('unset')).toBe('unset')
  })
})
