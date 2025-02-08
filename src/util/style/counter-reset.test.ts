import { describe, expect, test } from 'bun:test'
import { normalizeCounterReset } from './counter-reset'

describe('normalizeCounterReset', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeCounterReset(null as any)).toBe('none')
    expect(normalizeCounterReset(undefined as any)).toBe('none')
  })

  test('should return valid counter reset values as-is', () => {
    expect(normalizeCounterReset('my-counter')).toBe('my-counter')
    expect(normalizeCounterReset('my-counter -3')).toBe('my-counter -3')
    expect(normalizeCounterReset('reversed(my-counter)')).toBe(
      'reversed(my-counter)'
    )
    expect(normalizeCounterReset('reversed(my-counter) -1')).toBe(
      'reversed(my-counter) -1'
    )
    expect(
      normalizeCounterReset('reversed(pages) 10 items 1 reversed(sections) 4')
    ).toBe('reversed(pages) 10 items 1 reversed(sections) 4')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeCounterReset('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCounterReset('inherit')).toBe('inherit')
    expect(normalizeCounterReset('initial')).toBe('initial')
    expect(normalizeCounterReset('revert')).toBe('revert')
    expect(normalizeCounterReset('revert-layer')).toBe('revert-layer')
    expect(normalizeCounterReset('unset')).toBe('unset')
  })
})
