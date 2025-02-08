import { describe, expect, test } from 'bun:test'
import { normalizeFlexDirection } from './flex-direction'

describe('normalizeFlexDirection', () => {
  test('should return valid flex-direction values', () => {
    expect(normalizeFlexDirection('row')).toBe('row')
    expect(normalizeFlexDirection('column')).toBe('column')
    expect(normalizeFlexDirection('row-reverse')).toBe('row-reverse')
    expect(normalizeFlexDirection('column-reverse')).toBe('column-reverse')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexDirection(undefined as any)).toBe('row')
    expect(normalizeFlexDirection(null as any)).toBe('row')
  })

  test('should handle global keywords', () => {
    expect(normalizeFlexDirection('inherit')).toBe('inherit')
    expect(normalizeFlexDirection('initial')).toBe('initial')
    expect(normalizeFlexDirection('unset')).toBe('unset')
  })
})
