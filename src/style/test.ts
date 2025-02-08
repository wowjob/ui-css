import { getStyle } from './get-style'
import { themeHueSaturation, themeLightnessAlpha } from './theme'

// console.log(themeHueSaturation)
// console.log(themeLightnessAlpha)
console.log(
  getStyle({
    mobile: {
      zoom: '200%',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 2fr)',
      fontFamily: 'wowjob, sans-serif',
      fontSize: 'large',
      fontStretch: 'condensed',
      fontStyle: 'italic',
      fontVariant: 'all-petite-caps',
      fontWeight: 'bold',
    },
    className: 'yes-no',
    // styleAsString: true,
    theme: 'accent',
  })
)
