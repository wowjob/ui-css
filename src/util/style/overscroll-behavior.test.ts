import { describe, expect, test } from 'bun:test'
import { normalizeOverscrollBehavior } from './overscroll-behavior'

describe('normalizeOverscrollBehavior', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeOverscrollBehavior(null as any)).toBe('auto')
    expect(normalizeOverscrollBehavior(undefined as any)).toBe('auto')
  })

  test('should return string values as-is', () => {
    expect(normalizeOverscrollBehavior('auto')).toBe('auto')
    expect(normalizeOverscrollBehavior('auto contain')).toBe('auto contain')
  })

  test('should handle object format for x and y', () => {
    expect(normalizeOverscrollBehavior({ x: 'contain', y: 'contain' })).toBe(
      'contain'
    )
    expect(normalizeOverscrollBehavior({ x: 'auto', y: 'none' })).toBe(
      'auto none'
    )
    expect(normalizeOverscrollBehavior({ x: 'contain' })).toBe('contain auto')
    expect(normalizeOverscrollBehavior({ y: 'none' })).toBe('auto none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverscrollBehavior('inherit')).toBe('inherit')
    expect(normalizeOverscrollBehavior('initial')).toBe('initial')
    expect(normalizeOverscrollBehavior('revert')).toBe('revert')
    expect(normalizeOverscrollBehavior('revert-layer')).toBe('revert-layer')
    expect(normalizeOverscrollBehavior('unset')).toBe('unset')
  })
})
