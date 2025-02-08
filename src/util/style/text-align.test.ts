import { describe, expect, test } from 'bun:test'
import { normalizeTextAlign } from './text-align'

describe('normalizeTextAlign', () => {
  test('should return "start" for null or undefined', () => {
    expect(normalizeTextAlign(null as any)).toBe('start')
    expect(normalizeTextAlign(undefined as any)).toBe('start')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextAlign('start')).toBe('start')
    expect(normalizeTextAlign('end')).toBe('end')
    expect(normalizeTextAlign('left')).toBe('left')
    expect(normalizeTextAlign('right')).toBe('right')
    expect(normalizeTextAlign('center')).toBe('center')
    expect(normalizeTextAlign('justify')).toBe('justify')
    expect(normalizeTextAlign('match-parent')).toBe('match-parent')
  })

  test('should return block alignment values as-is', () => {
    expect(normalizeTextAlign('-moz-center')).toBe('-moz-center')
    expect(normalizeTextAlign('-webkit-center')).toBe('-webkit-center')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextAlign('inherit')).toBe('inherit')
    expect(normalizeTextAlign('initial')).toBe('initial')
    expect(normalizeTextAlign('revert')).toBe('revert')
    expect(normalizeTextAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeTextAlign('unset')).toBe('unset')
  })
})
