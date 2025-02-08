import type { TBlockSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBlockSize = (blockSize: TBlockSize): string => {
  if (typeof blockSize === 'string') {
    if (isPx(blockSize)) {
      return convertToRem(blockSize)
    }

    // Return valid <length>, <percentage>, or keyword values as-is
    return blockSize
  }

  if (typeof blockSize === 'number') {
    return convertToRem(blockSize)
  }

  if (blockSize === null || blockSize === undefined) {
    return 'auto'
  }

  return blockSize
}
