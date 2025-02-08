import { describe, expect, test } from 'bun:test'
import { normalizeTextJustify } from './text-justify'

describe('normalizeTextJustify', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextJustify(null as any)).toBe('auto')
    expect(normalizeTextJustify(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextJustify('none')).toBe('none')
    expect(normalizeTextJustify('auto')).toBe('auto')
    expect(normalizeTextJustify('inter-word')).toBe('inter-word')
    expect(normalizeTextJustify('inter-character')).toBe('inter-character')
    expect(normalizeTextJustify('distribute')).toBe('distribute') // Deprecated
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextJustify('inherit')).toBe('inherit')
    expect(normalizeTextJustify('initial')).toBe('initial')
    expect(normalizeTextJustify('revert')).toBe('revert')
    expect(normalizeTextJustify('revert-layer')).toBe('revert-layer')
    expect(normalizeTextJustify('unset')).toBe('unset')
  })
})
