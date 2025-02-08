import { describe, expect, test } from 'bun:test'
import { normalizeShapeOutside } from './shape-outside'

describe('normalizeShapeOutside', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeShapeOutside(null as any)).toBe('none')
    expect(normalizeShapeOutside(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeShapeOutside('none')).toBe('none')
    expect(normalizeShapeOutside('margin-box')).toBe('margin-box')
    expect(normalizeShapeOutside('content-box')).toBe('content-box')
    expect(normalizeShapeOutside('border-box')).toBe('border-box')
    expect(normalizeShapeOutside('padding-box')).toBe('padding-box')
  })

  test('should return valid function values as-is', () => {
    expect(normalizeShapeOutside('circle()')).toBe('circle()')
    expect(normalizeShapeOutside('ellipse()')).toBe('ellipse()')
    expect(normalizeShapeOutside('inset(10px 10px 10px 10px)')).toBe(
      'inset(10px 10px 10px 10px)'
    )
    expect(
      normalizeShapeOutside('polygon(10px 10px, 20px 20px, 30px 30px)')
    ).toBe('polygon(10px 10px, 20px 20px, 30px 30px)')
  })

  test('should return shape box with basic shape as-is', () => {
    expect(normalizeShapeOutside('circle() border-box')).toBe(
      'circle() border-box'
    )
    expect(normalizeShapeOutside('margin-box ellipse()')).toBe(
      'margin-box ellipse()'
    )
  })

  test('should return <url> and <gradient> values as-is', () => {
    expect(normalizeShapeOutside('url(image.png)')).toBe('url(image.png)')
    expect(
      normalizeShapeOutside('linear-gradient(45deg, #fff 150px, red 150px)')
    ).toBe('linear-gradient(45deg, #fff 150px, red 150px)')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeOutside('inherit')).toBe('inherit')
    expect(normalizeShapeOutside('initial')).toBe('initial')
    expect(normalizeShapeOutside('revert')).toBe('revert')
    expect(normalizeShapeOutside('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeOutside('unset')).toBe('unset')
  })
})
