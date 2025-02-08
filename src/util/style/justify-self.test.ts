import { describe, expect, test } from 'bun:test'
import { normalizeJustifySelf } from './justify-self'

describe('normalizeJustifySelf', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeJustifySelf(null as any)).toBe('auto')
    expect(normalizeJustifySelf(undefined as any)).toBe('auto')
    expect(normalizeJustifySelf('auto')).toBe('auto')
  })

  test('should return basic keyword values as-is', () => {
    expect(normalizeJustifySelf('normal')).toBe('normal')
    expect(normalizeJustifySelf('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeJustifySelf('center')).toBe('center')
    expect(normalizeJustifySelf('start')).toBe('start')
    expect(normalizeJustifySelf('end')).toBe('end')
    expect(normalizeJustifySelf('flex-start')).toBe('flex-start')
    expect(normalizeJustifySelf('flex-end')).toBe('flex-end')
    expect(normalizeJustifySelf('self-start')).toBe('self-start')
    expect(normalizeJustifySelf('self-end')).toBe('self-end')
    expect(normalizeJustifySelf('left')).toBe('left')
    expect(normalizeJustifySelf('right')).toBe('right')
    expect(normalizeJustifySelf('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeJustifySelf('baseline')).toBe('baseline')
    expect(normalizeJustifySelf('first baseline')).toBe('first baseline')
    expect(normalizeJustifySelf('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeJustifySelf('safe center')).toBe('safe center')
    expect(normalizeJustifySelf('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeJustifySelf('inherit')).toBe('inherit')
    expect(normalizeJustifySelf('initial')).toBe('initial')
    expect(normalizeJustifySelf('revert')).toBe('revert')
    expect(normalizeJustifySelf('revert-layer')).toBe('revert-layer')
    expect(normalizeJustifySelf('unset')).toBe('unset')
  })
})
