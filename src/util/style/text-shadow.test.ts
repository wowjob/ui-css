import { describe, expect, test } from 'bun:test'
import { normalizeTextShadow } from './text-shadow'

describe('normalizeTextShadow', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextShadow(null as any)).toBe('none')
    expect(normalizeTextShadow(undefined as any)).toBe('none')
  })

  test('should return valid text-shadow values as-is', () => {
    expect(normalizeTextShadow('1px 1px 2px black')).toBe('1px 1px 2px black')
    expect(normalizeTextShadow('#fc0 1px 0 10px')).toBe('#fc0 1px 0 10px')
    expect(normalizeTextShadow('5px 5px #558abb')).toBe('5px 5px #558abb')
    expect(normalizeTextShadow('white 2px 5px')).toBe('white 2px 5px')
    expect(normalizeTextShadow('5px 10px')).toBe('5px 10px')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextShadow('inherit')).toBe('inherit')
    expect(normalizeTextShadow('initial')).toBe('initial')
    expect(normalizeTextShadow('revert')).toBe('revert')
    expect(normalizeTextShadow('revert-layer')).toBe('revert-layer')
    expect(normalizeTextShadow('unset')).toBe('unset')
  })
})
