import { describe, expect, test } from 'bun:test'
import { normalizeFontOpticalSizing } from './font-optical-sizing'

describe('normalizeFontOpticalSizing', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontOpticalSizing(null as any)).toBe('auto')
    expect(normalizeFontOpticalSizing(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontOpticalSizing('none')).toBe('none')
    expect(normalizeFontOpticalSizing('auto')).toBe('auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontOpticalSizing('inherit')).toBe('inherit')
    expect(normalizeFontOpticalSizing('initial')).toBe('initial')
    expect(normalizeFontOpticalSizing('revert')).toBe('revert')
    expect(normalizeFontOpticalSizing('revert-layer')).toBe('revert-layer')
    expect(normalizeFontOpticalSizing('unset')).toBe('unset')
  })
})
