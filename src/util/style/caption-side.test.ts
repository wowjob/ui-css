import { describe, expect, test } from 'bun:test'
import { normalizeCaptionSide } from './caption-side'

describe('normalizeCaptionSide', () => {
  test('should return "top" for null or undefined', () => {
    expect(normalizeCaptionSide(null as any)).toBe('top')
    expect(normalizeCaptionSide(undefined as any)).toBe('top')
  })

  test('should return directional values as-is', () => {
    expect(normalizeCaptionSide('top')).toBe('top')
    expect(normalizeCaptionSide('bottom')).toBe('bottom')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCaptionSide('inherit')).toBe('inherit')
    expect(normalizeCaptionSide('initial')).toBe('initial')
    expect(normalizeCaptionSide('revert')).toBe('revert')
    expect(normalizeCaptionSide('revert-layer')).toBe('revert-layer')
    expect(normalizeCaptionSide('unset')).toBe('unset')
  })
})
