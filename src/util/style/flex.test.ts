import { describe, expect, test } from 'bun:test'
import { normalizeFlex } from './flex'

describe('normalizeFlex', () => {
  test('should return valid flex values', () => {
    expect(normalizeFlex('none')).toBe('none')
    expect(normalizeFlex('auto')).toBe('auto')
  })

  test('should normalize array values', () => {
    expect(normalizeFlex([1, 0, 'auto'])).toBe('1 0 auto')
    expect(normalizeFlex([2, 1, '50%'])).toBe('2 1 50%')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlex(undefined as any)).toBe('0 1 auto')
    expect(normalizeFlex(null as any)).toBe('0 1 auto')
  })

  test('should handle global keywords', () => {
    expect(normalizeFlex('inherit')).toBe('inherit')
    expect(normalizeFlex('initial')).toBe('initial')
    expect(normalizeFlex('unset')).toBe('unset')
  })
})
