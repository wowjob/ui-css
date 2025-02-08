import { describe, expect, test } from 'bun:test'
import { normalizeListStyle } from './list-style'

describe('normalizeListStyle', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeListStyle(null as any)).toBe('none')
    expect(normalizeListStyle(undefined as any)).toBe('none')
    expect(normalizeListStyle('none')).toBe('none')
  })

  test('should return type values as-is', () => {
    expect(normalizeListStyle('square')).toBe('square')
    expect(normalizeListStyle('lower-roman')).toBe('lower-roman')
  })

  test('should return image values as-is', () => {
    expect(normalizeListStyle('url("../img/shape.png")')).toBe(
      'url("../img/shape.png")'
    )
  })

  test('should return position values as-is', () => {
    expect(normalizeListStyle('inside')).toBe('inside')
    expect(normalizeListStyle('outside')).toBe('outside')
  })

  test('should return two values as-is', () => {
    expect(normalizeListStyle('georgian outside')).toBe('georgian outside')
    expect(normalizeListStyle('url("img/pip.svg") inside')).toBe(
      'url("img/pip.svg") inside'
    )
  })

  test('should return three values as-is', () => {
    expect(normalizeListStyle('lower-roman url("img/shape.png") outside')).toBe(
      'lower-roman url("img/shape.png") outside'
    )
  })

  test('should handle object format', () => {
    expect(normalizeListStyle({ type: 'square', position: 'inside' })).toBe(
      'square inside'
    )
    expect(
      normalizeListStyle({
        type: 'lower-roman',
        image: 'url("img/shape.png")',
        position: 'outside',
      })
    ).toBe('lower-roman url("img/shape.png") outside')
    expect(normalizeListStyle({ image: 'url("img/shape.png")' })).toBe(
      'none url("img/shape.png")'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeListStyle('inherit')).toBe('inherit')
    expect(normalizeListStyle('initial')).toBe('initial')
    expect(normalizeListStyle('revert')).toBe('revert')
    expect(normalizeListStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeListStyle('unset')).toBe('unset')
  })
})
