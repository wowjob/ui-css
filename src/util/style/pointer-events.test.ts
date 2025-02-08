import { describe, expect, test } from 'bun:test'
import { normalizePointerEvents } from './pointer-events'

describe('normalizePointerEvents', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizePointerEvents(null as any)).toBe('auto')
    expect(normalizePointerEvents(undefined as any)).toBe('auto')
    expect(normalizePointerEvents('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizePointerEvents('none')).toBe('none')
    expect(normalizePointerEvents('painted')).toBe('painted')
    expect(normalizePointerEvents('bounding-box')).toBe('bounding-box')
    expect(normalizePointerEvents('all')).toBe('all')
  })

  test('should return SVG-specific values as-is', () => {
    expect(normalizePointerEvents('visiblePainted')).toBe('visiblePainted')
    expect(normalizePointerEvents('visibleFill')).toBe('visibleFill')
    expect(normalizePointerEvents('visibleStroke')).toBe('visibleStroke')
    expect(normalizePointerEvents('visible')).toBe('visible')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePointerEvents('inherit')).toBe('inherit')
    expect(normalizePointerEvents('initial')).toBe('initial')
    expect(normalizePointerEvents('revert')).toBe('revert')
    expect(normalizePointerEvents('revert-layer')).toBe('revert-layer')
    expect(normalizePointerEvents('unset')).toBe('unset')
  })
})
