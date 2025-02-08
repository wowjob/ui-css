import { describe, expect, test } from 'bun:test'
import { normalizeContent } from './content'

describe('normalizeContent', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeContent(null as any)).toBe('normal')
    expect(normalizeContent(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeContent('normal')).toBe('normal')
    expect(normalizeContent('none')).toBe('none')
  })

  test('should return <content-replacement> values as-is', () => {
    expect(normalizeContent('url("http://www.example.com/test.png")')).toBe(
      'url("http://www.example.com/test.png")'
    )
    expect(normalizeContent('linear-gradient(#e66465, #9198e5)')).toBe(
      'linear-gradient(#e66465, #9198e5)'
    )
    expect(
      normalizeContent('image-set("image1x.png" 1x, "image2x.png" 2x)')
    ).toBe('image-set("image1x.png" 1x, "image2x.png" 2x)')
  })

  test('should return speech output with alternative text as-is', () => {
    expect(
      normalizeContent('url("../img/test.png") / "This is the alt text"')
    ).toBe('url("../img/test.png") / "This is the alt text"')
  })

  test('should return <string> values as-is', () => {
    expect(normalizeContent('"unparsed text"')).toBe('"unparsed text"')
  })

  test('should return <counter> values as-is', () => {
    expect(normalizeContent('counter(chapter_counter)')).toBe(
      'counter(chapter_counter)'
    )
    expect(normalizeContent('counter(chapter_counter, upper-roman)')).toBe(
      'counter(chapter_counter, upper-roman)'
    )
    expect(normalizeContent('counters(section_counter, ".")')).toBe(
      'counters(section_counter, ".")'
    )
    expect(
      normalizeContent('counters(section_counter, ".", decimal-leading-zero)')
    ).toBe('counters(section_counter, ".", decimal-leading-zero)')
  })

  test('should return attr() values as-is', () => {
    expect(normalizeContent('attr(href)')).toBe('attr(href)')
  })

  test('should return <quote> values as-is', () => {
    expect(normalizeContent('open-quote')).toBe('open-quote')
    expect(normalizeContent('close-quote')).toBe('close-quote')
    expect(normalizeContent('no-open-quote')).toBe('no-open-quote')
    expect(normalizeContent('no-close-quote')).toBe('no-close-quote')
  })

  test('should return <content-list> values as-is', () => {
    expect(
      normalizeContent('"prefix" url(http://www.example.com/test.png)')
    ).toBe('"prefix" url(http://www.example.com/test.png)')
    expect(
      normalizeContent('"prefix" url("/img/test.png") "suffix" / "Alt text"')
    ).toBe('"prefix" url("/img/test.png") "suffix" / "Alt text"')
    expect(normalizeContent('open-quote counter(chapter_counter)')).toBe(
      'open-quote counter(chapter_counter)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContent('inherit')).toBe('inherit')
    expect(normalizeContent('initial')).toBe('initial')
    expect(normalizeContent('revert')).toBe('revert')
    expect(normalizeContent('revert-layer')).toBe('revert-layer')
    expect(normalizeContent('unset')).toBe('unset')
  })
})
