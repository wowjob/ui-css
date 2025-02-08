import { describe, expect, test } from 'bun:test'
import { normalizeGridAutoColumns } from './grid-auto-columns'

describe('normalizeGridAutoColumns', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridAutoColumns(null as any)).toBe('auto')
    expect(normalizeGridAutoColumns(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridAutoColumns('auto')).toBe('auto')
    expect(normalizeGridAutoColumns('min-content')).toBe('min-content')
    expect(normalizeGridAutoColumns('max-content')).toBe('max-content')
  })

  test('should normalize <length> values', () => {
    expect(normalizeGridAutoColumns('100px')).toBe('6.25rem')
    expect(normalizeGridAutoColumns(100)).toBe('6.25rem')
    expect(normalizeGridAutoColumns('50vmax')).toBe('50vmax')
  })

  test('should normalize <percentage> values as-is', () => {
    expect(normalizeGridAutoColumns('10%')).toBe('10%')
    expect(normalizeGridAutoColumns('33.3%')).toBe('33.3%')
  })

  test('should return <flex> values as-is', () => {
    expect(normalizeGridAutoColumns('0.5fr')).toBe('0.5fr')
    expect(normalizeGridAutoColumns('3fr')).toBe('3fr')
  })

  test('should return minmax() and fit-content() values as-is', () => {
    expect(normalizeGridAutoColumns('minmax(100px, auto)')).toBe(
      'minmax(100px, auto)'
    )
    expect(normalizeGridAutoColumns('fit-content(400px)')).toBe(
      'fit-content(400px)'
    )
  })

  test('should normalize multiple track sizes', () => {
    expect(normalizeGridAutoColumns(['100px', '0.5fr', '10%'])).toBe(
      '6.25rem 0.5fr 10%'
    )
    expect(
      normalizeGridAutoColumns([
        'minmax(100px, auto)',
        'fit-content(400px)',
        '3fr',
      ])
    ).toBe('minmax(100px, auto) fit-content(400px) 3fr')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridAutoColumns('inherit')).toBe('inherit')
    expect(normalizeGridAutoColumns('initial')).toBe('initial')
    expect(normalizeGridAutoColumns('revert')).toBe('revert')
    expect(normalizeGridAutoColumns('revert-layer')).toBe('revert-layer')
    expect(normalizeGridAutoColumns('unset')).toBe('unset')
  })
})
