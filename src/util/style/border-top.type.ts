import { describe, expect, test } from 'bun:test'
import { normalizeBorderTop } from './border-top'

describe('normalizeBorderTop', () => {
  test('should return a string border-top value as-is', () => {
    expect(normalizeBorderTop('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-top object with defaults', () => {
    expect(
      normalizeBorderTop({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-top object', () => {
    expect(
      normalizeBorderTop({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderTop(undefined as any)).toBe('none')
    expect(normalizeBorderTop(null as any)).toBe('none')
  })
})
