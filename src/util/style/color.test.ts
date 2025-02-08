import { describe, expect, test } from 'bun:test'
import { normalizeColor } from './color'

describe('normalizeColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeColor(null as any)).toBe('currentcolor')
    expect(normalizeColor(undefined as any)).toBe('currentcolor')
  })

  test('should return <named-color> values as-is', () => {
    expect(normalizeColor('red')).toBe('red')
    expect(normalizeColor('orange')).toBe('orange')
    expect(normalizeColor('tan')).toBe('tan')
    expect(normalizeColor('rebeccapurple')).toBe('rebeccapurple')
  })

  test('should return <hex-color> values as-is', () => {
    expect(normalizeColor('#090')).toBe('#090')
    expect(normalizeColor('#009900')).toBe('#009900')
    expect(normalizeColor('#090a')).toBe('#090a')
    expect(normalizeColor('#009900aa')).toBe('#009900aa')
  })

  test('should return <rgb()> and <rgba()> values as-is', () => {
    expect(normalizeColor('rgb(34, 12, 64)')).toBe('rgb(34, 12, 64)')
    expect(normalizeColor('rgb(34, 12, 64, 0.6)')).toBe('rgb(34, 12, 64, 0.6)')
    expect(normalizeColor('rgba(34, 12, 64, 0.6)')).toBe(
      'rgba(34, 12, 64, 0.6)'
    )
    expect(normalizeColor('rgb(34 12 64 / 0.6)')).toBe('rgb(34 12 64 / 0.6)')
    expect(normalizeColor('rgba(34.6 12 64 / 60%)')).toBe(
      'rgba(34.6 12 64 / 60%)'
    )
  })

  test('should return <hsl()> and <hsla()> values as-is', () => {
    expect(normalizeColor('hsl(30, 100%, 50%)')).toBe('hsl(30, 100%, 50%)')
    expect(normalizeColor('hsl(30 100% 50% / 0.6)')).toBe(
      'hsl(30 100% 50% / 0.6)'
    )
    expect(normalizeColor('hsla(30.2 100% 50% / 60%)')).toBe(
      'hsla(30.2 100% 50% / 60%)'
    )
  })

  test('should return <hwb()> values as-is', () => {
    expect(normalizeColor('hwb(90 10% 10%)')).toBe('hwb(90 10% 10%)')
    expect(normalizeColor('hwb(90deg 10% 10%)')).toBe('hwb(90deg 10% 10%)')
    expect(normalizeColor('hwb(1.5708rad 60% 0%)')).toBe(
      'hwb(1.5708rad 60% 0%)'
    )
    expect(normalizeColor('hwb(0.25turn 0% 40% / 50%)')).toBe(
      'hwb(0.25turn 0% 40% / 50%)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColor('inherit')).toBe('inherit')
    expect(normalizeColor('initial')).toBe('initial')
    expect(normalizeColor('revert')).toBe('revert')
    expect(normalizeColor('revert-layer')).toBe('revert-layer')
    expect(normalizeColor('unset')).toBe('unset')
  })
})
