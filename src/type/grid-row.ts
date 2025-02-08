export type TGridRow =
  | number
  | Array<string | number>
  | { start?: string | number; end?: string | number }
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
  | string
