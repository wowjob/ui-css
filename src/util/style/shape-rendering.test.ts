import { describe, expect, test } from 'bun:test'
import { normalizeShapeRendering } from './shape-rendering'

describe('normalizeShapeRendering', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeShapeRendering(null as any)).toBe('auto')
    expect(normalizeShapeRendering(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeShapeRendering('auto')).toBe('auto')
    expect(normalizeShapeRendering('crispEdges')).toBe('crispEdges')
    expect(normalizeShapeRendering('geometricPrecision')).toBe(
      'geometricPrecision'
    )
    expect(normalizeShapeRendering('optimizeSpeed')).toBe('optimizeSpeed')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeRendering('inherit')).toBe('inherit')
    expect(normalizeShapeRendering('initial')).toBe('initial')
    expect(normalizeShapeRendering('revert')).toBe('revert')
    expect(normalizeShapeRendering('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeRendering('unset')).toBe('unset')
  })
})
