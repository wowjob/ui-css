import { describe, expect, test } from 'bun:test'
import { normalizeTextEmphasis } from './text-emphasis'

describe('normalizeTextEmphasis', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextEmphasis(null as any)).toBe('none')
    expect(normalizeTextEmphasis(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeTextEmphasis('filled')).toBe('filled')
    expect(normalizeTextEmphasis('dot red over')).toBe('dot red over')
  })

  test('should normalize object values', () => {
    expect(
      normalizeTextEmphasis({
        style: 'filled sesame',
        color: 'blue',
        position: 'over right',
      })
    ).toBe('filled sesame blue over right')

    expect(
      normalizeTextEmphasis({
        style: 'circle',
        position: 'under left',
      })
    ).toBe('circle under left')

    expect(
      normalizeTextEmphasis({
        color: '#555',
      })
    ).toBe('#555')
  })

  test('should handle global keyword values in object', () => {
    expect(
      normalizeTextEmphasis({
        style: 'inherit',
        color: 'initial',
        position: 'unset',
      })
    ).toBe('inherit initial unset')
  })
})
