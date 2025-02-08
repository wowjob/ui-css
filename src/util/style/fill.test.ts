import { describe, expect, test } from 'bun:test'
import { normalizeFill } from './fill'

describe('normalizeFill', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFill(null as any)).toBe('none')
    expect(normalizeFill(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFill('none')).toBe('none')
    expect(normalizeFill('context-fill')).toBe('context-fill')
    expect(normalizeFill('context-stroke')).toBe('context-stroke')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeFill('red')).toBe('red')
    expect(normalizeFill('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
  })

  test('should return valid <url> values as-is', () => {
    expect(normalizeFill('url(#gradientElementID)')).toBe(
      'url(#gradientElementID)'
    )
    expect(normalizeFill('url(star.png)')).toBe('url(star.png)')
  })

  test('should return <url> with fallback values as-is', () => {
    expect(normalizeFill('url(#gradientElementID) blue')).toBe(
      'url(#gradientElementID) blue'
    )
    expect(normalizeFill('url(star.png) none')).toBe('url(star.png) none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFill('inherit')).toBe('inherit')
    expect(normalizeFill('initial')).toBe('initial')
    expect(normalizeFill('revert')).toBe('revert')
    expect(normalizeFill('revert-layer')).toBe('revert-layer')
    expect(normalizeFill('unset')).toBe('unset')
  })
})
