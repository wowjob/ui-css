import { describe, expect, test } from 'bun:test'
import { normalizeImageOrientation } from './image-orientation'

describe('normalizeImageOrientation', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeImageOrientation(null as any)).toBe('none')
    expect(normalizeImageOrientation(undefined as any)).toBe('none')
    expect(normalizeImageOrientation('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeImageOrientation('from-image')).toBe('from-image')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeImageOrientation('inherit')).toBe('inherit')
    expect(normalizeImageOrientation('initial')).toBe('initial')
    expect(normalizeImageOrientation('revert')).toBe('revert')
    expect(normalizeImageOrientation('revert-layer')).toBe('revert-layer')
    expect(normalizeImageOrientation('unset')).toBe('unset')
  })
})
