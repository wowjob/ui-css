export type TGridTemplate =
  | string
  | Array<string | number>
  | {
      rows?: string | number | Array<string | number>
      columns?: string | number | Array<string | number>
    }
  | 'none'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
