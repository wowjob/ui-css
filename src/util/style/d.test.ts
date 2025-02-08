import { describe, expect, test } from 'bun:test'
import { normalizeD } from './d'

describe('normalizeD', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeD(null as any)).toBe('none')
    expect(normalizeD(undefined as any)).toBe('none')
  })

  test('should return the "none" keyword value as-is', () => {
    expect(normalizeD('none')).toBe('none')
  })

  test('should return valid path values as-is', () => {
    expect(normalizeD('path("m 5,5 h 35 L 20,30 z")')).toBe(
      'path("m 5,5 h 35 L 20,30 z")'
    )
    expect(normalizeD('path("M 0,25 l 50,150 l 200,50 z")')).toBe(
      'path("M 0,25 l 50,150 l 200,50 z")'
    )
    expect(normalizeD('path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z")')).toBe(
      'path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z")'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeD('inherit')).toBe('inherit')
    expect(normalizeD('initial')).toBe('initial')
    expect(normalizeD('revert')).toBe('revert')
    expect(normalizeD('revert-layer')).toBe('revert-layer')
    expect(normalizeD('unset')).toBe('unset')
  })
})
