import { describe, expect, test } from 'bun:test'
import { normalizeColumnSpan } from './column-span'

describe('normalizeColumnSpan', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeColumnSpan(null as any)).toBe('none')
    expect(normalizeColumnSpan(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeColumnSpan('none')).toBe('none')
    expect(normalizeColumnSpan('all')).toBe('all')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnSpan('inherit')).toBe('inherit')
    expect(normalizeColumnSpan('initial')).toBe('initial')
    expect(normalizeColumnSpan('revert')).toBe('revert')
    expect(normalizeColumnSpan('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnSpan('unset')).toBe('unset')
  })
})
