import { describe, expect, test } from 'bun:test'
import { normalizeAlignContent } from './align-content'

describe('normalizeAlignContent', () => {
  test('should return normal alignment values as-is', () => {
    expect(normalizeAlignContent('normal')).toBe('normal')
  })

  test('should return basic positional alignment values as-is', () => {
    expect(normalizeAlignContent('start')).toBe('start')
    expect(normalizeAlignContent('center')).toBe('center')
    expect(normalizeAlignContent('end')).toBe('end')
    expect(normalizeAlignContent('flex-start')).toBe('flex-start')
    expect(normalizeAlignContent('flex-end')).toBe('flex-end')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeAlignContent('baseline')).toBe('baseline')
    expect(normalizeAlignContent('first baseline')).toBe('first baseline')
    expect(normalizeAlignContent('last baseline')).toBe('last baseline')
  })

  test('should return distributed alignment values as-is', () => {
    expect(normalizeAlignContent('space-between')).toBe('space-between')
    expect(normalizeAlignContent('space-around')).toBe('space-around')
    expect(normalizeAlignContent('space-evenly')).toBe('space-evenly')
    expect(normalizeAlignContent('stretch')).toBe('stretch')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeAlignContent('safe center')).toBe('safe center')
    expect(normalizeAlignContent('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeAlignContent('inherit')).toBe('inherit')
    expect(normalizeAlignContent('initial')).toBe('initial')
    expect(normalizeAlignContent('revert')).toBe('revert')
    expect(normalizeAlignContent('revert-layer')).toBe('revert-layer')
    expect(normalizeAlignContent('unset')).toBe('unset')
  })

  test('should return "normal" for null or undefined', () => {
    expect(normalizeAlignContent(undefined as any)).toBe('normal')
    expect(normalizeAlignContent(null as any)).toBe('normal')
  })
})
