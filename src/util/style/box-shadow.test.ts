import { describe, expect, test } from 'bun:test'
import { normalizeBoxShadow } from './box-shadow'

describe('normalizeBoxShadow', () => {
  test('should return "none" as-is', () => {
    expect(normalizeBoxShadow('none')).toBe('none')
  })

  test('should return valid single shadow values as-is', () => {
    expect(normalizeBoxShadow('red 60px -16px')).toBe('red 60px -16px')
    expect(normalizeBoxShadow('10px 5px 5px black')).toBe('10px 5px 5px black')
  })

  test('should handle array of shadows and join them with a comma', () => {
    expect(normalizeBoxShadow(['red 60px -16px', '10px 5px 5px black'])).toBe(
      'red 60px -16px, 10px 5px 5px black'
    )
    expect(
      normalizeBoxShadow([
        'inset 5em 1em gold',
        '2px 2px 2px 1px rgb(0 0 0 / 20%)',
      ])
    ).toBe('inset 5em 1em gold, 2px 2px 2px 1px rgb(0 0 0 / 20%)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBoxShadow('inherit')).toBe('inherit')
    expect(normalizeBoxShadow('initial')).toBe('initial')
    expect(normalizeBoxShadow('revert')).toBe('revert')
    expect(normalizeBoxShadow('unset')).toBe('unset')
  })

  test('should return "none" for null or undefined', () => {
    expect(normalizeBoxShadow(undefined as any)).toBe('none')
    expect(normalizeBoxShadow(null as any)).toBe('none')
  })
})
