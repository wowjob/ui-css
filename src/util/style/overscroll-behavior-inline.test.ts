import { describe, expect, test } from 'bun:test'
import { normalizeOverscrollBehaviorInline } from './overscroll-behavior-inline'

describe('normalizeOverscrollBehaviorInline', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeOverscrollBehaviorInline(null as any)).toBe('auto')
    expect(normalizeOverscrollBehaviorInline(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorInline('auto')).toBe('auto')
    expect(normalizeOverscrollBehaviorInline('contain')).toBe('contain')
    expect(normalizeOverscrollBehaviorInline('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorInline('inherit')).toBe('inherit')
    expect(normalizeOverscrollBehaviorInline('initial')).toBe('initial')
    expect(normalizeOverscrollBehaviorInline('revert')).toBe('revert')
    expect(normalizeOverscrollBehaviorInline('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeOverscrollBehaviorInline('unset')).toBe('unset')
  })
})
