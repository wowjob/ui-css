import { describe, expect, test } from 'bun:test'
import { normalizeImageRendering } from './image-rendering'

describe('normalizeImageRendering', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeImageRendering(null as any)).toBe('auto')
    expect(normalizeImageRendering(undefined as any)).toBe('auto')
    expect(normalizeImageRendering('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeImageRendering('smooth')).toBe('smooth')
    expect(normalizeImageRendering('crisp-edges')).toBe('crisp-edges')
    expect(normalizeImageRendering('pixelated')).toBe('pixelated')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeImageRendering('inherit')).toBe('inherit')
    expect(normalizeImageRendering('initial')).toBe('initial')
    expect(normalizeImageRendering('revert')).toBe('revert')
    expect(normalizeImageRendering('revert-layer')).toBe('revert-layer')
    expect(normalizeImageRendering('unset')).toBe('unset')
  })
})
