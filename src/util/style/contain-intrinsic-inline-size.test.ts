import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicInlineSize } from './contain-intrinsic-inline-size'

describe('normalizeContainIntrinsicInlineSize', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicInlineSize(null as any)).toBe('none')
    expect(normalizeContainIntrinsicInlineSize(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicInlineSize('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicInlineSize('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicInlineSize(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicInlineSize('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicInlineSize('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicInlineSize('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicInlineSize('initial')).toBe('initial')
    expect(normalizeContainIntrinsicInlineSize('revert')).toBe('revert')
    expect(normalizeContainIntrinsicInlineSize('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeContainIntrinsicInlineSize('unset')).toBe('unset')
  })
})
