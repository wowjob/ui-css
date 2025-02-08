import { describe, expect, test } from 'bun:test'
import { normalizePlaceContent } from './place-content'

describe('normalizePlaceContent', () => {
  test('should return "stretch" for null, undefined, or "stretch"', () => {
    expect(normalizePlaceContent(null as any)).toBe('stretch')
    expect(normalizePlaceContent(undefined as any)).toBe('stretch')
    expect(normalizePlaceContent('stretch')).toBe('stretch')
  })

  test('should return single alignment values as-is', () => {
    expect(normalizePlaceContent('center')).toBe('center')
    expect(normalizePlaceContent('start')).toBe('start')
    expect(normalizePlaceContent('flex-end')).toBe('flex-end')
    expect(normalizePlaceContent('baseline')).toBe('baseline')
    expect(normalizePlaceContent('space-between')).toBe('space-between')
  })

  test('should handle two-value alignment syntax', () => {
    expect(normalizePlaceContent('center start')).toBe('center start')
    expect(normalizePlaceContent('flex-end center')).toBe('flex-end center')
    expect(normalizePlaceContent('space-around space-evenly')).toBe(
      'space-around space-evenly'
    )
    expect(normalizePlaceContent('stretch space-evenly')).toBe(
      'stretch space-evenly'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePlaceContent('inherit')).toBe('inherit')
    expect(normalizePlaceContent('initial')).toBe('initial')
    expect(normalizePlaceContent('revert')).toBe('revert')
    expect(normalizePlaceContent('revert-layer')).toBe('revert-layer')
    expect(normalizePlaceContent('unset')).toBe('unset')
  })
})
