import {
  normalizeAccentColor,
  normalizeAlignContent,
  normalizeAlignItems,
  normalizeAlignSelf,
  normalizeAnimation,
  normalizeAppearance,
  normalizeAspectRatio,
  normalizeBackdropFilter,
  normalizeBackfaceVisibility,
  normalizeBackground,
  normalizeBackgroundBlendMode,
  normalizeBackgroundClip,
  normalizeBackgroundOrigin,
  normalizeBlockSize,
  normalizeBorder,
  normalizeBorderBlock,
  normalizeBorderBlockEnd,
  normalizeBorderBlockStart,
  normalizeBorderBottom,
  normalizeBorderBottomLeftRadius,
  normalizeBorderBottomRightRadius,
  normalizeBorderCollapse,
  normalizeBorderEndEndRadius,
  normalizeBorderEndStartRadius,
  normalizeBorderImage,
  normalizeBorderInlineEnd,
  normalizeBorderInlineStart,
  normalizeBorderLeft,
  normalizeBorderRadius,
  normalizeBorderRight,
  normalizeBorderStartEndRadius,
  normalizeBorderStartStartRadius,
  normalizeBorderStyle,
  normalizeBorderTop,
  normalizeBorderTopLeftRadius,
  normalizeBorderTopRightRadius,
  normalizeBorderWidth,
  normalizeBottom,
  normalizeBoxShadow,
  normalizeBoxSizing,
  normalizeBreakAfter,
  normalizeBreakBefore,
  normalizeBreakInside,
  normalizeCaptionSide,
  normalizeCaretColor,
  normalizeClear,
  normalizeClip,
  normalizeClipPath,
  normalizeColor,
  normalizeColorInterpolation,
  normalizeColorInterpolationFilters,
  normalizeColorScheme,
  normalizeColumnCount,
  normalizeColumnFill,
  normalizeColumnGap,
  normalizeColumnRule,
  normalizeColumnSpan,
  normalizeColumnWidth,
  normalizeContain,
  normalizeContainer,
  normalizeContainIntrinsicBlockSize,
  normalizeContainIntrinsicHeight,
  normalizeContainIntrinsicInlineSize,
  normalizeContainIntrinsicSize,
  normalizeContainIntrinsicWidth,
  normalizeContent,
  normalizeContentVisibility,
  normalizeCounterIncrement,
  normalizeCounterReset,
  normalizeCounterSet,
  normalizeCursor,
  normalizeCx,
  normalizeCy,
  normalizeD,
  normalizeDirection,
  normalizeDisplay,
  normalizeDominantBaseline,
  normalizeEmptyCells,
  normalizeFieldSizing,
  normalizeFill,
  normalizeFillOpacity,
  normalizeFillRule,
  normalizeFilter,
  normalizeFlex,
  normalizeFlexBasis,
  normalizeFlexDirection,
  normalizeFlexGrow,
  normalizeFlexShrink,
  normalizeFlexWrap,
  normalizeFloat,
  normalizeFloodColor,
  normalizeFloodOpacity,
  normalizeFont,
  normalizeFontFeatureSettings,
  normalizeFontKerning,
  normalizeFontLanguageOverride,
  normalizeFontOpticalSizing,
  normalizeFontPalette,
  normalizeFontSizeAdjust,
  normalizeFontSynthesisSmallCaps,
  normalizeFontSynthesisStyle,
  normalizeFontSynthesisWeight,
  normalizeFontVariantAlternates,
  normalizeFontVariantCaps,
  normalizeFontVariantEastAsian,
  normalizeFontVariantLigatures,
  normalizeFontVariantNumeric,
  normalizeFontVariantPosition,
  normalizeFontVariationSettings,
  normalizeForcedColorAdjust,
  normalizeGap,
  normalizeGridAutoColumns,
  normalizeGridAutoFlow,
  normalizeGridAutoRows,
  normalizeGridColumn,
  normalizeGridRow,
  normalizeGridTemplate,
  normalizeGridTemplateColumns,
  normalizeGridTemplateAreas,
  normalizeHeight,
  normalizeHyphenateCharacter,
  normalizeHyphens,
  normalizeImageOrientation,
  normalizeImageRendering,
  normalizeInlineSize,
  normalizeInset,
  normalizeInsetBlock,
  normalizeInsetInline,
  normalizeIsolation,
  normalizeJustifyContent,
  normalizeJustifyItems,
  normalizeJustifySelf,
  normalizeLeft,
  normalizeLetterSpacing,
  normalizeLightingColor,
  normalizeLineBreak,
  normalizeLineHeight,
  normalizeListStyle,
  normalizeMargin,
  normalizeMarginBlock,
  normalizeMarginInline,
  normalizeMask,
  normalizeMaskClip,
  normalizeMathStyle,
  normalizeMaxBlockSize,
  normalizeMaxHeight,
  normalizeMaxInlineSize,
  normalizeMaxWidth,
  normalizeMinBlockSize,
  normalizeMinHeight,
  normalizeMinInlineSize,
  normalizeMinWidth,
  normalizeMixBlendMode,
  normalizeObjectFit,
  normalizeObjectPosition,
  normalizeOffset,
  normalizeOffsetAnchor,
  normalizeOpacity,
  normalizeOrder,
  normalizeOutline,
  normalizeOutlineOffset,
  normalizeOverflow,
  normalizeOverscrollBehavior,
  normalizeOverscrollBehaviorBlock,
  normalizeOverscrollBehaviorInline,
  normalizePadding,
  normalizePerspective,
  normalizePerspectiveOrigin,
  normalizePlaceContent,
  normalizePlaceItems,
  normalizePlaceSelf,
  normalizePointerEvents,
  normalizePosition,
  normalizeQuotes,
  normalizeResize,
  normalizeRight,
  normalizeRotate,
  normalizeRubyAlign,
  normalizeRubyPosition,
  normalizeScale,
  normalizeScrollbarColor,
  normalizeScrollbarGutter,
  normalizeScrollbarWidth,
  normalizeScrollBehavior,
  normalizeScrollMargin,
  normalizeScrollPadding,
  normalizeScrollSnapAlign,
  normalizeScrollSnapStop,
  normalizeScrollSnapType,
  normalizeScrollTimeline,
  normalizeScrollTimelineAxis,
  normalizeScrollTimelineName,
  normalizeShapeImageThreshold,
  normalizeShapeMargin,
  normalizeShapeOutside,
  normalizeShapeRendering,
  normalizeStopColor,
  normalizeStopOpacity,
  normalizeStroke,
  normalizeStrokeDasharray,
  normalizeStrokeDashoffset,
  normalizeStrokeLinecap,
  normalizeStrokeLinejoin,
  normalizeStrokeMiterlimit,
  normalizeStrokeOpacity,
  normalizeStrokeWidth,
  normalizeTableLayout,
  normalizeTabSize,
  normalizeTextAlign,
  normalizeTextAlignLast,
  normalizeTextAnchor,
  normalizeTextCombineUpright,
  normalizeTextDecoration,
  normalizeTextEmphasis,
  normalizeTextIndent,
  normalizeTextJustify,
  normalizeTextOrientation,
  normalizeTextOverflow,
  normalizeTextRendering,
  normalizeTextShadow,
  normalizeTextTransform,
  normalizeTextUnderlineOffset,
  normalizeTextUnderlinePosition,
  normalizeTextWrap,
  normalizeTextWrapStyle,
  normalizeTop,
  normalizeTouchAction,
  normalizeTransform,
  normalizeTransformBox,
  normalizeTransformOrigin,
  normalizeTransformStyle,
  normalizeTransition,
  normalizeTransitionBehavior,
  normalizeTranslate,
  normalizeUserSelect,
  normalizeVectorEffect,
  normalizeVerticalAlign,
  normalizeVisibility,
  normalizeWhiteSpace,
  normalizeWidth,
  normalizeWillChange,
  normalizeWordBreak,
  normalizeWordSpacing,
  normalizeWritingMode,
  normalizeZIndex,
  normalizeZoom,
  normalizeGridTemplateRows,
  normalizeFontFamily,
  normalizeFontSize,
  normalizeFontStretch,
  normalizeFontStyle,
  normalizeFontVariant,
  normalizeFontWeight,
} from '../util'

import type {
  TBorder,
  TBorderWidth,
  TDisplay,
  TFlex,
  TFlexDirection,
  TMargin,
  TPadding,
  TBorderStyle,
  TFlexBasis,
  TFlexGrow,
  TFlexShrink,
  TFlexWrap,
  TAnimation,
  TBackground,
  TBorderImage,
  TBorderBlockStart,
  TBorderBlockEnd,
  TBorderBlock,
  TBorderInlineStart,
  TBorderInlineEnd,
  TBorderInline,
  TBorderRadius,
  TBorderBottom,
  TBorderBottomLeftRadius,
  TBorderBottomRightRadius,
  TBorderCollapse,
  TBorderEndEndRadius,
  TBorderEndStartRadius,
  TBorderTop,
  TBorderTopLeftRadius,
  TBorderTopRightRadius,
  TBorderLeft,
  TBorderRight,
  TBorderStartEndRadius,
  TBorderStartStartRadius,
  TBlockSize,
  TAspectRatio,
  TAppearance,
  TAccentColor,
  TAlignContent,
  TAlignItems,
  TAlignSelf,
  TBackdropFilter,
  TBackfaceVisibility,
  TBackgroundBlendMode,
  TBackgroundClip,
  TBackgroundOrigin,
  TBoxShadow,
  TBoxSizing,
  TBreakAfter,
  TBreakBefore,
  TBreakInside,
  TCaptionSide,
  TCaretColor,
  TClear,
  TClip,
  TClipPath,
  TColor,
  TColorInterpolation,
  TColorInterpolationFilters,
  TColorScheme,
  TColumnCount,
  TColumnFill,
  TColumnGap,
  TColumnRule,
  TColumnSpan,
  TColumnWidth,
  TContain,
  TContainIntrinsicBlockSize,
  TContainIntrinsicHeight,
  TContainIntrinsicInlineSize,
  TContainIntrinsicSize,
  TContainIntrinsicWidth,
  TContainer,
  TContent,
  TContentVisibility,
  TCounterIncrement,
  TCounterReset,
  TCounterSet,
  TCursor,
  TCx,
  TCy,
  TD,
  TDirection,
  TDominantBaseline,
  TEmptyCells,
  TFieldSizing,
  TFill,
  TFillOpacity,
  TFillRule,
  TFilter,
  TFloat,
  TFloodColor,
  TFloodOpacity,
  TFont,
  TFontFeatureSettings,
  TFontKerning,
  TFontLanguageOverride,
  TFontOpticalSizing,
  TFontPalette,
  TFontSizeAdjust,
  TFontSynthesisSmallCaps,
  TFontSynthesisStyle,
  TFontSynthesisWeight,
  TFontVariantAlternates,
  TFontVariantCaps,
  TFontVariantEastAsian,
  TFontVariantLigatures,
  TFontVariantNumeric,
  TFontVariantPosition,
  TFontVariationSettings,
  TForcedColorAdjust,
  TGap,
  TGridAutoColumns,
  TGridAutoFlow,
  TGridAutoRows,
  TGridColumn,
  TGridRow,
  TGridTemplate,
  TGridTemplateColumns,
  TGridTemplateAreas,
  THeight,
  THyphenateCharacter,
  THyphens,
  TImageOrientation,
  TImageRendering,
  TInlineSize,
  TInset,
  TInsetBlock,
  TInsetInline,
  TIsolation,
  TJustifyContent,
  TJustifyItems,
  TJustifySelf,
  TBottom,
  TLeft,
  TRight,
  TTop,
  TLetterSpacing,
  TLightingColor,
  TLineBreak,
  TLineHeight,
  TListStyle,
  TMarginBlock,
  TMarginInline,
  TMaskClip,
  TMask,
  TMathStyle,
  TMaxBlockSize,
  TMaxHeight,
  TMaxInlineSize,
  TMaxWidth,
  TMinBlockSize,
  TMinHeight,
  TMinInlineSize,
  TMinWidth,
  TMixBlendMode,
  TObjectFit,
  TObjectPosition,
  TOffsetAnchor,
  TOffset,
  TOpacity,
  TOrder,
  TOutlineOffset,
  TOutline,
  TOverflow,
  TOverscrollBehavior,
  TOverscrollBehaviorBlock,
  TOverscrollBehaviorInline,
  TPerspective,
  TPerspectiveOrigin,
  TPlaceContent,
  TPlaceItems,
  TPlaceSelf,
  TPointerEvents,
  TPosition,
  TQuotes,
  TResize,
  TRotate,
  TRubyAlign,
  TRubyPosition,
  TScale,
  TScrollMargin,
  TScrollPadding,
  TScrollBehavior,
  TScrollSnapAlign,
  TScrollSnapStop,
  TScrollSnapType,
  TScrollTimeline,
  TScrollTimelineAxis,
  TScrollTimelineName,
  TScrollbarColor,
  TScrollbarGutter,
  TScrollbarWidth,
  TShapeImageThreshold,
  TShapeMargin,
  TShapeOutside,
  TShapeRendering,
  TStopColor,
  TStopOpacity,
  TStroke,
  TStrokeDasharray,
  TStrokeDashoffset,
  TStrokeLinecap,
  TStrokeLinejoin,
  TStrokeMiterlimit,
  TStrokeOpacity,
  TStrokeWidth,
  TTabSize,
  TTableLayout,
  TTextDecoration,
  TTextEmphasis,
  TTextAlign,
  TTextAlignLast,
  TTextAnchor,
  TTextCombineUpright,
  TTextIndent,
  TTextJustify,
  TTextOrientation,
  TTextOverflow,
  TTextRendering,
  TTextShadow,
  TTextTransform,
  TTextUnderlineOffset,
  TTextUnderlinePosition,
  TTextWrap,
  TTextWrapStyle,
  TTouchAction,
  TTransform,
  TTransformBox,
  TTransformOrigin,
  TTransformStyle,
  TTransition,
  TTransitionBehavior,
  TTranslate,
  TUserSelect,
  TVectorEffect,
  TVerticalAlign,
  TVisibility,
  TWhiteSpace,
  TWidth,
  TWillChange,
  TWordBreak,
  TWordSpacing,
  TWritingMode,
  TZIndex,
  TZoom,
  TGridTemplateRows,
  TFontFamily,
  TFontSize,
  TFontStretch,
  TFontStyle,
  TFontVariant,
  TFontWeight,
} from '../type'
import type { TThemeColor } from './theme'

export type TEnv = 'dev' | 'prod'
export type TCSSPropValue = Partial<{
  accentColor: TAccentColor
  alignContent: TAlignContent
  alignItems: TAlignItems
  alignSelf: TAlignSelf
  animation: TAnimation
  appearance: TAppearance
  aspectRatio: TAspectRatio
  backdropFilter: TBackdropFilter
  backfaceVisibility: TBackfaceVisibility
  background: TBackground
  backgroundBlendMode: TBackgroundBlendMode
  backgroundClip: TBackgroundClip
  backgroundOrigin: TBackgroundOrigin
  blockSize: TBlockSize
  border: TBorder
  borderBlock: TBorderBlock
  borderBlockStart: TBorderBlockStart
  borderBlockEnd: TBorderBlockEnd
  borderBottom: TBorderBottom
  borderBottomLeftRadius: TBorderBottomLeftRadius
  borderBottomRightRadius: TBorderBottomRightRadius
  borderCollapse: TBorderCollapse
  borderEndEndRadius: TBorderEndEndRadius
  borderEndStartRadius: TBorderEndStartRadius
  borderImage: TBorderImage
  borderInline: TBorderInline
  borderInlineStart: TBorderInlineStart
  borderInlineEnd: TBorderInlineEnd
  borderLeft: TBorderLeft
  borderRadius: TBorderRadius
  borderRight: TBorderRight
  borderWidth: TBorderWidth
  borderStyle: TBorderStyle | TBorderStyle[]
  borderStartEndRadius: TBorderStartEndRadius
  borderStartStartRadius: TBorderStartStartRadius
  borderTop: TBorderTop
  borderTopLeftRadius: TBorderTopLeftRadius
  borderTopRightRadius: TBorderTopRightRadius
  bottom: TBottom
  display: TDisplay
  boxShadow: TBoxShadow
  boxSizing: TBoxSizing
  breakAfter: TBreakAfter
  breakBefore: TBreakBefore
  breakInside: TBreakInside
  captionSide: TCaptionSide
  caretColor: TCaretColor
  clear: TClear
  clip: TClip
  clipPath: TClipPath
  color: TColor
  colorInterpolation: TColorInterpolation
  colorInterpolationFilters: TColorInterpolationFilters
  colorScheme: TColorScheme
  columnCount: TColumnCount
  columnFill: TColumnFill
  columnGap: TColumnGap
  columnRule: TColumnRule
  columnSpan: TColumnSpan
  columnWidth: TColumnWidth
  contain: TContain
  containIntrinsicBlockSize: TContainIntrinsicBlockSize
  containIntrinsicHeight: TContainIntrinsicHeight
  containIntrinsicInlineSize: TContainIntrinsicInlineSize
  containIntrinsicSize: TContainIntrinsicSize
  containIntrinsicWidth: TContainIntrinsicWidth
  container: TContainer
  content: TContent
  contentVisibility: TContentVisibility
  counterIncrement: TCounterIncrement
  counterReset: TCounterReset
  counterSet: TCounterSet
  cursor: TCursor
  cx: TCx
  cy: TCy
  d: TD
  direction: TDirection
  dominantBaseline: TDominantBaseline
  emptyCells: TEmptyCells
  flex: TFlex
  flexBasis: TFlexBasis
  flexDirection: TFlexDirection
  flexGrow: TFlexGrow
  flexShrink: TFlexShrink
  fontVariant: TFontVariant
  fontWeight: TFontWeight
  flexWrap: TFlexWrap
  fieldSizing: TFieldSizing
  fill: TFill
  fillOpacity: TFillOpacity
  fillRule: TFillRule
  filter: TFilter
  float: TFloat
  floodColor: TFloodColor
  floodOpacity: TFloodOpacity
  font: TFont
  fontFamily: TFontFamily
  fontSize: TFontSize
  fontStretch: TFontStretch
  fontStyle: TFontStyle
  fontFeatureSettings: TFontFeatureSettings
  fontKerning: TFontKerning
  fontLanguageOverride: TFontLanguageOverride
  fontOpticalSizing: TFontOpticalSizing
  fontPalette: TFontPalette
  fontSizeAdjust: TFontSizeAdjust
  fontSynthesisSmallCaps: TFontSynthesisSmallCaps
  fontSynthesisStyle: TFontSynthesisStyle
  fontSynthesisWeight: TFontSynthesisWeight
  fontVariantAlternates: TFontVariantAlternates
  fontVariantCaps: TFontVariantCaps
  fontVariantEastAsian: TFontVariantEastAsian
  fontVariantLigatures: TFontVariantLigatures
  fontVariantNumeric: TFontVariantNumeric
  fontVariantPosition: TFontVariantPosition
  fontVariationSettings: TFontVariationSettings
  forcedColorAdjust: TForcedColorAdjust
  gap: TGap
  gridAutoColumns: TGridAutoColumns
  gridAutoFlow: TGridAutoFlow
  gridAutoRows: TGridAutoRows
  gridColumn: TGridColumn
  gridRow: TGridRow
  gridTemplate: TGridTemplate
  gridTemplateColumns: TGridTemplateColumns
  gridTemplateRows: TGridTemplateRows
  gridTemplateAreas: TGridTemplateAreas
  height: THeight
  hyphenateCharacter: THyphenateCharacter
  hyphens: THyphens
  imageOrientation: TImageOrientation
  imageRendering: TImageRendering
  inlineSize: TInlineSize
  inset: TInset
  insetBlock: TInsetBlock
  insetInline: TInsetInline
  isolation: TIsolation
  justifyContent: TJustifyContent
  justifyItems: TJustifyItems
  justifySelf: TJustifySelf
  left: TLeft
  right: TRight
  top: TTop
  letterSpacing: TLetterSpacing
  lightingColor: TLightingColor
  lineBreak: TLineBreak
  lineHeight: TLineHeight
  listStyle: TListStyle
  margin: TMargin
  marginBlock: TMarginBlock
  marginInline: TMarginInline
  mask: TMask
  maskClip: TMaskClip
  mathStyle: TMathStyle
  maxBlockSize: TMaxBlockSize
  maxHeight: TMaxHeight
  maxInlineSize: TMaxInlineSize
  maxWidth: TMaxWidth
  minBlockSize: TMinBlockSize
  minHeight: TMinHeight
  minInlineSize: TMinInlineSize
  minWidth: TMinWidth
  mixBlendMode: TMixBlendMode
  objectFit: TObjectFit
  objectPosition: TObjectPosition
  offset: TOffset
  offsetAnchor: TOffsetAnchor
  opacity: TOpacity
  order: TOrder
  outline: TOutline
  outlineOffset: TOutlineOffset
  overflow: TOverflow
  overscrollBehavior: TOverscrollBehavior
  overscrollBehaviorBlock: TOverscrollBehaviorBlock
  overscrollBehaviorInline: TOverscrollBehaviorInline
  padding: TPadding
  perspective: TPerspective
  perspectiveOrigin: TPerspectiveOrigin
  placeContent: TPlaceContent
  placeItems: TPlaceItems
  placeSelf: TPlaceSelf
  pointerEvents: TPointerEvents
  position: TPosition
  quotes: TQuotes
  resize: TResize
  rotate: TRotate
  rubyAlign: TRubyAlign
  rubyPosition: TRubyPosition
  scale: TScale
  scrollBehavior: TScrollBehavior
  scrollMargin: TScrollMargin
  scrollPadding: TScrollPadding
  scrollSnapAlign: TScrollSnapAlign
  scrollSnapStop: TScrollSnapStop
  scrollSnapType: TScrollSnapType
  scrollTimeline: TScrollTimeline
  scrollTimelineAxis: TScrollTimelineAxis
  scrollTimelineName: TScrollTimelineName
  scrollbarColor: TScrollbarColor
  scrollbarGutter: TScrollbarGutter
  scrollbarWidth: TScrollbarWidth
  shapeImageThreshold: TShapeImageThreshold
  shapeMargin: TShapeMargin
  shapeOutside: TShapeOutside
  shapeRendering: TShapeRendering
  stopColor: TStopColor
  stopOpacity: TStopOpacity
  stroke: TStroke
  strokeDasharray: TStrokeDasharray
  strokeDashoffset: TStrokeDashoffset
  strokeLinecap: TStrokeLinecap
  strokeLinejoin: TStrokeLinejoin
  strokeMiterlimit: TStrokeMiterlimit
  strokeOpacity: TStrokeOpacity
  strokeWidth: TStrokeWidth
  tabSize: TTabSize
  tableLayout: TTableLayout
  textAlign: TTextAlign
  textAlignLast: TTextAlignLast
  textAnchor: TTextAnchor
  textCombineUpright: TTextCombineUpright
  textDecoration: TTextDecoration
  textEmphasis: TTextEmphasis
  textIndent: TTextIndent
  textJustify: TTextJustify
  textOrientation: TTextOrientation
  textOverflow: TTextOverflow
  textRendering: TTextRendering
  textShadow: TTextShadow
  textTransform: TTextTransform
  textUnderlineOffset: TTextUnderlineOffset
  textUnderlinePosition: TTextUnderlinePosition
  textWrap: TTextWrap
  textWrapStyle: TTextWrapStyle
  touchAction: TTouchAction
  transform: TTransform
  transformBox: TTransformBox
  transformOrigin: TTransformOrigin
  transformStyle: TTransformStyle
  transition: TTransition
  transitionBehavior: TTransitionBehavior
  translate: TTranslate
  userSelect: TUserSelect
  vectorEffect: TVectorEffect
  verticalAlign: TVerticalAlign
  visibility: TVisibility
  whiteSpace: TWhiteSpace
  width: TWidth
  willChange: TWillChange
  wordBreak: TWordBreak
  wordSpacing: TWordSpacing
  writingMode: TWritingMode
  zIndex: TZIndex
  zoom: TZoom
}>

type TResponsive = {
  mobile?: TCSSPropValue
  tablet?: TCSSPropValue
  desktop?: TCSSPropValue
  className?: string
}

export type TStyle = {
  className?: string
  env?: TEnv
  theme?: TThemeColor
  styleAsString?: boolean
} & TResponsive

// Define a mapping of keys to their respective normalizer functions
export const propertyMap: Record<
  keyof TCSSPropValue,
  {
    className: Record<TEnv, string>
    normalize: (value: any) => string | number
  }
> = {
  accentColor: {
    className: { dev: 'accent-color', prod: 'acc' },
    normalize: normalizeAccentColor,
  },
  alignContent: {
    className: { dev: 'align-content', prod: 'ac' },
    normalize: normalizeAlignContent,
  },
  alignItems: {
    className: { dev: 'align-items', prod: 'ai' },
    normalize: normalizeAlignItems,
  },
  alignSelf: {
    className: { dev: 'align-self', prod: 'as' },
    normalize: normalizeAlignSelf,
  },
  animation: {
    className: { dev: 'animation', prod: 'a' },
    normalize: normalizeAnimation,
  },
  appearance: {
    className: { dev: 'appearance', prod: 'ap' },
    normalize: normalizeAppearance,
  },
  aspectRatio: {
    className: { dev: 'aspect-ratio', prod: 'ar' },
    normalize: normalizeAspectRatio,
  },
  backdropFilter: {
    className: { dev: 'backdrop-filter', prod: 'bf' },
    normalize: normalizeBackdropFilter,
  },
  backfaceVisibility: {
    className: { dev: 'backface-visibility', prod: 'bv' },
    normalize: normalizeBackfaceVisibility,
  },
  background: {
    className: { dev: 'background', prod: 'bg' },
    normalize: normalizeBackground,
  },
  backgroundBlendMode: {
    className: { dev: 'background-blend-mode', prod: 'bbm' },
    normalize: normalizeBackgroundBlendMode,
  },
  backgroundClip: {
    className: { dev: 'background-clip', prod: 'bc' },
    normalize: normalizeBackgroundClip,
  },
  backgroundOrigin: {
    className: { dev: 'background-origin', prod: 'bo' },
    normalize: normalizeBackgroundOrigin,
  },
  blockSize: {
    className: { dev: 'block-size', prod: 'bz' },
    normalize: normalizeBlockSize,
  },
  margin: {
    className: { dev: 'margin', prod: 'm' },
    normalize: normalizeMargin,
  },
  padding: {
    className: { dev: 'padding', prod: 'p' },
    normalize: normalizePadding,
  },
  border: {
    className: { dev: 'border', prod: 'b' },
    normalize: normalizeBorder,
  },
  borderBlock: {
    className: { dev: 'border-block', prod: 'bb' },
    normalize: normalizeBorderBlock,
  },
  borderBlockStart: {
    className: { dev: 'border-block-start', prod: 'bbs' },
    normalize: normalizeBorderBlockStart,
  },
  borderBottom: {
    className: { dev: 'border-bottom', prod: 'bbt' },
    normalize: normalizeBorderBottom,
  },
  borderBottomLeftRadius: {
    className: { dev: 'border-bottom-left-radius', prod: 'bblr' },
    normalize: normalizeBorderBottomLeftRadius,
  },
  borderBottomRightRadius: {
    className: { dev: 'border-bottom-right-radius', prod: 'bbrr' },
    normalize: normalizeBorderBottomRightRadius,
  },
  borderBlockEnd: {
    className: { dev: 'border-block-end', prod: 'bbe' },
    normalize: normalizeBorderBlockEnd,
  },
  borderCollapse: {
    className: { dev: 'border-collapse', prod: 'bdc' },
    normalize: normalizeBorderCollapse,
  },
  borderEndEndRadius: {
    className: { dev: 'border-end-end-radius', prod: 'beer' },
    normalize: normalizeBorderEndEndRadius,
  },
  borderEndStartRadius: {
    className: { dev: 'border-end-start-radius', prod: 'besr' },
    normalize: normalizeBorderEndStartRadius,
  },
  borderImage: {
    className: { dev: 'border-image', prod: 'bim' },
    normalize: normalizeBorderImage,
  },
  borderInline: {
    className: { dev: 'border-inline', prod: 'bi' },
    normalize: normalizeBorderInlineEnd,
  },
  borderLeft: {
    className: { dev: 'border-left', prod: 'bl' },
    normalize: normalizeBorderLeft,
  },
  borderInlineStart: {
    className: { dev: 'border-inline-start', prod: 'bis' },
    normalize: normalizeBorderInlineStart,
  },
  borderInlineEnd: {
    className: { dev: 'border-inline-end', prod: 'bie' },
    normalize: normalizeBorderInlineEnd,
  },
  borderRadius: {
    className: { dev: 'border-radius', prod: 'bra' },
    normalize: normalizeBorderRadius,
  },
  borderRight: {
    className: { dev: 'border-right', prod: 'br' },
    normalize: normalizeBorderRight,
  },
  borderWidth: {
    className: { dev: 'border-width', prod: 'bw' },
    normalize: normalizeBorderWidth,
  },
  borderStyle: {
    className: { dev: 'border-style', prod: 'bds' },
    normalize: normalizeBorderStyle,
  },
  borderStartEndRadius: {
    className: { dev: 'border-start-end-radius', prod: 'bser' },
    normalize: normalizeBorderStartEndRadius,
  },
  borderStartStartRadius: {
    className: { dev: 'border-start-start-radius', prod: 'bssr' },
    normalize: normalizeBorderStartStartRadius,
  },
  borderTop: {
    className: { dev: 'border-top', prod: 'bdt' },
    normalize: normalizeBorderTop,
  },
  borderTopLeftRadius: {
    className: { dev: 'border-top-left-radius', prod: 'btlr' },
    normalize: normalizeBorderTopLeftRadius,
  },
  borderTopRightRadius: {
    className: { dev: 'border-top-right-radius', prod: 'btrr' },
    normalize: normalizeBorderTopRightRadius,
  },
  bottom: {
    className: { dev: 'bottom', prod: 'bt' },
    normalize: normalizeBottom,
  },
  boxShadow: {
    className: { dev: 'box-shadow', prod: 'bs' },
    normalize: normalizeBoxShadow,
  },
  boxSizing: {
    className: { dev: 'box-sizing', prod: 'bsz' },
    normalize: normalizeBoxSizing,
  },
  breakAfter: {
    className: { dev: 'break-after', prod: 'ba' },
    normalize: normalizeBreakAfter,
  },
  breakBefore: {
    className: { dev: 'break-before', prod: 'bbf' },
    normalize: normalizeBreakBefore,
  },
  breakInside: {
    className: { dev: 'break-inside', prod: 'bbi' },
    normalize: normalizeBreakInside,
  },

  captionSide: {
    className: { dev: 'caption-side', prod: 'cps' },
    normalize: normalizeCaptionSide,
  },
  caretColor: {
    className: { dev: 'caret-color', prod: 'crc' },
    normalize: normalizeCaretColor,
  },
  clear: {
    className: { dev: 'clear', prod: 'clr' },
    normalize: normalizeClear,
  },
  clip: {
    className: { dev: 'clip', prod: 'cl' },
    normalize: normalizeClip,
  },
  clipPath: {
    className: { dev: 'clip-path', prod: 'clp' },
    normalize: normalizeClipPath,
  },
  color: {
    className: { dev: 'color', prod: 'c' },
    normalize: normalizeColor,
  },
  colorInterpolation: {
    className: { dev: 'color-interpolation', prod: 'ci' },
    normalize: normalizeColorInterpolation,
  },
  colorInterpolationFilters: {
    className: { dev: 'color-interpolation-filters', prod: 'cif' },
    normalize: normalizeColorInterpolationFilters,
  },
  colorScheme: {
    className: { dev: 'color-scheme', prod: 'cs' },
    normalize: normalizeColorScheme,
  },
  columnCount: {
    className: { dev: 'column-count', prod: 'cc' },
    normalize: normalizeColumnCount,
  },
  columnFill: {
    className: { dev: 'column-fill', prod: 'cf' },
    normalize: normalizeColumnFill,
  },
  columnGap: {
    className: { dev: 'column-gap', prod: 'cg' },
    normalize: normalizeColumnGap,
  },
  columnRule: {
    className: { dev: 'column-rule', prod: 'cr' },
    normalize: normalizeColumnRule,
  },
  columnSpan: {
    className: { dev: 'column-span', prod: 'csp' },
    normalize: normalizeColumnSpan,
  },
  columnWidth: {
    className: { dev: 'column-width', prod: 'cw' },
    normalize: normalizeColumnWidth,
  },
  contain: {
    className: { dev: 'contain', prod: 'ctn' },
    normalize: normalizeContain,
  },
  containIntrinsicBlockSize: {
    className: { dev: 'contain-intrinsic-block-size', prod: 'cib' },
    normalize: normalizeContainIntrinsicBlockSize,
  },
  containIntrinsicHeight: {
    className: { dev: 'contain-intrinsic-height', prod: 'cih' },
    normalize: normalizeContainIntrinsicHeight,
  },
  containIntrinsicInlineSize: {
    className: { dev: 'contain-intrinsic-inline-size', prod: 'ciis' },
    normalize: normalizeContainIntrinsicInlineSize,
  },
  containIntrinsicSize: {
    className: { dev: 'contain-intrinsic-size', prod: 'cis' },
    normalize: normalizeContainIntrinsicSize,
  },
  containIntrinsicWidth: {
    className: { dev: 'contain-intrinsic-width', prod: 'ciw' },
    normalize: normalizeContainIntrinsicWidth,
  },
  container: {
    className: { dev: 'container', prod: 'cn' },
    normalize: normalizeContainer,
  },
  content: {
    className: { dev: 'content', prod: 'cnt' },
    normalize: normalizeContent,
  },
  contentVisibility: {
    className: { dev: 'content-visibility', prod: 'cv' },
    normalize: normalizeContentVisibility,
  },
  counterIncrement: {
    className: { dev: 'counter-increment', prod: 'cin' },
    normalize: normalizeCounterIncrement,
  },
  counterReset: {
    className: { dev: 'counter-reset', prod: 'cre' },
    normalize: normalizeCounterReset,
  },
  counterSet: {
    className: { dev: 'counter-set', prod: 'cse' },
    normalize: normalizeCounterSet,
  },
  cursor: {
    className: { dev: 'cursor', prod: 'cur' },
    normalize: normalizeCursor,
  },
  cx: {
    className: { dev: 'cx', prod: 'cx' },
    normalize: normalizeCx,
  },
  cy: {
    className: { dev: 'cy', prod: 'cy' },
    normalize: normalizeCy,
  },
  d: {
    className: { dev: 'd', prod: 'd' },
    normalize: normalizeD,
  },
  direction: {
    className: { dev: 'direction', prod: 'dir' },
    normalize: normalizeDirection,
  },
  dominantBaseline: {
    className: { dev: 'dominant-baseline', prod: 'db' },
    normalize: normalizeDominantBaseline,
  },
  emptyCells: {
    className: { dev: 'empty-cells', prod: 'ec' },
    normalize: normalizeEmptyCells,
  },
  display: {
    className: { dev: 'display', prod: 'ds' },
    normalize: normalizeDisplay,
  },
  flex: {
    className: { dev: 'flex', prod: 'fx' },
    normalize: normalizeFlex,
  },
  flexBasis: {
    className: { dev: 'flex-basis', prod: 'fb' },
    normalize: normalizeFlexBasis,
  },
  flexDirection: {
    className: { dev: 'flex-direction', prod: 'fd' },
    normalize: normalizeFlexDirection,
  },
  flexGrow: {
    className: { dev: 'flex-grow', prod: 'fg' },
    normalize: normalizeFlexGrow,
  },
  flexShrink: {
    className: { dev: 'flex-shrink', prod: 'fsh' },
    normalize: normalizeFlexShrink,
  },
  fontVariant: {
    className: { dev: 'font-variant', prod: 'fv' },
    normalize: normalizeFontVariant,
  },
  fontWeight: {
    className: { dev: 'font-weight', prod: 'fw' },
    normalize: normalizeFontWeight,
  },
  flexWrap: {
    className: { dev: 'flex-wrap', prod: 'fwr' },
    normalize: normalizeFlexWrap,
  },
  fieldSizing: {
    className: { dev: 'field-sizing', prod: 'fiz' },
    normalize: normalizeFieldSizing,
  },
  fill: {
    className: { dev: 'fill', prod: 'fl' },
    normalize: normalizeFill,
  },
  fillOpacity: {
    className: { dev: 'fill-opacity', prod: 'fop' },
    normalize: normalizeFillOpacity,
  },
  fillRule: {
    className: { dev: 'fill-rule', prod: 'fr' },
    normalize: normalizeFillRule,
  },
  filter: {
    className: { dev: 'filter', prod: 'fil' },
    normalize: normalizeFilter,
  },
  float: {
    className: { dev: 'float', prod: 'flo' },
    normalize: normalizeFloat,
  },
  floodColor: {
    className: { dev: 'flood-color', prod: 'fc' },
    normalize: normalizeFloodColor,
  },
  floodOpacity: {
    className: { dev: 'flood-opacity', prod: 'fo' },
    normalize: normalizeFloodOpacity,
  },
  font: {
    className: { dev: 'font', prod: 'fnt' },
    normalize: normalizeFont,
  },
  fontFamily: {
    className: { dev: 'font-family', prod: 'ff' },
    normalize: normalizeFontFamily,
  },
  fontSize: {
    className: { dev: 'font-size', prod: 'fz' },
    normalize: normalizeFontSize,
  },
  fontStretch: {
    className: { dev: 'font-stretch', prod: 'fst' },
    normalize: normalizeFontStretch,
  },
  fontStyle: {
    className: { dev: 'font-style', prod: 'fs' },
    normalize: normalizeFontStyle,
  },
  fontFeatureSettings: {
    className: { dev: 'font-feature-settings', prod: 'ffs' },
    normalize: normalizeFontFeatureSettings,
  },
  fontKerning: {
    className: { dev: 'font-kerning', prod: 'fk' },
    normalize: normalizeFontKerning,
  },
  fontLanguageOverride: {
    className: { dev: 'font-language-override', prod: 'flov' },
    normalize: normalizeFontLanguageOverride,
  },
  fontOpticalSizing: {
    className: { dev: 'font-optical-sizing', prod: 'fos' },
    normalize: normalizeFontOpticalSizing,
  },
  fontPalette: {
    className: { dev: 'font-palette', prod: 'fp' },
    normalize: normalizeFontPalette,
  },
  fontSizeAdjust: {
    className: { dev: 'font-size-adjust', prod: 'fsa' },
    normalize: normalizeFontSizeAdjust,
  },
  fontSynthesisSmallCaps: {
    className: { dev: 'font-synthesis-small-caps', prod: 'fssc' },
    normalize: normalizeFontSynthesisSmallCaps,
  },
  fontSynthesisStyle: {
    className: { dev: 'font-synthesis-style', prod: 'fss' },
    normalize: normalizeFontSynthesisStyle,
  },
  fontSynthesisWeight: {
    className: { dev: 'font-synthesis-weight', prod: 'fsw' },
    normalize: normalizeFontSynthesisWeight,
  },
  fontVariantAlternates: {
    className: { dev: 'font-variant-alternates', prod: 'fva' },
    normalize: normalizeFontVariantAlternates,
  },
  fontVariantCaps: {
    className: { dev: 'font-variant-caps', prod: 'fvc' },
    normalize: normalizeFontVariantCaps,
  },
  fontVariantEastAsian: {
    className: { dev: 'font-variant-east-asian', prod: 'fvea' },
    normalize: normalizeFontVariantEastAsian,
  },
  fontVariantLigatures: {
    className: { dev: 'font-variant-ligatures', prod: 'fvl' },
    normalize: normalizeFontVariantLigatures,
  },
  fontVariantNumeric: {
    className: { dev: 'font-variant-numeric', prod: 'fvn' },
    normalize: normalizeFontVariantNumeric,
  },
  fontVariantPosition: {
    className: { dev: 'font-variant-position', prod: 'fvp' },
    normalize: normalizeFontVariantPosition,
  },
  fontVariationSettings: {
    className: { dev: 'font-variation-settings', prod: 'fvs' },
    normalize: normalizeFontVariationSettings,
  },
  forcedColorAdjust: {
    className: { dev: 'forced-color-adjust', prod: 'fca' },
    normalize: normalizeForcedColorAdjust,
  },
  gap: {
    className: { dev: 'gap', prod: 'gp' },
    normalize: normalizeGap,
  },
  gridAutoColumns: {
    className: { dev: 'grid-auto-columns', prod: 'gac' },
    normalize: normalizeGridAutoColumns,
  },
  gridAutoFlow: {
    className: { dev: 'grid-auto-flow', prod: 'gaf' },
    normalize: normalizeGridAutoFlow,
  },
  gridAutoRows: {
    className: { dev: 'grid-auto-rows', prod: 'gar' },
    normalize: normalizeGridAutoRows,
  },
  gridColumn: {
    className: { dev: 'grid-column', prod: 'gc' },
    normalize: normalizeGridColumn,
  },
  gridRow: {
    className: { dev: 'grid-row', prod: 'gr' },
    normalize: normalizeGridRow,
  },
  gridTemplate: {
    className: { dev: 'grid-template', prod: 'gt' },
    normalize: normalizeGridTemplate,
  },
  gridTemplateColumns: {
    className: { dev: 'grid-template-columns', prod: 'gtc' },
    normalize: normalizeGridTemplateColumns,
  },
  gridTemplateRows: {
    className: { dev: 'grid-template-rows', prod: 'gtr' },
    normalize: normalizeGridTemplateRows,
  },
  gridTemplateAreas: {
    className: { dev: 'grid-template-areas', prod: 'gta' },
    normalize: normalizeGridTemplateAreas,
  },
  height: {
    className: { dev: 'height', prod: 'h' },
    normalize: normalizeHeight,
  },
  hyphenateCharacter: {
    className: { dev: 'hyphenate-character', prod: 'hc' },
    normalize: normalizeHyphenateCharacter,
  },
  hyphens: {
    className: { dev: 'hyphens', prod: 'hy' },
    normalize: normalizeHyphens,
  },
  imageOrientation: {
    className: { dev: 'image-orientation', prod: 'io' },
    normalize: normalizeImageOrientation,
  },
  imageRendering: {
    className: { dev: 'image-rendering', prod: 'ir' },
    normalize: normalizeImageRendering,
  },
  inlineSize: {
    className: { dev: 'inline-size', prod: 'is' },
    normalize: normalizeInlineSize,
  },
  inset: {
    className: { dev: 'inset', prod: 'i' },
    normalize: normalizeInset,
  },
  insetBlock: {
    className: { dev: 'inset-block', prod: 'ib' },
    normalize: normalizeInsetBlock,
  },
  insetInline: {
    className: { dev: 'inset-inline', prod: 'ii' },
    normalize: normalizeInsetInline,
  },
  isolation: {
    className: { dev: 'isolation', prod: 'iso' },
    normalize: normalizeIsolation,
  },
  justifyContent: {
    className: { dev: 'justify-content', prod: 'jc' },
    normalize: normalizeJustifyContent,
  },
  justifyItems: {
    className: { dev: 'justify-items', prod: 'ji' },
    normalize: normalizeJustifyItems,
  },
  justifySelf: {
    className: { dev: 'justify-self', prod: 'js' },
    normalize: normalizeJustifySelf,
  },
  left: {
    className: { dev: 'left', prod: 'lf' },
    normalize: normalizeLeft,
  },
  right: {
    className: { dev: 'right', prod: 'r' },
    normalize: normalizeRight,
  },
  top: {
    className: { dev: 'top', prod: 'tp' },
    normalize: normalizeTop,
  },
  letterSpacing: {
    className: { dev: 'letter-spacing', prod: 'ls' },
    normalize: normalizeLetterSpacing,
  },
  lightingColor: {
    className: { dev: 'lighting-color', prod: 'lc' },
    normalize: normalizeLightingColor,
  },
  lineBreak: {
    className: { dev: 'line-break', prod: 'lb' },
    normalize: normalizeLineBreak,
  },
  lineHeight: {
    className: { dev: 'line-height', prod: 'lh' },
    normalize: normalizeLineHeight,
  },
  listStyle: {
    className: { dev: 'list-style', prod: 'lst' },
    normalize: normalizeListStyle,
  },
  marginBlock: {
    className: { dev: 'margin-block', prod: 'mb' },
    normalize: normalizeMarginBlock,
  },
  marginInline: {
    className: { dev: 'margin-inline', prod: 'mi' },
    normalize: normalizeMarginInline,
  },
  mask: {
    className: { dev: 'mask', prod: 'mk' },
    normalize: normalizeMask,
  },
  maskClip: {
    className: { dev: 'mask-clip', prod: 'mc' },
    normalize: normalizeMaskClip,
  },
  mathStyle: {
    className: { dev: 'math-style', prod: 'ms' },
    normalize: normalizeMathStyle,
  },
  maxBlockSize: {
    className: { dev: 'max-block-size', prod: 'mxbs' },
    normalize: normalizeMaxBlockSize,
  },
  maxHeight: {
    className: { dev: 'max-height', prod: 'mxh' },
    normalize: normalizeMaxHeight,
  },
  maxInlineSize: {
    className: { dev: 'max-inline-size', prod: 'mxis' },
    normalize: normalizeMaxInlineSize,
  },
  maxWidth: {
    className: { dev: 'max-width', prod: 'mxw' },
    normalize: normalizeMaxWidth,
  },
  minBlockSize: {
    className: { dev: 'min-block-size', prod: 'mibs' },
    normalize: normalizeMinBlockSize,
  },
  minHeight: {
    className: { dev: 'min-height', prod: 'mih' },
    normalize: normalizeMinHeight,
  },
  minInlineSize: {
    className: { dev: 'min-inline-size', prod: 'miis' },
    normalize: normalizeMinInlineSize,
  },
  minWidth: {
    className: { dev: 'min-width', prod: 'miw' },
    normalize: normalizeMinWidth,
  },
  mixBlendMode: {
    className: { dev: 'mix-blend-mode', prod: 'mbm' },
    normalize: normalizeMixBlendMode,
  },
  objectFit: {
    className: { dev: 'object-fit', prod: 'of' },
    normalize: normalizeObjectFit,
  },
  objectPosition: {
    className: { dev: 'object-position', prod: 'op' },
    normalize: normalizeObjectPosition,
  },
  offsetAnchor: {
    className: { dev: 'offset-anchor', prod: 'oa' },
    normalize: normalizeOffsetAnchor,
  },
  offset: {
    className: { dev: 'offset', prod: 'ofst' },
    normalize: normalizeOffset,
  },
  opacity: {
    className: { dev: 'opacity', prod: 'o' },
    normalize: normalizeOpacity,
  },
  order: {
    className: { dev: 'order', prod: 'or' },
    normalize: normalizeOrder,
  },
  outline: {
    className: { dev: 'outline', prod: 'ol' },
    normalize: normalizeOutline,
  },
  outlineOffset: {
    className: { dev: 'outline-offset', prod: 'oo' },
    normalize: normalizeOutlineOffset,
  },
  overflow: {
    className: { dev: 'overflow', prod: 'ov' },
    normalize: normalizeOverflow,
  },
  overscrollBehavior: {
    className: { dev: 'overscroll-behavior', prod: 'osb' },
    normalize: normalizeOverscrollBehavior,
  },
  overscrollBehaviorBlock: {
    className: { dev: 'overscroll-behavior-block', prod: 'osbb' },
    normalize: normalizeOverscrollBehaviorBlock,
  },
  overscrollBehaviorInline: {
    className: { dev: 'overscroll-behavior-inline', prod: 'osbi' },
    normalize: normalizeOverscrollBehaviorInline,
  },
  perspective: {
    className: { dev: 'perspective', prod: 'pp' },
    normalize: normalizePerspective,
  },
  perspectiveOrigin: {
    className: { dev: 'perspective-origin', prod: 'po' },
    normalize: normalizePerspectiveOrigin,
  },
  placeContent: {
    className: { dev: 'place-content', prod: 'pc' },
    normalize: normalizePlaceContent,
  },
  placeItems: {
    className: { dev: 'place-items', prod: 'pi' },
    normalize: normalizePlaceItems,
  },
  placeSelf: {
    className: { dev: 'place-self', prod: 'ps' },
    normalize: normalizePlaceSelf,
  },
  pointerEvents: {
    className: { dev: 'pointer-events', prod: 'pe' },
    normalize: normalizePointerEvents,
  },
  position: {
    className: { dev: 'position', prod: 'pos' },
    normalize: normalizePosition,
  },
  quotes: {
    className: { dev: 'quotes', prod: 'q' },
    normalize: normalizeQuotes,
  },
  resize: {
    className: { dev: 'resize', prod: 'rs' },
    normalize: normalizeResize,
  },
  rotate: {
    className: { dev: 'rotate', prod: 'rt' },
    normalize: normalizeRotate,
  },
  rubyAlign: {
    className: {
      dev: 'ruby-align',
      prod: 'ra',
    },
    normalize: normalizeRubyAlign,
  },
  rubyPosition: {
    className: { dev: 'ruby-position', prod: 'rp' },
    normalize: normalizeRubyPosition,
  },
  scale: {
    className: { dev: 'scale', prod: 's' },
    normalize: normalizeScale,
  },
  scrollBehavior: {
    className: { dev: 'scroll-behavior', prod: 'sb' },
    normalize: normalizeScrollBehavior,
  },
  scrollMargin: {
    className: { dev: 'scroll-margin', prod: 'sm' },
    normalize: normalizeScrollMargin,
  },
  scrollPadding: {
    className: { dev: 'scroll-padding', prod: 'sp' },
    normalize: normalizeScrollPadding,
  },
  scrollSnapAlign: {
    className: { dev: 'scroll-snap-align', prod: 'ssa' },
    normalize: normalizeScrollSnapAlign,
  },
  scrollSnapStop: {
    className: { dev: 'scroll-snap-stop', prod: 'sss' },
    normalize: normalizeScrollSnapStop,
  },
  scrollSnapType: {
    className: { dev: 'scroll-snap-type', prod: 'sst' },
    normalize: normalizeScrollSnapType,
  },
  scrollTimeline: {
    className: { dev: 'scroll-timeline', prod: 'st' },
    normalize: normalizeScrollTimeline,
  },
  scrollTimelineAxis: {
    className: { dev: 'scroll-timeline-axis', prod: 'sta' },
    normalize: normalizeScrollTimelineAxis,
  },
  scrollTimelineName: {
    className: { dev: 'scroll-timeline-name', prod: 'stn' },
    normalize: normalizeScrollTimelineName,
  },
  scrollbarColor: {
    className: { dev: 'scrollbar-color', prod: 'sc' },
    normalize: normalizeScrollbarColor,
  },
  scrollbarGutter: {
    className: { dev: 'scrollbar-gutter', prod: 'sg' },
    normalize: normalizeScrollbarGutter,
  },
  scrollbarWidth: {
    className: { dev: 'scrollbar-width', prod: 'sw' },
    normalize: normalizeScrollbarWidth,
  },
  shapeImageThreshold: {
    className: { dev: 'shape-image-threshold', prod: 'sit' },
    normalize: normalizeShapeImageThreshold,
  },
  shapeMargin: {
    className: { dev: 'shape-margin', prod: 'smg' },
    normalize: normalizeShapeMargin,
  },
  shapeOutside: {
    className: { dev: 'shape-outside', prod: 'so' },
    normalize: normalizeShapeOutside,
  },
  shapeRendering: {
    className: { dev: 'shape-rendering', prod: 'sr' },
    normalize: normalizeShapeRendering,
  },
  stopColor: {
    className: { dev: 'stop-color', prod: 'stc' },
    normalize: normalizeStopColor,
  },
  stopOpacity: {
    className: { dev: 'stop-opacity', prod: 'sto' },
    normalize: normalizeStopOpacity,
  },
  stroke: {
    className: { dev: 'stroke', prod: 'str' },
    normalize: normalizeStroke,
  },
  strokeDasharray: {
    className: { dev: 'stroke-dasharray', prod: 'sda' },
    normalize: normalizeStrokeDasharray,
  },
  strokeDashoffset: {
    className: { dev: 'stroke-dashoffset', prod: 'sdo' },
    normalize: normalizeStrokeDashoffset,
  },
  strokeLinecap: {
    className: { dev: 'stroke-linecap', prod: 'slc' },
    normalize: normalizeStrokeLinecap,
  },
  strokeLinejoin: {
    className: { dev: 'stroke-linejoin', prod: 'slj' },
    normalize: normalizeStrokeLinejoin,
  },
  strokeMiterlimit: {
    className: { dev: 'stroke-miterlimit', prod: 'sml' },
    normalize: normalizeStrokeMiterlimit,
  },
  strokeOpacity: {
    className: { dev: 'stroke-opacity', prod: 'sop' },
    normalize: normalizeStrokeOpacity,
  },
  strokeWidth: {
    className: { dev: 'stroke-width', prod: 'swi' },
    normalize: normalizeStrokeWidth,
  },
  tabSize: {
    className: { dev: 'tab-size', prod: 'txs' },
    normalize: normalizeTabSize,
  },
  tableLayout: {
    className: { dev: 'table-layout', prod: 'tl' },
    normalize: normalizeTableLayout,
  },
  textAlign: {
    className: { dev: 'text-align', prod: 'ta' },
    normalize: normalizeTextAlign,
  },
  textAlignLast: {
    className: { dev: 'text-align-last', prod: 'tal' },
    normalize: normalizeTextAlignLast,
  },
  textAnchor: {
    className: { dev: 'text-anchor', prod: 'tan' },
    normalize: normalizeTextAnchor,
  },
  textCombineUpright: {
    className: { dev: 'text-combine-upright', prod: 'tcu' },
    normalize: normalizeTextCombineUpright,
  },
  textDecoration: {
    className: { dev: 'text-decoration', prod: 'td' },
    normalize: normalizeTextDecoration,
  },
  textEmphasis: {
    className: { dev: 'text-emphasis', prod: 'te' },
    normalize: normalizeTextEmphasis,
  },
  textIndent: {
    className: { dev: 'text-indent', prod: 'ti' },
    normalize: normalizeTextIndent,
  },
  textJustify: {
    className: { dev: 'text-justify', prod: 'tj' },
    normalize: normalizeTextJustify,
  },
  textOrientation: {
    className: { dev: 'text-orientation', prod: 'to' },
    normalize: normalizeTextOrientation,
  },
  textOverflow: {
    className: { dev: 'text-overflow', prod: 'tof' },
    normalize: normalizeTextOverflow,
  },
  textRendering: {
    className: { dev: 'text-rendering', prod: 'tr' },
    normalize: normalizeTextRendering,
  },
  textShadow: {
    className: { dev: 'text-shadow', prod: 'tsh' },
    normalize: normalizeTextShadow,
  },
  textTransform: {
    className: { dev: 'text-transform', prod: 'tt' },
    normalize: normalizeTextTransform,
  },
  textUnderlineOffset: {
    className: { dev: 'text-underline-offset', prod: 'tuo' },
    normalize: normalizeTextUnderlineOffset,
  },
  textUnderlinePosition: {
    className: { dev: 'text-underline-position', prod: 'tup' },
    normalize: normalizeTextUnderlinePosition,
  },
  textWrap: {
    className: { dev: 'text-wrap', prod: 'tw' },
    normalize: normalizeTextWrap,
  },
  textWrapStyle: {
    className: { dev: 'text-wrap-style', prod: 'tws' },
    normalize: normalizeTextWrapStyle,
  },
  touchAction: {
    className: { dev: 'touch-action', prod: 'toa' },
    normalize: normalizeTouchAction,
  },
  transform: {
    className: { dev: 'transform', prod: 'tf' },
    normalize: normalizeTransform,
  },
  transformBox: {
    className: { dev: 'transform-box', prod: 'tb' },
    normalize: normalizeTransformBox,
  },
  transformOrigin: {
    className: { dev: 'transform-origin', prod: 'tro' },
    normalize: normalizeTransformOrigin,
  },
  transformStyle: {
    className: { dev: 'transform-style', prod: 'ts' },
    normalize: normalizeTransformStyle,
  },
  transition: {
    className: { dev: 'transition', prod: 'tra' },
    normalize: normalizeTransition,
  },
  transitionBehavior: {
    className: { dev: 'transition-behavior', prod: 'tbe' },
    normalize: normalizeTransitionBehavior,
  },
  translate: {
    className: { dev: 'translate', prod: 't' },
    normalize: normalizeTranslate,
  },
  userSelect: {
    className: { dev: 'user-select', prod: 'us' },
    normalize: normalizeUserSelect,
  },
  vectorEffect: {
    className: { dev: 'vector-effect', prod: 've' },
    normalize: normalizeVectorEffect,
  },
  verticalAlign: {
    className: { dev: 'vertical-align', prod: 'va' },
    normalize: normalizeVerticalAlign,
  },
  visibility: {
    className: { dev: 'visibility', prod: 'vs' },
    normalize: normalizeVisibility,
  },
  whiteSpace: {
    className: { dev: 'white-space', prod: 'ws' },
    normalize: normalizeWhiteSpace,
  },
  width: {
    className: { dev: 'width', prod: 'w' },
    normalize: normalizeWidth,
  },
  willChange: {
    className: { dev: 'will-change', prod: 'wc' },
    normalize: normalizeWillChange,
  },
  wordBreak: {
    className: { dev: 'word-break', prod: 'wb' },
    normalize: normalizeWordBreak,
  },
  wordSpacing: {
    className: { dev: 'word-spacing', prod: 'wsp' },
    normalize: normalizeWordSpacing,
  },
  writingMode: {
    className: { dev: 'writing-mode', prod: 'wm' },
    normalize: normalizeWritingMode,
  },
  zIndex: {
    className: { dev: 'z-index', prod: 'zi' },
    normalize: normalizeZIndex,
  },
  zoom: {
    className: { dev: 'zoom', prod: 'zm' },
    normalize: normalizeZoom,
  },
} as const
