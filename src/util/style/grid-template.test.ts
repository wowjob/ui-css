import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplate } from './grid-template'

describe('normalizeGridTemplate', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplate(null as any)).toBe('none')
    expect(normalizeGridTemplate(undefined as any)).toBe('none')
    expect(normalizeGridTemplate('none')).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeGridTemplate('100px 1fr / 50px 1fr')).toBe(
      '100px 1fr / 50px 1fr'
    )
    expect(
      normalizeGridTemplate('[line-name] 100px / [col1] 30% [col2] 70%')
    ).toBe('[line-name] 100px / [col1] 30% [col2] 70%')
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridTemplate(['100px 1fr', '50px 1fr'])).toBe(
      '100px 1fr / 50px 1fr'
    )
    expect(
      normalizeGridTemplate([
        '[line-name] 100px',
        '[col-name1] 30% [col-name2] 70%',
      ])
    ).toBe('[line-name] 100px / [col-name1] 30% [col-name2] 70%')
  })

  test('should handle object with rows and columns', () => {
    expect(
      normalizeGridTemplate({ rows: '100px 1fr', columns: '50px 1fr' })
    ).toBe('100px 1fr / 50px 1fr')
    expect(
      normalizeGridTemplate({
        rows: '[header-top] "a a a" [header-bottom]',
        columns: '[main-top] "b b b" 1fr [main-bottom]',
      })
    ).toBe(
      '[header-top] "a a a" [header-bottom] / [main-top] "b b b" 1fr [main-bottom]'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridTemplate('inherit')).toBe('inherit')
    expect(normalizeGridTemplate('initial')).toBe('initial')
    expect(normalizeGridTemplate('revert')).toBe('revert')
    expect(normalizeGridTemplate('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplate('unset')).toBe('unset')
  })
})
