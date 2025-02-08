import { describe, expect, test } from 'bun:test'
import { normalizeCx } from './cx'

describe('normalizeCx', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeCx(null as any)).toBe('')
    expect(normalizeCx(undefined as any)).toBe('')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeCx('20px')).toBe('1.25rem')
    expect(normalizeCx(20)).toBe('1.25rem')
  })

  test('should return <percentage> values as-is', () => {
    expect(normalizeCx('20%')).toBe('20%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCx('inherit')).toBe('inherit')
    expect(normalizeCx('initial')).toBe('initial')
    expect(normalizeCx('revert')).toBe('revert')
    expect(normalizeCx('revert-layer')).toBe('revert-layer')
    expect(normalizeCx('unset')).toBe('unset')
  })
})
