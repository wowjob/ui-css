import { describe, expect, test } from 'bun:test'
import { normalizeBorderBlockEnd } from './border-block-end'

describe('normalizeBorderBlockEnd', () => {
  test('should return a string border-block-end value as-is', () => {
    expect(normalizeBorderBlockEnd('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-block-end object with defaults', () => {
    expect(
      normalizeBorderBlockEnd({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBlockEnd(undefined as any)).toBe('none')
    expect(normalizeBorderBlockEnd(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-block-end object', () => {
    expect(
      normalizeBorderBlockEnd({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})
