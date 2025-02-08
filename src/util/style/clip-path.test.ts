import { describe, expect, test } from 'bun:test'
import { normalizeClipPath } from './clip-path'

describe('normalizeClipPath', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeClipPath(null as any)).toBe('none')
    expect(normalizeClipPath(undefined as any)).toBe('none')
  })

  test('should return the "none" keyword as-is', () => {
    expect(normalizeClipPath('none')).toBe('none')
  })

  test('should return <clip-source> values as-is', () => {
    expect(normalizeClipPath('url(resources.svg#c1)')).toBe(
      'url(resources.svg#c1)'
    )
  })

  test('should return <geometry-box> values as-is', () => {
    expect(normalizeClipPath('margin-box')).toBe('margin-box')
    expect(normalizeClipPath('border-box')).toBe('border-box')
    expect(normalizeClipPath('padding-box')).toBe('padding-box')
    expect(normalizeClipPath('content-box')).toBe('content-box')
    expect(normalizeClipPath('fill-box')).toBe('fill-box')
    expect(normalizeClipPath('stroke-box')).toBe('stroke-box')
    expect(normalizeClipPath('view-box')).toBe('view-box')
  })

  test('should return <basic-shape> values as-is', () => {
    expect(normalizeClipPath('inset(100px 50px)')).toBe('inset(100px 50px)')
    expect(normalizeClipPath('circle(50px at 0 100px)')).toBe(
      'circle(50px at 0 100px)'
    )
    expect(normalizeClipPath('ellipse(50px 60px at 10% 20%)')).toBe(
      'ellipse(50px 60px at 10% 20%)'
    )
    expect(
      normalizeClipPath('polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)')
    ).toBe('polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)')
    expect(
      normalizeClipPath(
        'path("M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z")'
      )
    ).toBe(
      'path("M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z")'
    )
    expect(normalizeClipPath('rect(5px 5px 160px 145px round 20%)')).toBe(
      'rect(5px 5px 160px 145px round 20%)'
    )
    expect(normalizeClipPath('xywh(0 5px 100% 75% round 15% 0)')).toBe(
      'xywh(0 5px 100% 75% round 15% 0)'
    )
  })

  test('should return box and shape values combined as-is', () => {
    expect(normalizeClipPath('padding-box circle(50px at 0 100px)')).toBe(
      'padding-box circle(50px at 0 100px)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeClipPath('inherit')).toBe('inherit')
    expect(normalizeClipPath('initial')).toBe('initial')
    expect(normalizeClipPath('revert')).toBe('revert')
    expect(normalizeClipPath('revert-layer')).toBe('revert-layer')
    expect(normalizeClipPath('unset')).toBe('unset')
  })
})
