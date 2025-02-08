import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicWidth } from './contain-intrinsic-width'

describe('normalizeContainIntrinsicWidth', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicWidth(null as any)).toBe('none')
    expect(normalizeContainIntrinsicWidth(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicWidth('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicWidth('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicWidth(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicWidth('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicWidth('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicWidth('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicWidth('initial')).toBe('initial')
    expect(normalizeContainIntrinsicWidth('revert')).toBe('revert')
    expect(normalizeContainIntrinsicWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeContainIntrinsicWidth('unset')).toBe('unset')
  })
})
