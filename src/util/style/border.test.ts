import { describe, expect, test } from 'bun:test'
import { normalizeBorder } from './border'

describe('normalizeBorder', () => {
  describe('Single values', () => {
    test('should handle string values as-is', () => {
      expect(normalizeBorder('none')).toBe('none')
      expect(normalizeBorder('inherit')).toBe('inherit')
    })

    test('should return "none" for null or undefined input', () => {
      expect(normalizeBorder(null as any)).toBe('none')
      expect(normalizeBorder(undefined as any)).toBe('none')
    })
  })

  describe('Simple border objects', () => {
    test('should handle complete border objects', () => {
      expect(
        normalizeBorder({
          width: '1px',
          style: 'solid',
          color: 'black',
        }),
      ).toBe('0.0625rem solid black')
    })

    test('should handle partial border objects with defaults', () => {
      expect(
        normalizeBorder({
          width: '2px',
          style: 'dashed',
        }),
      ).toBe('0.125rem dashed currentColor')
      expect(
        normalizeBorder({
          style: 'dotted',
        }),
      ).toBe('0 dotted currentColor')
      expect(
        normalizeBorder({
          color: 'red',
        }),
      ).toBe('0 solid red')
    })
  })

  describe('Empty objects and defaults', () => {
    test('should return "none" for empty objects', () => {
      expect(normalizeBorder({})).toBe('none')
    })
  })

  describe('Edge cases', () => {
    test('should return "none" for empty strings', () => {
      expect(normalizeBorder('')).toBe('none')
    })

    test('should handle mixed valid and invalid values', () => {
      expect(
        normalizeBorder({
          width: '',
          style: null,
          color: undefined,
        } as any),
      ).toBe('0 solid currentColor')
    })

    test('should handle unexpected data types gracefully', () => {
      expect(normalizeBorder(true as any)).toBe('none')
      expect(normalizeBorder(false as any)).toBe('none')
    })
  })
})
