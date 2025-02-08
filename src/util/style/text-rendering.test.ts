import { describe, expect, test } from 'bun:test'
import { normalizeTextRendering } from './text-rendering'

describe('normalizeTextRendering', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextRendering(null as any)).toBe('auto')
    expect(normalizeTextRendering(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextRendering('auto')).toBe('auto')
    expect(normalizeTextRendering('optimizeSpeed')).toBe('optimizeSpeed')
    expect(normalizeTextRendering('optimizeLegibility')).toBe(
      'optimizeLegibility'
    )
    expect(normalizeTextRendering('geometricPrecision')).toBe(
      'geometricPrecision'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextRendering('inherit')).toBe('inherit')
    expect(normalizeTextRendering('initial')).toBe('initial')
    expect(normalizeTextRendering('revert')).toBe('revert')
    expect(normalizeTextRendering('revert-layer')).toBe('revert-layer')
    expect(normalizeTextRendering('unset')).toBe('unset')
  })
})
