import { describe, expect, test } from 'bun:test'
import { normalizeCursor } from './cursor'

describe('normalizeCursor', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeCursor(null as any)).toBe('auto')
    expect(normalizeCursor(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeCursor('pointer')).toBe('pointer')
    expect(normalizeCursor('zoom-out')).toBe('zoom-out')
  })

  test('should return URL with fallback keyword as-is', () => {
    expect(normalizeCursor('url(hand.cur), pointer')).toBe(
      'url(hand.cur), pointer'
    )
  })

  test('should return URL with coordinates and fallback keyword as-is', () => {
    expect(normalizeCursor('url(cursor_1.png) 4 12, auto')).toBe(
      'url(cursor_1.png) 4 12, auto'
    )
    expect(normalizeCursor('url(cursor_2.png) 2 2, pointer')).toBe(
      'url(cursor_2.png) 2 2, pointer'
    )
  })

  test('should return multiple URLs and fallback keyword as-is', () => {
    expect(
      normalizeCursor(
        'url(cursor_1.svg) 4 5, url(cursor_2.svg), url(cursor_n.cur) 5 5, progress'
      )
    ).toBe(
      'url(cursor_1.svg) 4 5, url(cursor_2.svg), url(cursor_n.cur) 5 5, progress'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCursor('inherit')).toBe('inherit')
    expect(normalizeCursor('initial')).toBe('initial')
    expect(normalizeCursor('revert')).toBe('revert')
    expect(normalizeCursor('revert-layer')).toBe('revert-layer')
    expect(normalizeCursor('unset')).toBe('unset')
  })
})
