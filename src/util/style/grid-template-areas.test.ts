import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplateAreas } from './grid-template-areas'

describe('normalizeGridTemplateAreas', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplateAreas(null as any)).toBe('none')
    expect(normalizeGridTemplateAreas(undefined as any)).toBe('none')
    expect(normalizeGridTemplateAreas('none')).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeGridTemplateAreas('"a b"')).toBe('"a b"')
    expect(
      normalizeGridTemplateAreas(`"a b ."
"a c d"`)
    ).toBe(`"a b ."
"a c d"`)
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridTemplateAreas(['a b', 'c d'])).toBe('"a b" "c d"')
    expect(normalizeGridTemplateAreas(['a b .', 'a c d'])).toBe(
      '"a b ." "a c d"'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridTemplateAreas('inherit')).toBe('inherit')
    expect(normalizeGridTemplateAreas('initial')).toBe('initial')
    expect(normalizeGridTemplateAreas('revert')).toBe('revert')
    expect(normalizeGridTemplateAreas('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplateAreas('unset')).toBe('unset')
  })
})
