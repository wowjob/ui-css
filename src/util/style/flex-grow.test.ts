import { describe, expect, test } from 'bun:test'
import { normalizeFlexGrow } from './flex-grow'

describe('normalizeFlexGrow', () => {
  test('should return valid flex-grow values', () => {
    expect(normalizeFlexGrow(1)).toBe('1')
    expect(normalizeFlexGrow(0)).toBe('0')
    expect(normalizeFlexGrow('inherit')).toBe('inherit')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexGrow(undefined as any)).toBe('0')
    expect(normalizeFlexGrow(null as any)).toBe('0')
  })
})
