import { describe, expect, test } from 'bun:test';
import { normalizeTextTransform } from './text-transform';

describe('normalizeTextTransform', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextTransform(null as any)).toBe('none');
    expect(normalizeTextTransform(undefined as any)).toBe('none');
  });

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextTransform('none')).toBe('none');
    expect(normalizeTextTransform('capitalize')).toBe('capitalize');
    expect(normalizeTextTransform('uppercase')).toBe('uppercase');
    expect(normalizeTextTransform('lowercase')).toBe('lowercase');
    expect(normalizeTextTransform('full-width')).toBe('full-width');
    expect(normalizeTextTransform('full-size-kana')).toBe('full-size-kana');
    expect(normalizeTextTransform('math-auto')).toBe('math-auto');
  });

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextTransform('inherit')).toBe('inherit');
    expect(normalizeTextTransform('initial')).toBe('initial');
    expect(normalizeTextTransform('revert')).toBe('revert');
    expect(normalizeTextTransform('revert-layer')).toBe('revert-layer');
    expect(normalizeTextTransform('unset')).toBe('unset');
  });
});
