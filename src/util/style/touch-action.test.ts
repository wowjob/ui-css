import { describe, expect, test } from 'bun:test'
import { normalizeTouchAction } from './touch-action'

describe('normalizeTouchAction', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTouchAction(null as any)).toBe('auto')
    expect(normalizeTouchAction(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTouchAction('auto')).toBe('auto')
    expect(normalizeTouchAction('none')).toBe('none')
    expect(normalizeTouchAction('pan-x')).toBe('pan-x')
    expect(normalizeTouchAction('pan-left')).toBe('pan-left')
    expect(normalizeTouchAction('pan-right')).toBe('pan-right')
    expect(normalizeTouchAction('pan-y')).toBe('pan-y')
    expect(normalizeTouchAction('pan-up')).toBe('pan-up')
    expect(normalizeTouchAction('pan-down')).toBe('pan-down')
    expect(normalizeTouchAction('pinch-zoom')).toBe('pinch-zoom')
    expect(normalizeTouchAction('manipulation')).toBe('manipulation')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTouchAction('inherit')).toBe('inherit')
    expect(normalizeTouchAction('initial')).toBe('initial')
    expect(normalizeTouchAction('revert')).toBe('revert')
    expect(normalizeTouchAction('revert-layer')).toBe('revert-layer')
    expect(normalizeTouchAction('unset')).toBe('unset')
  })
})
