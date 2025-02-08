import { describe, expect, test } from 'bun:test'
import { normalizeBorderBlock } from './border-block'

describe('normalizeBorderBlock', () => {
  test('should return a string border-block value as-is', () => {
    expect(normalizeBorderBlock('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-block object with defaults', () => {
    expect(
      normalizeBorderBlock({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBlock(undefined as any)).toBe('none')
    expect(normalizeBorderBlock(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-block object', () => {
    expect(
      normalizeBorderBlock({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})
