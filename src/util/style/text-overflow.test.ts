import { describe, expect, test } from 'bun:test'
import { normalizeTextOverflow } from './text-overflow'

describe('normalizeTextOverflow', () => {
  test('should return "clip" for null or undefined', () => {
    expect(normalizeTextOverflow(null as any)).toBe('clip')
    expect(normalizeTextOverflow(undefined as any)).toBe('clip')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextOverflow('clip')).toBe('clip')
    expect(normalizeTextOverflow('ellipsis')).toBe('ellipsis')
  })

  test('should return compound values as-is', () => {
    expect(normalizeTextOverflow('ellipsis ellipsis')).toBe('ellipsis ellipsis')
    expect(normalizeTextOverflow('ellipsis " [..]"')).toBe('ellipsis " [..]"')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextOverflow('inherit')).toBe('inherit')
    expect(normalizeTextOverflow('initial')).toBe('initial')
    expect(normalizeTextOverflow('revert')).toBe('revert')
    expect(normalizeTextOverflow('revert-layer')).toBe('revert-layer')
    expect(normalizeTextOverflow('unset')).toBe('unset')
  })
})
