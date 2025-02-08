import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicHeight } from './contain-intrinsic-height'

describe('normalizeContainIntrinsicHeight', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicHeight(null as any)).toBe('none')
    expect(normalizeContainIntrinsicHeight(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicHeight('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicHeight('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicHeight(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicHeight('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicHeight('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicHeight('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicHeight('initial')).toBe('initial')
    expect(normalizeContainIntrinsicHeight('revert')).toBe('revert')
    expect(normalizeContainIntrinsicHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeContainIntrinsicHeight('unset')).toBe('unset')
  })
})
