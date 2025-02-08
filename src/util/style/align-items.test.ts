import { describe, expect, test } from 'bun:test'
import { normalizeAlignItems } from './align-items'

describe('normalizeAlignItems', () => {
  test('should return basic keyword values as-is', () => {
    expect(normalizeAlignItems('normal')).toBe('normal')
    expect(normalizeAlignItems('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeAlignItems('center')).toBe('center')
    expect(normalizeAlignItems('start')).toBe('start')
    expect(normalizeAlignItems('end')).toBe('end')
    expect(normalizeAlignItems('flex-start')).toBe('flex-start')
    expect(normalizeAlignItems('flex-end')).toBe('flex-end')
    expect(normalizeAlignItems('self-start')).toBe('self-start')
    expect(normalizeAlignItems('self-end')).toBe('self-end')
    expect(normalizeAlignItems('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeAlignItems('baseline')).toBe('baseline')
    expect(normalizeAlignItems('first baseline')).toBe('first baseline')
    expect(normalizeAlignItems('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeAlignItems('safe center')).toBe('safe center')
    expect(normalizeAlignItems('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeAlignItems('inherit')).toBe('inherit')
    expect(normalizeAlignItems('initial')).toBe('initial')
    expect(normalizeAlignItems('revert')).toBe('revert')
    expect(normalizeAlignItems('revert-layer')).toBe('revert-layer')
    expect(normalizeAlignItems('unset')).toBe('unset')
  })

  test('should return "normal" for null or undefined', () => {
    expect(normalizeAlignItems(undefined as any)).toBe('normal')
    expect(normalizeAlignItems(null as any)).toBe('normal')
  })
})
