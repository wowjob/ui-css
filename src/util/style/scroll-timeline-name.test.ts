import { describe, expect, test } from 'bun:test'
import { normalizeScrollTimelineName } from './scroll-timeline-name'

describe('normalizeScrollTimelineName', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollTimelineName(null as any)).toBe('none')
    expect(normalizeScrollTimelineName(undefined as any)).toBe('none')
  })

  test('should return valid values as-is', () => {
    expect(normalizeScrollTimelineName('none')).toBe('none')
    expect(normalizeScrollTimelineName('--custom_name_for_timeline')).toBe(
      '--custom_name_for_timeline'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollTimelineName('inherit')).toBe('inherit')
    expect(normalizeScrollTimelineName('initial')).toBe('initial')
    expect(normalizeScrollTimelineName('revert')).toBe('revert')
    expect(normalizeScrollTimelineName('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollTimelineName('unset')).toBe('unset')
  })
})
