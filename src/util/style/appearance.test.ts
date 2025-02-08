import { describe, expect, test } from 'bun:test'
import { normalizeAppearance } from './appearance'

describe('normalizeAppearance', () => {
  test('should return valid basic values as-is', () => {
    expect(normalizeAppearance('none')).toBe('none')
    expect(normalizeAppearance('auto')).toBe('auto')
    expect(normalizeAppearance('menulist-button')).toBe('menulist-button')
    expect(normalizeAppearance('textfield')).toBe('textfield')
  })

  test('should return valid compat-auto values as-is', () => {
    expect(normalizeAppearance('button')).toBe('button')
    expect(normalizeAppearance('checkbox')).toBe('checkbox')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAppearance(undefined as any)).toBe('auto')
    expect(normalizeAppearance(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeAppearance('inherit')).toBe('inherit')
    expect(normalizeAppearance('initial')).toBe('initial')
    expect(normalizeAppearance('revert')).toBe('revert')
    expect(normalizeAppearance('revert-layer')).toBe('revert-layer')
    expect(normalizeAppearance('unset')).toBe('unset')
  })
})
