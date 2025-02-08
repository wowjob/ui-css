import { describe, expect, test } from 'bun:test'
import { normalizeBorderCollapse } from './border-collapse'

describe('normalizeBorderCollapse', () => {
  test('should return "collapse" as-is', () => {
    expect(normalizeBorderCollapse('collapse')).toBe('collapse')
  })

  test('should return "separate" as-is', () => {
    expect(normalizeBorderCollapse('separate')).toBe('separate')
  })

  test('should return "inherit" as-is for global keywords', () => {
    expect(normalizeBorderCollapse('inherit')).toBe('inherit')
  })

  test('should return the default value "separate" for null or undefined', () => {
    expect(normalizeBorderCollapse(null as any)).toBe('separate')
    expect(normalizeBorderCollapse(undefined as any)).toBe('separate')
  })
})
