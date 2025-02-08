import { describe, expect, test } from 'bun:test'
import { normalizeVerticalAlign } from './vertical-align'

describe('normalizeVerticalAlign', () => {
  test('should return "baseline" for null or undefined', () => {
    expect(normalizeVerticalAlign(null as any)).toBe('baseline')
    expect(normalizeVerticalAlign(undefined as any)).toBe('baseline')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeVerticalAlign('baseline')).toBe('baseline')
    expect(normalizeVerticalAlign('sub')).toBe('sub')
    expect(normalizeVerticalAlign('super')).toBe('super')
    expect(normalizeVerticalAlign('text-top')).toBe('text-top')
    expect(normalizeVerticalAlign('text-bottom')).toBe('text-bottom')
    expect(normalizeVerticalAlign('middle')).toBe('middle')
    expect(normalizeVerticalAlign('top')).toBe('top')
    expect(normalizeVerticalAlign('bottom')).toBe('bottom')
  })

  test('should convert px values to rem', () => {
    expect(normalizeVerticalAlign('10px')).toBe('0.625rem') // Assuming 16px base font size
    expect(normalizeVerticalAlign(32)).toBe('2rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeVerticalAlign('20%')).toBe('20%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeVerticalAlign('inherit')).toBe('inherit')
    expect(normalizeVerticalAlign('initial')).toBe('initial')
    expect(normalizeVerticalAlign('revert')).toBe('revert')
    expect(normalizeVerticalAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeVerticalAlign('unset')).toBe('unset')
  })
})
