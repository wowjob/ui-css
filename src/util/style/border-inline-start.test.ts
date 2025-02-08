import { describe, expect, test } from 'bun:test'
import { normalizeBorderInlineStart } from './border-inline-start'

describe('normalizeBorderInlineStart', () => {
  test('should return a string border-inline-start value as-is', () => {
    expect(normalizeBorderInlineStart('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-inline-start object with defaults', () => {
    expect(
      normalizeBorderInlineStart({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderInlineStart(undefined as any)).toBe('none')
    expect(normalizeBorderInlineStart(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-inline-start object', () => {
    expect(
      normalizeBorderInlineStart({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})
