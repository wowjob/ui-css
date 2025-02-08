import { describe, expect, test } from 'bun:test'
import { normalizeUserSelect } from './user-select'

describe('normalizeUserSelect', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeUserSelect(null as any)).toBe('auto')
    expect(normalizeUserSelect(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeUserSelect('none')).toBe('none')
    expect(normalizeUserSelect('auto')).toBe('auto')
    expect(normalizeUserSelect('text')).toBe('text')
    expect(normalizeUserSelect('all')).toBe('all')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeUserSelect('inherit')).toBe('inherit')
    expect(normalizeUserSelect('initial')).toBe('initial')
    expect(normalizeUserSelect('revert')).toBe('revert')
    expect(normalizeUserSelect('revert-layer')).toBe('revert-layer')
    expect(normalizeUserSelect('unset')).toBe('unset')
  })
})
