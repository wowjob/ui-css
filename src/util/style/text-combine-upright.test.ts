import { describe, expect, test } from 'bun:test'
import { normalizeTextCombineUpright } from './text-combine-upright'

describe('normalizeTextCombineUpright', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextCombineUpright(null as any)).toBe('none')
    expect(normalizeTextCombineUpright(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextCombineUpright('none')).toBe('none')
    expect(normalizeTextCombineUpright('all')).toBe('all')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextCombineUpright('inherit')).toBe('inherit')
    expect(normalizeTextCombineUpright('initial')).toBe('initial')
    expect(normalizeTextCombineUpright('revert')).toBe('revert')
    expect(normalizeTextCombineUpright('revert-layer')).toBe('revert-layer')
    expect(normalizeTextCombineUpright('unset')).toBe('unset')
  })
})
