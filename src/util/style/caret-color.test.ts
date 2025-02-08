import { describe, expect, test } from 'bun:test'
import { normalizeCaretColor } from './caret-color'

describe('normalizeCaretColor', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeCaretColor(null as any)).toBe('auto')
    expect(normalizeCaretColor(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeCaretColor('auto')).toBe('auto')
    expect(normalizeCaretColor('transparent')).toBe('transparent')
    expect(normalizeCaretColor('currentcolor')).toBe('currentcolor')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeCaretColor('red')).toBe('red')
    expect(normalizeCaretColor('#5729e9')).toBe('#5729e9')
    expect(normalizeCaretColor('rgb(0 200 0)')).toBe('rgb(0 200 0)')
    expect(normalizeCaretColor('hsl(228deg 4% 24% / 80%)')).toBe(
      'hsl(228deg 4% 24% / 80%)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCaretColor('inherit')).toBe('inherit')
    expect(normalizeCaretColor('initial')).toBe('initial')
    expect(normalizeCaretColor('revert')).toBe('revert')
    expect(normalizeCaretColor('revert-layer')).toBe('revert-layer')
    expect(normalizeCaretColor('unset')).toBe('unset')
  })
})
