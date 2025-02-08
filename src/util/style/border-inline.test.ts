import { describe, expect, test } from 'bun:test'
import { normalizeBorderInline } from './border-inline'

describe('normalizeBorderInline', () => {
  test('should return a string border-inline value as-is', () => {
    expect(normalizeBorderInline('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-inline object with defaults', () => {
    expect(
      normalizeBorderInline({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderInline(undefined as any)).toBe('none')
    expect(normalizeBorderInline(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-inline object', () => {
    expect(
      normalizeBorderInline({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})
