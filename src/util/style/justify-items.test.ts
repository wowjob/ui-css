import { describe, expect, test } from 'bun:test'
import { normalizeJustifyItems } from './justify-items'

describe('normalizeJustifyItems', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeJustifyItems(null as any)).toBe('normal')
    expect(normalizeJustifyItems(undefined as any)).toBe('normal')
    expect(normalizeJustifyItems('normal')).toBe('normal')
  })

  test('should return basic keyword values as-is', () => {
    expect(normalizeJustifyItems('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeJustifyItems('center')).toBe('center')
    expect(normalizeJustifyItems('start')).toBe('start')
    expect(normalizeJustifyItems('end')).toBe('end')
    expect(normalizeJustifyItems('flex-start')).toBe('flex-start')
    expect(normalizeJustifyItems('flex-end')).toBe('flex-end')
    expect(normalizeJustifyItems('self-start')).toBe('self-start')
    expect(normalizeJustifyItems('self-end')).toBe('self-end')
    expect(normalizeJustifyItems('left')).toBe('left')
    expect(normalizeJustifyItems('right')).toBe('right')
    expect(normalizeJustifyItems('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeJustifyItems('baseline')).toBe('baseline')
    expect(normalizeJustifyItems('first baseline')).toBe('first baseline')
    expect(normalizeJustifyItems('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeJustifyItems('safe center')).toBe('safe center')
    expect(normalizeJustifyItems('unsafe center')).toBe('unsafe center')
  })

  test('should return legacy alignment values as-is', () => {
    expect(normalizeJustifyItems('legacy right')).toBe('legacy right')
    expect(normalizeJustifyItems('legacy left')).toBe('legacy left')
    expect(normalizeJustifyItems('legacy center')).toBe('legacy center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeJustifyItems('inherit')).toBe('inherit')
    expect(normalizeJustifyItems('initial')).toBe('initial')
    expect(normalizeJustifyItems('revert')).toBe('revert')
    expect(normalizeJustifyItems('revert-layer')).toBe('revert-layer')
    expect(normalizeJustifyItems('unset')).toBe('unset')
  })
})
