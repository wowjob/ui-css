import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicSize } from './contain-intrinsic-size'

describe('normalizeContainIntrinsicSize', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicSize(null as any)).toBe('none')
    expect(normalizeContainIntrinsicSize(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicSize('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicSize('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicSize(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicSize('10rem')).toBe('10rem')
  })

  test('should return width | height values as-is', () => {
    expect(normalizeContainIntrinsicSize('1000px 1.5em')).toBe('1000px 1.5em')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicSize('auto 300px')).toBe('auto 300px')
    expect(normalizeContainIntrinsicSize('auto none')).toBe('auto none')
  })

  test('should return "auto width | auto height" combinations as-is', () => {
    expect(normalizeContainIntrinsicSize('auto 300px auto 4rem')).toBe(
      'auto 300px auto 4rem'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicSize('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicSize('initial')).toBe('initial')
    expect(normalizeContainIntrinsicSize('revert')).toBe('revert')
    expect(normalizeContainIntrinsicSize('revert-layer')).toBe('revert-layer')
    expect(normalizeContainIntrinsicSize('unset')).toBe('unset')
  })
})
