import { describe, expect, test } from 'bun:test'
import { normalizeDisplay } from './display'

describe('normalizeDisplay', () => {
  test('should return valid display values', () => {
    expect(normalizeDisplay('block')).toBe('block')
    expect(normalizeDisplay('inline')).toBe('inline')
    expect(normalizeDisplay('none')).toBe('none')
  })

  test('should handle invalid or missing display values gracefully', () => {
    expect(normalizeDisplay(undefined as any)).toBe('block')
    expect(normalizeDisplay(null as any)).toBe('block')
  })

  test('should handle global keywords', () => {
    expect(normalizeDisplay('inherit')).toBe('inherit')
    expect(normalizeDisplay('initial')).toBe('initial')
    expect(normalizeDisplay('unset')).toBe('unset')
  })
})
