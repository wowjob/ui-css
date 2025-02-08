import { describe, expect, test } from 'bun:test'
import { normalizeBorderBlockStart } from './border-block-start'

describe('normalizeBorderBlockStart', () => {
  test('should return a string border-block-start value as-is', () => {
    expect(normalizeBorderBlockStart('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-block-start object with defaults', () => {
    expect(
      normalizeBorderBlockStart({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBlockStart(undefined as any)).toBe('none')
    expect(normalizeBorderBlockStart(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-block-start object', () => {
    expect(
      normalizeBorderBlockStart({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})
