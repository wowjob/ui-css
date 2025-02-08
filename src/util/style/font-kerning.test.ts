import { describe, expect, test } from 'bun:test'
import { normalizeFontKerning } from './font-kerning'

describe('normalizeFontKerning', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontKerning(null as any)).toBe('auto')
    expect(normalizeFontKerning(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontKerning('auto')).toBe('auto')
    expect(normalizeFontKerning('normal')).toBe('normal')
    expect(normalizeFontKerning('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontKerning('inherit')).toBe('inherit')
    expect(normalizeFontKerning('initial')).toBe('initial')
    expect(normalizeFontKerning('revert')).toBe('revert')
    expect(normalizeFontKerning('revert-layer')).toBe('revert-layer')
    expect(normalizeFontKerning('unset')).toBe('unset')
  })
})
