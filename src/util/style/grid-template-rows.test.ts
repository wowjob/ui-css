import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplateRows } from './grid-template-rows'

describe('normalizeGridTemplateRows', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplateRows(null as any)).toBe('none')
    expect(normalizeGridTemplateRows(undefined as any)).toBe('none')
    expect(normalizeGridTemplateRows('none')).toBe('none')
  })

  test('should return valid track-list values as-is', () => {
    expect(normalizeGridTemplateRows('100px 1fr')).toBe('100px 1fr')
    expect(normalizeGridTemplateRows('[line-name] 100px')).toBe(
      '[line-name] 100px'
    )
    expect(normalizeGridTemplateRows('minmax(100px, 1fr)')).toBe(
      'minmax(100px, 1fr)'
    )
    expect(normalizeGridTemplateRows('fit-content(40%)')).toBe(
      'fit-content(40%)'
    )
    expect(normalizeGridTemplateRows('repeat(3, 200px)')).toBe(
      'repeat(3, 200px)'
    )
    expect(normalizeGridTemplateRows('subgrid')).toBe('subgrid')
    expect(normalizeGridTemplateRows('masonry')).toBe('masonry')
  })

  test('should return valid auto-track-list values as-is', () => {
    expect(
      normalizeGridTemplateRows('200px repeat(auto-fill, 100px) 300px')
    ).toBe('200px repeat(auto-fill, 100px) 300px')
    expect(
      normalizeGridTemplateRows(
        '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
      )
    ).toBe(
      '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeGridTemplateRows('inherit')).toBe('inherit')
    expect(normalizeGridTemplateRows('initial')).toBe('initial')
    expect(normalizeGridTemplateRows('revert')).toBe('revert')
    expect(normalizeGridTemplateRows('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplateRows('unset')).toBe('unset')
  })
})
