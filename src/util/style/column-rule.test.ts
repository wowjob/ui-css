import { describe, expect, test } from 'bun:test'
import { normalizeColumnRule } from './column-rule'

describe('normalizeColumnRule', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeColumnRule(null as any)).toBe('')
    expect(normalizeColumnRule(undefined as any)).toBe('')
  })

  test('should return shorthand values as-is', () => {
    expect(normalizeColumnRule('dotted')).toBe('dotted')
    expect(normalizeColumnRule('solid 8px')).toBe('solid 8px')
    expect(normalizeColumnRule('solid blue')).toBe('solid blue')
    expect(normalizeColumnRule('thick inset blue')).toBe('thick inset blue')
  })

  test('should normalize object input', () => {
    expect(
      normalizeColumnRule({ style: 'solid', color: 'blue', width: '16px' })
    ).toBe('1rem solid blue')
    expect(normalizeColumnRule({ style: 'dotted', width: 8 })).toBe(
      '0.5rem dotted'
    )
    expect(normalizeColumnRule({ color: 'red' })).toBe('red')
    expect(normalizeColumnRule({})).toBe('')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnRule('inherit')).toBe('inherit')
    expect(normalizeColumnRule('initial')).toBe('initial')
    expect(normalizeColumnRule('revert')).toBe('revert')
    expect(normalizeColumnRule('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnRule('unset')).toBe('unset')
  })
})
