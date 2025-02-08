export type TDirectionalUnit =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `${number}vw`
  | `${number}vh`
  | `calc${string}`
  | `var(${string})`
  | `clamp(${string})`
