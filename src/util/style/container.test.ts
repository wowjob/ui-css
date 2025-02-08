import { describe, expect, test } from 'bun:test'
import { normalizeContainer } from './container'

describe('normalizeContainer', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeContainer(null as any)).toBe('')
    expect(normalizeContainer(undefined as any)).toBe('')
  })

  test('should return <container-name> values as-is', () => {
    expect(normalizeContainer('my-layout')).toBe('my-layout')
  })

  test('should return <container-name> / <container-type> values as-is', () => {
    expect(normalizeContainer('my-layout / size')).toBe('my-layout / size')
    expect(normalizeContainer('my-layout / inline-size')).toBe(
      'my-layout / inline-size'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainer('inherit')).toBe('inherit')
    expect(normalizeContainer('initial')).toBe('initial')
    expect(normalizeContainer('revert')).toBe('revert')
    expect(normalizeContainer('revert-layer')).toBe('revert-layer')
    expect(normalizeContainer('unset')).toBe('unset')
  })
})
