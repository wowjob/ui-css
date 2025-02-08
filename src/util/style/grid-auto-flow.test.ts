import { describe, expect, test } from 'bun:test'
import { normalizeGridAutoFlow } from './grid-auto-flow'

describe('normalizeGridAutoFlow', () => {
  test('should return "row" for null or undefined', () => {
    expect(normalizeGridAutoFlow(null as any)).toBe('row')
    expect(normalizeGridAutoFlow(undefined as any)).toBe('row')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridAutoFlow('row')).toBe('row')
    expect(normalizeGridAutoFlow('column')).toBe('column')
    expect(normalizeGridAutoFlow('dense')).toBe('dense')
    expect(normalizeGridAutoFlow('row dense')).toBe('row dense')
    expect(normalizeGridAutoFlow('column dense')).toBe('column dense')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridAutoFlow('inherit')).toBe('inherit')
    expect(normalizeGridAutoFlow('initial')).toBe('initial')
    expect(normalizeGridAutoFlow('revert')).toBe('revert')
    expect(normalizeGridAutoFlow('revert-layer')).toBe('revert-layer')
    expect(normalizeGridAutoFlow('unset')).toBe('unset')
  })
})
