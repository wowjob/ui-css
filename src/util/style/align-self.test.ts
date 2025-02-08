import { describe, expect, test } from 'bun:test'
import { normalizeAlignSelf } from './align-self'

describe('normalizeAlignSelf', () => {
  test('should return keyword values as-is', () => {
    expect(normalizeAlignSelf('auto')).toBe('auto')
    expect(normalizeAlignSelf('normal')).toBe('normal')
    expect(normalizeAlignSelf('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeAlignSelf('center')).toBe('center')
    expect(normalizeAlignSelf('start')).toBe('start')
    expect(normalizeAlignSelf('end')).toBe('end')
    expect(normalizeAlignSelf('flex-start')).toBe('flex-start')
    expect(normalizeAlignSelf('flex-end')).toBe('flex-end')
    expect(normalizeAlignSelf('self-start')).toBe('self-start')
    expect(normalizeAlignSelf('self-end')).toBe('self-end')
    expect(normalizeAlignSelf('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeAlignSelf('baseline')).toBe('baseline')
    expect(normalizeAlignSelf('first baseline')).toBe('first baseline')
    expect(normalizeAlignSelf('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeAlignSelf('safe center')).toBe('safe center')
    expect(normalizeAlignSelf('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeAlignSelf('inherit')).toBe('inherit')
    expect(normalizeAlignSelf('initial')).toBe('initial')
    expect(normalizeAlignSelf('revert')).toBe('revert')
    expect(normalizeAlignSelf('revert-layer')).toBe('revert-layer')
    expect(normalizeAlignSelf('unset')).toBe('unset')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAlignSelf(undefined as any)).toBe('auto')
    expect(normalizeAlignSelf(null as any)).toBe('auto')
  })
})
