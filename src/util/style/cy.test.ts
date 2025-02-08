import { describe, expect, test } from 'bun:test'
import { normalizeCy } from './cy'

describe('normalizeCy', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeCy(null as any)).toBe('')
    expect(normalizeCy(undefined as any)).toBe('')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeCy('3px')).toBe('0.1875rem')
    expect(normalizeCy(3)).toBe('0.1875rem')
  })

  test('should return <percentage> values as-is', () => {
    expect(normalizeCy('20%')).toBe('20%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCy('inherit')).toBe('inherit')
    expect(normalizeCy('initial')).toBe('initial')
    expect(normalizeCy('revert')).toBe('revert')
    expect(normalizeCy('revert-layer')).toBe('revert-layer')
    expect(normalizeCy('unset')).toBe('unset')
  })
})
