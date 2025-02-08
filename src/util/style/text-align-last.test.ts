import { describe, expect, test } from 'bun:test'
import { normalizeTextAlignLast } from './text-align-last'

describe('normalizeTextAlignLast', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextAlignLast(null as any)).toBe('auto')
    expect(normalizeTextAlignLast(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextAlignLast('auto')).toBe('auto')
    expect(normalizeTextAlignLast('start')).toBe('start')
    expect(normalizeTextAlignLast('end')).toBe('end')
    expect(normalizeTextAlignLast('left')).toBe('left')
    expect(normalizeTextAlignLast('right')).toBe('right')
    expect(normalizeTextAlignLast('center')).toBe('center')
    expect(normalizeTextAlignLast('justify')).toBe('justify')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextAlignLast('inherit')).toBe('inherit')
    expect(normalizeTextAlignLast('initial')).toBe('initial')
    expect(normalizeTextAlignLast('revert')).toBe('revert')
    expect(normalizeTextAlignLast('revert-layer')).toBe('revert-layer')
    expect(normalizeTextAlignLast('unset')).toBe('unset')
  })
})
