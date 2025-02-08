import { describe, expect, test } from 'bun:test'
import { normalizeBoxSizing } from './box-sizing'

describe('normalizeBoxSizing', () => {
  test('should return "border-box" for null or undefined', () => {
    expect(normalizeBoxSizing(null as any)).toBe('border-box')
    expect(normalizeBoxSizing(undefined as any)).toBe('border-box')
  })

  test('should return valid box-sizing values as-is', () => {
    expect(normalizeBoxSizing('border-box')).toBe('border-box')
    expect(normalizeBoxSizing('content-box')).toBe('content-box')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBoxSizing('inherit')).toBe('inherit')
    expect(normalizeBoxSizing('initial')).toBe('initial')
    expect(normalizeBoxSizing('revert')).toBe('revert')
    expect(normalizeBoxSizing('revert-layer')).toBe('revert-layer')
    expect(normalizeBoxSizing('unset')).toBe('unset')
  })
})
