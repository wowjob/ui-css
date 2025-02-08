import { describe, expect, test } from 'bun:test'
import { normalizeContentVisibility } from './content-visibility'

describe('normalizeContentVisibility', () => {
  test('should return "visible" for null or undefined', () => {
    expect(normalizeContentVisibility(null as any)).toBe('visible')
    expect(normalizeContentVisibility(undefined as any)).toBe('visible')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeContentVisibility('visible')).toBe('visible')
    expect(normalizeContentVisibility('hidden')).toBe('hidden')
    expect(normalizeContentVisibility('auto')).toBe('auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContentVisibility('inherit')).toBe('inherit')
    expect(normalizeContentVisibility('initial')).toBe('initial')
    expect(normalizeContentVisibility('revert')).toBe('revert')
    expect(normalizeContentVisibility('revert-layer')).toBe('revert-layer')
    expect(normalizeContentVisibility('unset')).toBe('unset')
  })
})
