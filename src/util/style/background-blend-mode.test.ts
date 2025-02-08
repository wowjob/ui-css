import { describe, expect, test } from 'bun:test'
import { normalizeBackgroundBlendMode } from './background-blend-mode'

describe('normalizeBackgroundBlendMode', () => {
  test('should return single blend mode values as-is', () => {
    expect(normalizeBackgroundBlendMode('normal')).toBe('normal')
    expect(normalizeBackgroundBlendMode('darken')).toBe('darken')
    expect(normalizeBackgroundBlendMode('luminosity')).toBe('luminosity')
  })

  test('should return multiple blend mode values as-is', () => {
    expect(normalizeBackgroundBlendMode('darken, luminosity')).toBe(
      'darken, luminosity'
    )
    expect(normalizeBackgroundBlendMode('multiply, screen, overlay')).toBe(
      'multiply, screen, overlay'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackgroundBlendMode('inherit')).toBe('inherit')
    expect(normalizeBackgroundBlendMode('initial')).toBe('initial')
    expect(normalizeBackgroundBlendMode('revert')).toBe('revert')
    expect(normalizeBackgroundBlendMode('revert-layer')).toBe('revert-layer')
    expect(normalizeBackgroundBlendMode('unset')).toBe('unset')
  })

  test('should return "normal" for null or undefined', () => {
    expect(normalizeBackgroundBlendMode(undefined as any)).toBe('normal')
    expect(normalizeBackgroundBlendMode(null as any)).toBe('normal')
  })
})
