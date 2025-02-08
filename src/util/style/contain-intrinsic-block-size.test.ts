import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicBlockSize } from './contain-intrinsic-block-size'

describe('normalizeContainIntrinsicBlockSize', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicBlockSize(null as any)).toBe('none')
    expect(normalizeContainIntrinsicBlockSize(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicBlockSize('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicBlockSize('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicBlockSize(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicBlockSize('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicBlockSize('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicBlockSize('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicBlockSize('initial')).toBe('initial')
    expect(normalizeContainIntrinsicBlockSize('revert')).toBe('revert')
    expect(normalizeContainIntrinsicBlockSize('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeContainIntrinsicBlockSize('unset')).toBe('unset')
  })
})
