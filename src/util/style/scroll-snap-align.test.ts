import { describe, expect, test } from 'bun:test'
import { normalizeScrollSnapAlign } from './scroll-snap-align'

describe('normalizeScrollSnapAlign', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollSnapAlign(null as any)).toBe('none')
    expect(normalizeScrollSnapAlign(undefined as any)).toBe('none')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeScrollSnapAlign('none')).toBe('none')
    expect(normalizeScrollSnapAlign('start')).toBe('start')
    expect(normalizeScrollSnapAlign('end')).toBe('end')
    expect(normalizeScrollSnapAlign('center')).toBe('center')
  })

  test('should return valid two keyword values as-is', () => {
    expect(normalizeScrollSnapAlign('start end')).toBe('start end')
    expect(normalizeScrollSnapAlign('end center')).toBe('end center')
    expect(normalizeScrollSnapAlign('center start')).toBe('center start')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollSnapAlign('inherit')).toBe('inherit')
    expect(normalizeScrollSnapAlign('initial')).toBe('initial')
    expect(normalizeScrollSnapAlign('revert')).toBe('revert')
    expect(normalizeScrollSnapAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollSnapAlign('unset')).toBe('unset')
  })
})
