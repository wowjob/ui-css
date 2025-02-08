import { describe, expect, test } from 'bun:test'
import { normalizeOverscrollBehaviorBlock } from './overscroll-behavior-block'

describe('normalizeOverscrollBehaviorBlock', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeOverscrollBehaviorBlock(null as any)).toBe('auto')
    expect(normalizeOverscrollBehaviorBlock(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorBlock('auto')).toBe('auto')
    expect(normalizeOverscrollBehaviorBlock('contain')).toBe('contain')
    expect(normalizeOverscrollBehaviorBlock('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorBlock('inherit')).toBe('inherit')
    expect(normalizeOverscrollBehaviorBlock('initial')).toBe('initial')
    expect(normalizeOverscrollBehaviorBlock('revert')).toBe('revert')
    expect(normalizeOverscrollBehaviorBlock('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeOverscrollBehaviorBlock('unset')).toBe('unset')
  })
})
