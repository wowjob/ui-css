import { describe, expect, test } from 'bun:test'
import { normalizeCounterIncrement } from './counter-increment'

describe('normalizeCounterIncrement', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeCounterIncrement(null as any)).toBe('none')
    expect(normalizeCounterIncrement(undefined as any)).toBe('none')
  })

  test('should return valid counter values as-is', () => {
    expect(normalizeCounterIncrement('my-counter')).toBe('my-counter')
    expect(normalizeCounterIncrement('my-counter -1')).toBe('my-counter -1')
    expect(normalizeCounterIncrement('counter1 counter2 -4')).toBe(
      'counter1 counter2 -4'
    )
    expect(normalizeCounterIncrement('chapter 0 section 2 page')).toBe(
      'chapter 0 section 2 page'
    )
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeCounterIncrement('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCounterIncrement('inherit')).toBe('inherit')
    expect(normalizeCounterIncrement('initial')).toBe('initial')
    expect(normalizeCounterIncrement('revert')).toBe('revert')
    expect(normalizeCounterIncrement('revert-layer')).toBe('revert-layer')
    expect(normalizeCounterIncrement('unset')).toBe('unset')
  })
})
