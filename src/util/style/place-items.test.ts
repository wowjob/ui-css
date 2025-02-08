import { describe, expect, test } from 'bun:test'
import { normalizePlaceItems } from './place-items'

describe('normalizePlaceItems', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizePlaceItems(null as any)).toBe('normal')
    expect(normalizePlaceItems(undefined as any)).toBe('normal')
    expect(normalizePlaceItems('normal')).toBe('normal')
  })

  test('should return single alignment values as-is', () => {
    expect(normalizePlaceItems('center')).toBe('center')
    expect(normalizePlaceItems('start')).toBe('start')
    expect(normalizePlaceItems('flex-end')).toBe('flex-end')
    expect(normalizePlaceItems('baseline')).toBe('baseline')
  })

  test('should handle two-value alignment syntax', () => {
    expect(normalizePlaceItems('normal start')).toBe('normal start')
    expect(normalizePlaceItems('center normal')).toBe('center normal')
    expect(normalizePlaceItems('stretch legacy')).toBe('stretch legacy')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePlaceItems('inherit')).toBe('inherit')
    expect(normalizePlaceItems('initial')).toBe('initial')
    expect(normalizePlaceItems('revert')).toBe('revert')
    expect(normalizePlaceItems('revert-layer')).toBe('revert-layer')
    expect(normalizePlaceItems('unset')).toBe('unset')
  })
})
