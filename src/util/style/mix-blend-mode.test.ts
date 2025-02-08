import { describe, expect, test } from 'bun:test'
import { normalizeMixBlendMode } from './mix-blend-mode'

describe('normalizeMixBlendMode', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeMixBlendMode(null as any)).toBe('normal')
    expect(normalizeMixBlendMode(undefined as any)).toBe('normal')
    expect(normalizeMixBlendMode('normal')).toBe('normal')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMixBlendMode('multiply')).toBe('multiply')
    expect(normalizeMixBlendMode('screen')).toBe('screen')
    expect(normalizeMixBlendMode('overlay')).toBe('overlay')
    expect(normalizeMixBlendMode('darken')).toBe('darken')
    expect(normalizeMixBlendMode('lighten')).toBe('lighten')
    expect(normalizeMixBlendMode('color-dodge')).toBe('color-dodge')
    expect(normalizeMixBlendMode('color-burn')).toBe('color-burn')
    expect(normalizeMixBlendMode('hard-light')).toBe('hard-light')
    expect(normalizeMixBlendMode('soft-light')).toBe('soft-light')
    expect(normalizeMixBlendMode('difference')).toBe('difference')
    expect(normalizeMixBlendMode('exclusion')).toBe('exclusion')
    expect(normalizeMixBlendMode('hue')).toBe('hue')
    expect(normalizeMixBlendMode('saturation')).toBe('saturation')
    expect(normalizeMixBlendMode('color')).toBe('color')
    expect(normalizeMixBlendMode('luminosity')).toBe('luminosity')
    expect(normalizeMixBlendMode('plus-darker')).toBe('plus-darker')
    expect(normalizeMixBlendMode('plus-lighter')).toBe('plus-lighter')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMixBlendMode('inherit')).toBe('inherit')
    expect(normalizeMixBlendMode('initial')).toBe('initial')
    expect(normalizeMixBlendMode('revert')).toBe('revert')
    expect(normalizeMixBlendMode('revert-layer')).toBe('revert-layer')
    expect(normalizeMixBlendMode('unset')).toBe('unset')
  })
})
