import type { TFlex } from '../../type'

export const normalizeFlex = (flex: TFlex): string => {
  if (Array.isArray(flex)) {
    const [grow, shrink, basis] = flex
    return [grow ?? 0, shrink ?? 1, basis ?? 'auto'].join(' ')
  }

  return flex ?? '0 1 auto'
}
