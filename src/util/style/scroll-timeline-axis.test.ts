import { describe, expect, test } from 'bun:test'
import { normalizeScrollTimelineAxis } from './scroll-timeline-axis'

describe('normalizeScrollTimelineAxis', () => {
  test('should return "block" for null or undefined', () => {
    expect(normalizeScrollTimelineAxis(null as any)).toBe('block')
    expect(normalizeScrollTimelineAxis(undefined as any)).toBe('block')
  })

  test('should return valid logical property values as-is', () => {
    expect(normalizeScrollTimelineAxis('block')).toBe('block')
    expect(normalizeScrollTimelineAxis('inline')).toBe('inline')
  })

  test('should return valid non-logical property values as-is', () => {
    expect(normalizeScrollTimelineAxis('x')).toBe('x')
    expect(normalizeScrollTimelineAxis('y')).toBe('y')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollTimelineAxis('inherit')).toBe('inherit')
    expect(normalizeScrollTimelineAxis('initial')).toBe('initial')
    expect(normalizeScrollTimelineAxis('revert')).toBe('revert')
    expect(normalizeScrollTimelineAxis('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollTimelineAxis('unset')).toBe('unset')
  })
})
