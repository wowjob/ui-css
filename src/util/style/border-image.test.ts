import { describe, expect, test } from 'bun:test'
import { normalizeBorderImage } from './border-image'

describe('normalizeBorderImage', () => {
  test('should return a string border-image value as-is', () => {
    expect(normalizeBorderImage('url(border.png) 30 fill')).toBe(
      'url(border.png) 30 fill',
    )
  })

  test('should normalize a border-image object with defaults', () => {
    expect(
      normalizeBorderImage({
        source: 'url(border.png)',
      }),
    ).toBe('url(border.png) 100% 1 0 stretch')
  })

  test('should normalize a border-image object with slice and width', () => {
    expect(
      normalizeBorderImage({
        source: 'url(border.png)',
        slice: '50%',
        width: '2px',
      }),
    ).toBe('url(border.png) 50% 2px 0 stretch')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeBorderImage(undefined as any)).toBe('none')
    expect(normalizeBorderImage(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-image object', () => {
    expect(
      normalizeBorderImage({
        source: 'url(border.png)',
        slice: '20% 30%',
        width: '5px',
        outset: '10px',
        repeat: 'round',
      }),
    ).toBe('url(border.png) 20% 30% 5px 10px round')
  })
})
