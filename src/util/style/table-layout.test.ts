import { describe, expect, test } from 'bun:test'
import { normalizeTableLayout } from './table-layout'

describe('normalizeTableLayout', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTableLayout(null as any)).toBe('auto')
    expect(normalizeTableLayout(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTableLayout('auto')).toBe('auto')
    expect(normalizeTableLayout('fixed')).toBe('fixed')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTableLayout('inherit')).toBe('inherit')
    expect(normalizeTableLayout('initial')).toBe('initial')
    expect(normalizeTableLayout('revert')).toBe('revert')
    expect(normalizeTableLayout('revert-layer')).toBe('revert-layer')
    expect(normalizeTableLayout('unset')).toBe('unset')
  })
})
