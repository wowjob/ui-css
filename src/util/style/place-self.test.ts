import { describe, expect, test } from 'bun:test'
import { normalizePlaceSelf } from './place-self'

describe('normalizePlaceSelf', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizePlaceSelf(null as any)).toBe('auto')
    expect(normalizePlaceSelf(undefined as any)).toBe('auto')
    expect(normalizePlaceSelf('auto')).toBe('auto')
  })

  test('should return single alignment values as-is', () => {
    expect(normalizePlaceSelf('center')).toBe('center')
    expect(normalizePlaceSelf('start')).toBe('start')
    expect(normalizePlaceSelf('flex-end')).toBe('flex-end')
    expect(normalizePlaceSelf('baseline')).toBe('baseline')
  })

  test('should handle two-value alignment syntax', () => {
    expect(normalizePlaceSelf('auto center')).toBe('auto center')
    expect(normalizePlaceSelf('normal start')).toBe('normal start')
    expect(normalizePlaceSelf('center normal')).toBe('center normal')
    expect(normalizePlaceSelf('stretch auto')).toBe('stretch auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePlaceSelf('inherit')).toBe('inherit')
    expect(normalizePlaceSelf('initial')).toBe('initial')
    expect(normalizePlaceSelf('revert')).toBe('revert')
    expect(normalizePlaceSelf('revert-layer')).toBe('revert-layer')
    expect(normalizePlaceSelf('unset')).toBe('unset')
  })
})
