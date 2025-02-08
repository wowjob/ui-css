import { describe, expect, test } from 'bun:test'
import { normalizeBackground } from './background'

describe('normalizeBackground', () => {
  test('should return a string background value as-is', () => {
    expect(normalizeBackground('red url(image.png) no-repeat')).toBe(
      'red url(image.png) no-repeat',
    )
  })

  test('should normalize a background object with defaults', () => {
    expect(
      normalizeBackground({
        color: 'blue',
        image: 'url(image.png)',
      }),
    ).toBe(
      'blue url(image.png) 0 0 auto repeat scroll padding-box border-box normal',
    )
  })

  test('should normalize a background object with position and size', () => {
    expect(
      normalizeBackground({
        color: 'green',
        positionX: 'center',
        positionY: 'top',
        size: 'cover',
      }),
    ).toBe(
      'green none center top cover repeat scroll padding-box border-box normal',
    )
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeBackground(undefined as any)).toBe('none')
    expect(normalizeBackground(null as any)).toBe('none')
  })

  test('should normalize all properties in a background object', () => {
    expect(
      normalizeBackground({
        color: 'red',
        image: 'url(image.png)',
        positionX: '50%',
        positionY: '50%',
        size: 'contain',
        repeat: 'no-repeat',
        attachment: 'fixed',
        origin: 'content-box',
        clip: 'padding-box',
        blendMode: 'multiply',
      }),
    ).toBe(
      'red url(image.png) 50% 50% contain no-repeat fixed content-box padding-box multiply',
    )
  })
})
