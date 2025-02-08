import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplateColumns } from './grid-template-columns'

describe('normalizeGridTemplateColumns', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplateColumns(null as any)).toBe('none')
    expect(normalizeGridTemplateColumns(undefined as any)).toBe('none')
    expect(normalizeGridTemplateColumns('none')).toBe('none')
  })

  test('should return valid track-list values as-is', () => {
    expect(normalizeGridTemplateColumns('100px 1fr')).toBe('100px 1fr')
    expect(normalizeGridTemplateColumns('[line-name] 100px')).toBe(
      '[line-name] 100px'
    )
    expect(normalizeGridTemplateColumns('minmax(100px, 1fr)')).toBe(
      'minmax(100px, 1fr)'
    )
    expect(normalizeGridTemplateColumns('fit-content(40%)')).toBe(
      'fit-content(40%)'
    )
    expect(normalizeGridTemplateColumns('repeat(3, 200px)')).toBe(
      'repeat(3, 200px)'
    )
    expect(normalizeGridTemplateColumns('subgrid')).toBe('subgrid')
    expect(normalizeGridTemplateColumns('masonry')).toBe('masonry')
  })

  test('should return valid auto-track-list values as-is', () => {
    expect(
      normalizeGridTemplateColumns('200px repeat(auto-fill, 100px) 300px')
    ).toBe('200px repeat(auto-fill, 100px) 300px')
    expect(
      normalizeGridTemplateColumns(
        '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
      )
    ).toBe(
      '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeGridTemplateColumns('inherit')).toBe('inherit')
    expect(normalizeGridTemplateColumns('initial')).toBe('initial')
    expect(normalizeGridTemplateColumns('revert')).toBe('revert')
    expect(normalizeGridTemplateColumns('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplateColumns('unset')).toBe('unset')
  })
})
