import { describe, expect, test } from 'bun:test'
import { normalizeBorderLeft } from './border-left'

describe('normalizeBorderLeft', () => {
  test('should return a string border-left value as-is', () => {
    expect(normalizeBorderLeft('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-left object with defaults', () => {
    expect(
      normalizeBorderLeft({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-left object', () => {
    expect(
      normalizeBorderLeft({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderLeft(undefined as any)).toBe('none')
    expect(normalizeBorderLeft(null as any)).toBe('none')
  })
})
