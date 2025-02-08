import { describe, expect, test } from 'bun:test'
import { normalizeBorderRight } from './border-right'

describe('normalizeBorderRight', () => {
  test('should return a string border-right value as-is', () => {
    expect(normalizeBorderRight('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-right object with defaults', () => {
    expect(
      normalizeBorderRight({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-right object', () => {
    expect(
      normalizeBorderRight({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderRight(undefined as any)).toBe('none')
    expect(normalizeBorderRight(null as any)).toBe('none')
  })
})
