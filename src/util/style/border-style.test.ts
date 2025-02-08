import { describe, expect, test } from 'bun:test'
import { normalizeBorderStyle } from './border-style'

describe('normalizeBorderStyle', () => {
  test('should return single border style as-is', () => {
    expect(normalizeBorderStyle('solid')).toBe('solid')
    expect(normalizeBorderStyle('dashed')).toBe('dashed')
    expect(normalizeBorderStyle('none')).toBe('none')
  })

  test('should handle missing or invalid styles gracefully', () => {
    expect(normalizeBorderStyle(undefined as any)).toBe('none')
    expect(normalizeBorderStyle(null as any)).toBe('none')
  })

  test('should normalize array of styles', () => {
    expect(normalizeBorderStyle(['solid'])).toBe('solid')
    expect(normalizeBorderStyle(['solid', 'dashed'])).toBe('solid dashed')
    expect(normalizeBorderStyle(['solid', 'dashed', 'dotted'])).toBe(
      'solid dashed dotted',
    )
    expect(normalizeBorderStyle(['solid', 'dashed', 'dotted', 'double'])).toBe(
      'solid dashed dotted double',
    )
  })

  test('should normalize incomplete or invalid array values', () => {
    expect(normalizeBorderStyle(['solid', undefined, 'dotted', null])).toBe(
      'solid none dotted',
    )
    expect(normalizeBorderStyle([])).toBe('none')
  })
})
