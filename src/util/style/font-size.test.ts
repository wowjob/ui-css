import { describe, expect, test } from 'bun:test'
import { normalizeFontSize } from './font-size'

describe('normalizeFontSize', () => {
  test('should return "medium" for null or undefined', () => {
    expect(normalizeFontSize(null as any)).toBe('medium')
    expect(normalizeFontSize(undefined as any)).toBe('medium')
  })

  test('should return valid absolute-size values as-is', () => {
    expect(normalizeFontSize('xx-small')).toBe('xx-small')
    expect(normalizeFontSize('x-small')).toBe('x-small')
    expect(normalizeFontSize('small')).toBe('small')
    expect(normalizeFontSize('medium')).toBe('medium')
    expect(normalizeFontSize('large')).toBe('large')
    expect(normalizeFontSize('x-large')).toBe('x-large')
    expect(normalizeFontSize('xx-large')).toBe('xx-large')
    expect(normalizeFontSize('xxx-large')).toBe('xxx-large')
  })

  test('should return valid relative-size values as-is', () => {
    expect(normalizeFontSize('smaller')).toBe('smaller')
    expect(normalizeFontSize('larger')).toBe('larger')
  })

  test('should convert px values to rem', () => {
    expect(normalizeFontSize('12px')).toBe('0.75rem') // Assuming 16px base font size
    expect(normalizeFontSize(16)).toBe('1rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFontSize('80%')).toBe('80%')
  })

  test('should return "math" as-is', () => {
    expect(normalizeFontSize('math')).toBe('math')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontSize('inherit')).toBe('inherit')
    expect(normalizeFontSize('initial')).toBe('initial')
    expect(normalizeFontSize('revert')).toBe('revert')
    expect(normalizeFontSize('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSize('unset')).toBe('unset')
  })
})
