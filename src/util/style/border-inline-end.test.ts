import { describe, expect, test } from 'bun:test'
import { normalizeBorderInlineEnd } from './border-inline-end'

describe('normalizeBorderInlineEnd', () => {
  test('should return a string border-inline-end value as-is', () => {
    expect(normalizeBorderInlineEnd('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-inline-end object with defaults', () => {
    expect(
      normalizeBorderInlineEnd({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderInlineEnd(undefined as any)).toBe('none')
    expect(normalizeBorderInlineEnd(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-inline-end object', () => {
    expect(
      normalizeBorderInlineEnd({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})
