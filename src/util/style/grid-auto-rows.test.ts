import { describe, expect, test } from 'bun:test'
import { normalizeGridAutoRows } from './grid-auto-rows'

describe('normalizeGridAutoRows', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridAutoRows(null as any)).toBe('auto')
    expect(normalizeGridAutoRows(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridAutoRows('auto')).toBe('auto')
    expect(normalizeGridAutoRows('min-content')).toBe('min-content')
    expect(normalizeGridAutoRows('max-content')).toBe('max-content')
  })

  test('should normalize <length> values', () => {
    expect(normalizeGridAutoRows('100px')).toBe('6.25rem')
    expect(normalizeGridAutoRows(100)).toBe('6.25rem')
    expect(normalizeGridAutoRows('50vmax')).toBe('50vmax')
  })

  test('should normalize <percentage> values as-is', () => {
    expect(normalizeGridAutoRows('10%')).toBe('10%')
    expect(normalizeGridAutoRows('33.3%')).toBe('33.3%')
  })

  test('should return <flex> values as-is', () => {
    expect(normalizeGridAutoRows('0.5fr')).toBe('0.5fr')
    expect(normalizeGridAutoRows('3fr')).toBe('3fr')
  })

  test('should return minmax() and fit-content() values as-is', () => {
    expect(normalizeGridAutoRows('minmax(100px, auto)')).toBe(
      'minmax(100px, auto)'
    )
    expect(normalizeGridAutoRows('fit-content(400px)')).toBe(
      'fit-content(400px)'
    )
  })

  test('should normalize multiple track sizes', () => {
    expect(normalizeGridAutoRows(['100px', '0.5fr', '10%'])).toBe(
      '6.25rem 0.5fr 10%'
    )
    expect(
      normalizeGridAutoRows([
        'minmax(100px, auto)',
        'fit-content(400px)',
        '3fr',
      ])
    ).toBe('minmax(100px, auto) fit-content(400px) 3fr')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridAutoRows('inherit')).toBe('inherit')
    expect(normalizeGridAutoRows('initial')).toBe('initial')
    expect(normalizeGridAutoRows('revert')).toBe('revert')
    expect(normalizeGridAutoRows('revert-layer')).toBe('revert-layer')
    expect(normalizeGridAutoRows('unset')).toBe('unset')
  })
})
