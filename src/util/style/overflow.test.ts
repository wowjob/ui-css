import { describe, expect, test } from 'bun:test'
import { normalizeOverflow } from './overflow'

describe('normalizeOverflow', () => {
  test('should return "visible" for null or undefined', () => {
    expect(normalizeOverflow(null as any)).toBe('visible')
    expect(normalizeOverflow(undefined as any)).toBe('visible')
  })

  test('should return string values as-is', () => {
    expect(normalizeOverflow('hidden')).toBe('hidden')
    expect(normalizeOverflow('hidden visible')).toBe('hidden visible')
  })

  test('should handle object format for x and y', () => {
    expect(normalizeOverflow({ x: 'hidden', y: 'hidden' })).toBe('hidden')
    expect(normalizeOverflow({ x: 'hidden', y: 'visible' })).toBe(
      'hidden visible'
    )
    expect(normalizeOverflow({ x: 'scroll' })).toBe('scroll visible')
    expect(normalizeOverflow({ y: 'auto' })).toBe('visible auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverflow('inherit')).toBe('inherit')
    expect(normalizeOverflow('initial')).toBe('initial')
    expect(normalizeOverflow('revert')).toBe('revert')
    expect(normalizeOverflow('revert-layer')).toBe('revert-layer')
    expect(normalizeOverflow('unset')).toBe('unset')
  })
})
