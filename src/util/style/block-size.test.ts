import { describe, expect, test } from 'bun:test'
import { normalizeBlockSize } from './block-size'

describe('normalizeBlockSize', () => {
  test('should return valid keyword values as-is', () => {
    expect(normalizeBlockSize('auto')).toBe('auto')
    expect(normalizeBlockSize('max-content')).toBe('max-content')
    expect(normalizeBlockSize('min-content')).toBe('min-content')
    expect(normalizeBlockSize('fit-content')).toBe('fit-content')
    expect(normalizeBlockSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should return valid <percentage> values as-is', () => {
    expect(normalizeBlockSize('75%')).toBe('75%')
  })

  test('should return valid <length> values as-is if not in px', () => {
    expect(normalizeBlockSize('25em')).toBe('25em')
    expect(normalizeBlockSize('anchor-size(height)')).toBe(
      'anchor-size(height)'
    )
    expect(
      normalizeBlockSize('calc(anchor-size(--myAnchor block) * 0.75)')
    ).toBe('calc(anchor-size(--myAnchor block) * 0.75)')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBlockSize('300px')).toBe('18.75rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBlockSize(300)).toBe('18.75rem')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeBlockSize(undefined as any)).toBe('auto')
    expect(normalizeBlockSize(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeBlockSize('inherit')).toBe('inherit')
    expect(normalizeBlockSize('initial')).toBe('initial')
    expect(normalizeBlockSize('revert')).toBe('revert')
    expect(normalizeBlockSize('revert-layer')).toBe('revert-layer')
    expect(normalizeBlockSize('unset')).toBe('unset')
  })
})
