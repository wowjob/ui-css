import { describe, expect, test } from 'bun:test'
import { normalizeScrollTimeline } from './scroll-timeline'

describe('normalizeScrollTimeline', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollTimeline(null as any)).toBe('none')
    expect(normalizeScrollTimeline(undefined as any)).toBe('none')
  })

  test('should return valid single values as-is', () => {
    expect(normalizeScrollTimeline('none')).toBe('none')
    expect(normalizeScrollTimeline('--custom_name_for_timeline')).toBe(
      '--custom_name_for_timeline'
    )
  })

  test('should return valid two values as-is', () => {
    expect(normalizeScrollTimeline('--custom_name_for_timeline block')).toBe(
      '--custom_name_for_timeline block'
    )
    expect(normalizeScrollTimeline('none inline')).toBe('none inline')
    expect(normalizeScrollTimeline('--custom_name_for_timeline x')).toBe(
      '--custom_name_for_timeline x'
    )
    expect(normalizeScrollTimeline('none y')).toBe('none y')
  })

  test('should handle invalid inputs gracefully', () => {
    expect(normalizeScrollTimeline('')).toBe('none')
    expect(normalizeScrollTimeline(undefined as any)).toBe('none')
  })
})
