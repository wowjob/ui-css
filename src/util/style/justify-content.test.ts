import { describe, expect, test } from 'bun:test'
import { normalizeJustifyContent } from './justify-content'

describe('normalizeJustifyContent', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeJustifyContent(null as any)).toBe('normal')
    expect(normalizeJustifyContent(undefined as any)).toBe('normal')
    expect(normalizeJustifyContent('normal')).toBe('normal')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeJustifyContent('center')).toBe('center')
    expect(normalizeJustifyContent('start')).toBe('start')
    expect(normalizeJustifyContent('end')).toBe('end')
    expect(normalizeJustifyContent('flex-start')).toBe('flex-start')
    expect(normalizeJustifyContent('flex-end')).toBe('flex-end')
    expect(normalizeJustifyContent('left')).toBe('left')
    expect(normalizeJustifyContent('right')).toBe('right')
  })

  test('should return distributed alignment values as-is', () => {
    expect(normalizeJustifyContent('space-between')).toBe('space-between')
    expect(normalizeJustifyContent('space-around')).toBe('space-around')
    expect(normalizeJustifyContent('space-evenly')).toBe('space-evenly')
    expect(normalizeJustifyContent('stretch')).toBe('stretch')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeJustifyContent('safe center')).toBe('safe center')
    expect(normalizeJustifyContent('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeJustifyContent('inherit')).toBe('inherit')
    expect(normalizeJustifyContent('initial')).toBe('initial')
    expect(normalizeJustifyContent('revert')).toBe('revert')
    expect(normalizeJustifyContent('revert-layer')).toBe('revert-layer')
    expect(normalizeJustifyContent('unset')).toBe('unset')
  })
})
