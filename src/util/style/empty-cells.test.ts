import { describe, expect, test } from 'bun:test'
import { normalizeEmptyCells } from './empty-cells'

describe('normalizeEmptyCells', () => {
  test('should return "show" for null or undefined', () => {
    expect(normalizeEmptyCells(null as any)).toBe('show')
    expect(normalizeEmptyCells(undefined as any)).toBe('show')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeEmptyCells('show')).toBe('show')
    expect(normalizeEmptyCells('hide')).toBe('hide')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeEmptyCells('inherit')).toBe('inherit')
    expect(normalizeEmptyCells('initial')).toBe('initial')
    expect(normalizeEmptyCells('revert')).toBe('revert')
    expect(normalizeEmptyCells('revert-layer')).toBe('revert-layer')
    expect(normalizeEmptyCells('unset')).toBe('unset')
  })
})
