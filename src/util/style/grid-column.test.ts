import { describe, expect, test } from 'bun:test'
import { normalizeGridColumn } from './grid-column'

describe('normalizeGridColumn', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridColumn(null as any)).toBe('auto')
    expect(normalizeGridColumn(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridColumn('auto')).toBe('auto')
    expect(normalizeGridColumn('auto / auto')).toBe('auto / auto')
  })

  test('should return <custom-ident> values as-is', () => {
    expect(normalizeGridColumn('some-grid-area')).toBe('some-grid-area')
    expect(normalizeGridColumn('some-grid-area / some-other-grid-area')).toBe(
      'some-grid-area / some-other-grid-area'
    )
  })

  test('should handle <integer> + <custom-ident> combinations', () => {
    expect(normalizeGridColumn('some-grid-area 4')).toBe('some-grid-area 4')
    expect(normalizeGridColumn('4 some-grid-area / 6')).toBe(
      '4 some-grid-area / 6'
    )
  })

  test('should handle span combinations', () => {
    expect(normalizeGridColumn('span 3')).toBe('span 3')
    expect(normalizeGridColumn('span some-grid-area')).toBe(
      'span some-grid-area'
    )
    expect(normalizeGridColumn('5 some-grid-area span')).toBe(
      '5 some-grid-area span'
    )
    expect(normalizeGridColumn('span 3 / 6')).toBe('span 3 / 6')
    expect(
      normalizeGridColumn('span some-grid-area / span some-other-grid-area')
    ).toBe('span some-grid-area / span some-other-grid-area')
    expect(normalizeGridColumn('5 some-grid-area span / 2 span')).toBe(
      '5 some-grid-area span / 2 span'
    )
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridColumn(['span 3', '6'])).toBe('span 3 / 6')
    expect(
      normalizeGridColumn(['span some-grid-area', 'span some-other-grid-area'])
    ).toBe('span some-grid-area / span some-other-grid-area')
  })

  test('should handle objects with start and end', () => {
    expect(normalizeGridColumn({ start: 2, end: 'span 5' })).toBe('2 / span 5')
    expect(normalizeGridColumn({ start: 'auto' })).toBe('auto / auto')
    expect(normalizeGridColumn({ end: 'span 3' })).toBe('auto / span 3')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridColumn('inherit')).toBe('inherit')
    expect(normalizeGridColumn('initial')).toBe('initial')
    expect(normalizeGridColumn('revert')).toBe('revert')
    expect(normalizeGridColumn('revert-layer')).toBe('revert-layer')
    expect(normalizeGridColumn('unset')).toBe('unset')
  })
})
