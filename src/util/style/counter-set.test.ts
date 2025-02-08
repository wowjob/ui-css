import { describe, expect, test } from 'bun:test'
import { normalizeCounterSet } from './counter-set'

describe('normalizeCounterSet', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeCounterSet(null as any)).toBe('none')
    expect(normalizeCounterSet(undefined as any)).toBe('none')
  })

  test('should return valid counter set values as-is', () => {
    expect(normalizeCounterSet('my-counter')).toBe('my-counter')
    expect(normalizeCounterSet('my-counter -1')).toBe('my-counter -1')
    expect(normalizeCounterSet('counter1 1 counter2 4')).toBe(
      'counter1 1 counter2 4'
    )
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeCounterSet('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCounterSet('inherit')).toBe('inherit')
    expect(normalizeCounterSet('initial')).toBe('initial')
    expect(normalizeCounterSet('revert')).toBe('revert')
    expect(normalizeCounterSet('revert-layer')).toBe('revert-layer')
    expect(normalizeCounterSet('unset')).toBe('unset')
  })
})
