import { describe, expect, test } from 'bun:test'
import { normalizeContain } from './contain'

describe('normalizeContain', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContain(null as any)).toBe('none')
    expect(normalizeContain(undefined as any)).toBe('none')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeContain('none')).toBe('none')
    expect(normalizeContain('strict')).toBe('strict')
    expect(normalizeContain('content')).toBe('content')
    expect(normalizeContain('size')).toBe('size')
    expect(normalizeContain('inline-size')).toBe('inline-size')
    expect(normalizeContain('layout')).toBe('layout')
    expect(normalizeContain('style')).toBe('style')
    expect(normalizeContain('paint')).toBe('paint')
  })

  test('should return valid multiple keyword values as-is', () => {
    expect(normalizeContain('size paint')).toBe('size paint')
    expect(normalizeContain('size layout paint')).toBe('size layout paint')
    expect(normalizeContain('inline-size layout')).toBe('inline-size layout')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContain('inherit')).toBe('inherit')
    expect(normalizeContain('initial')).toBe('initial')
    expect(normalizeContain('revert')).toBe('revert')
    expect(normalizeContain('revert-layer')).toBe('revert-layer')
    expect(normalizeContain('unset')).toBe('unset')
  })
})
