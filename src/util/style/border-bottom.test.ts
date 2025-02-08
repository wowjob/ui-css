import { describe, expect, test } from 'bun:test'
import { normalizeBorderBottom } from './border-bottom'

describe('normalizeBorderBottom', () => {
  test('should return a string border-bottom value as-is', () => {
    expect(normalizeBorderBottom('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-bottom object with defaults', () => {
    expect(
      normalizeBorderBottom({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-bottom object', () => {
    expect(
      normalizeBorderBottom({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBottom(undefined as any)).toBe('none')
    expect(normalizeBorderBottom(null as any)).toBe('none')
  })
})
