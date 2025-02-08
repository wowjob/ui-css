import { describe, expect, test } from 'bun:test'
import { normalizeClear } from './clear'

describe('normalizeClear', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeClear(null as any)).toBe('none')
    expect(normalizeClear(undefined as any)).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeClear('none')).toBe('none')
    expect(normalizeClear('left')).toBe('left')
    expect(normalizeClear('right')).toBe('right')
    expect(normalizeClear('both')).toBe('both')
    expect(normalizeClear('inline-start')).toBe('inline-start')
    expect(normalizeClear('inline-end')).toBe('inline-end')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeClear('inherit')).toBe('inherit')
    expect(normalizeClear('initial')).toBe('initial')
    expect(normalizeClear('revert')).toBe('revert')
    expect(normalizeClear('revert-layer')).toBe('revert-layer')
    expect(normalizeClear('unset')).toBe('unset')
  })
})
