import { describe, expect, test } from 'bun:test'
import { normalizeFont } from './font'

describe('normalizeFont', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeFont(null as any)).toBe('')
    expect(normalizeFont(undefined as any)).toBe('')
  })

  test('should return shorthand string representation as-is', () => {
    expect(normalizeFont('italic small-caps bold 16px/1.5 Arial')).toBe(
      'italic small-caps bold 16px/1.5 Arial'
    )
  })

  test('should normalize object representation correctly', () => {
    expect(
      normalizeFont({
        style: 'italic',
        variant: 'small-caps',
        weight: 'bold',
        size: '16px',
        lineHeight: '1.5',
        family: 'Arial',
      })
    ).toBe('italic small-caps bold 1rem/1.5 Arial')

    expect(
      normalizeFont({
        style: 'oblique 10deg',
        weight: '300',
        stretch: 'condensed',
        size: 16,
        family: 'Helvetica',
      })
    ).toBe('oblique 10deg 300 condensed 1rem Helvetica')
  })

  test('should normalize fontSize and lineHeight correctly', () => {
    expect(
      normalizeFont({
        size: '16px',
        lineHeight: '1.5',
        family: 'Verdana',
      })
    ).toBe('1rem/1.5 Verdana')

    expect(
      normalizeFont({
        size: 18,
        lineHeight: '150%',
        family: 'Verdana',
      })
    ).toBe('1.125rem/150% Verdana')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFont('inherit')).toBe('inherit')
    expect(normalizeFont('initial')).toBe('initial')
    expect(normalizeFont('revert')).toBe('revert')
    expect(normalizeFont('revert-layer')).toBe('revert-layer')
    expect(normalizeFont('unset')).toBe('unset')
  })
})
