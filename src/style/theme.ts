export const ThemeColorMap = {
  // Represents the core identity of the brand. Used prominently in branding-related elements to create a recognizable identity.
  // **Common UI Usage**:
  // - Logo
  // - Navbar background or highlights
  // - Key call-to-action buttons (e.g., "Get Started")
  // - Brand-themed components like cards or headers
  brand: {
    hue: 259,
    saturation: 77,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Vibrant purple

  // The primary action color, used to drive user attention and encourage interaction.
  // **Common UI Usage**:
  // - Primary buttons (e.g., "Submit", "Continue")
  // - Active links or tabs
  // - Progress bars
  primary: {
    hue: 225,
    saturation: 77,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Bright blue

  // A secondary color that complements the primary, often used to highlight additional, less critical actions.
  // **Common UI Usage**:
  // - Secondary buttons (e.g., "Cancel")
  // - Notifications or badges (e.g., "New")
  // - Backgrounds for secondary cards or hover effects
  secondary: {
    hue: 318,
    saturation: 77,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Vibrant pink

  // Used as a supporting color to create depth and add variety, often for subtle yet appealing highlights.
  // **Common UI Usage**:
  // - Link hover states
  // - Borders or shadows
  // - Infographic details (e.g., charts, diagrams)
  tertiary: {
    hue: 245,
    saturation: 86,
    lightness: { text: 15, background: 80, border: 60 },
  }, // Soft violet

  // The neutral base color, ideal for unobtrusive elements that form the structure of the UI.
  // **Common UI Usage**:
  // - Text on light backgrounds
  // - Divider lines
  // - Inactive tabs or buttons
  default: {
    hue: 221,
    saturation: 13,
    lightness: { text: 15, background: 95, border: 50 },
  }, // Neutral gray

  // Represents errors, warnings, or negative outcomes, capturing user attention with urgency.
  // **Common UI Usage**:
  // - Error alerts (e.g., "Invalid input")
  // - Validation error messages
  // - Critical notifications or icons
  error: {
    hue: 4,
    saturation: 86,
    lightness: { text: 95, background: 20, border: 40 },
  }, // Bright red

  // Represents cautionary states or important warnings without the urgency of errors.
  // **Common UI Usage**:
  // - Warning alerts (e.g., "Unsaved changes")
  // - Notifications about time-sensitive actions
  // - Status indicators (e.g., "Pending")
  warning: {
    hue: 34,
    saturation: 94,
    lightness: { text: 15, background: 85, border: 65 },
  }, // Vivid orange

  // Signifies success, positive feedback, or a completed action, instilling confidence in the user.
  // **Common UI Usage**:
  // - Success alerts (e.g., "Action completed")
  // - Success badges (e.g., "Verified", "Completed")
  // - Indicators for progress completion
  success: {
    hue: 152,
    saturation: 77,
    lightness: { text: 15, background: 85, border: 65 },
  }, // Lush green

  // Used for neutral informational messages, promoting clarity without alarming the user.
  // **Common UI Usage**:
  // - Info alerts (e.g., "FYI: Updates applied")
  // - Helper text or tooltips
  // - Notifications (e.g., "You have 2 unread messages")
  info: {
    hue: 200,
    saturation: 77,
    lightness: { text: 15, background: 85, border: 65 },
  }, // Calm cyan

  // Represents light backgrounds or areas requiring contrast for other elements, providing a clean and minimalistic base.
  // **Common UI Usage**:
  // - Backgrounds for cards, modals, or sections
  // - Placeholder text
  // - Borders or dividers in high-contrast themes
  light: {
    hue: 0,
    saturation: 0,
    lightness: { text: 15, background: 98, border: 70 },
  }, // Pure white

  // A complementary dark shade for creating contrast or grounding lighter UI elements.
  // **Common UI Usage**:
  // - Text on light backgrounds
  // - Dark-themed cards or sections
  // - Toolbars or footers
  dark: {
    hue: 240,
    saturation: 15,
    lightness: { text: 95, background: 15, border: 40 },
  }, // Soft dark gray

  // An attention-grabbing accent color to highlight important elements or encourage engagement.
  // **Common UI Usage**:
  // - Call-to-action highlights (e.g., "Limited Offer")
  // - Highlighted text or icons
  // - Badges (e.g., "Sale", "Promo")
  accent: {
    hue: 50,
    saturation: 94,
    lightness: { text: 15, background: 70, border: 50 },
  }, // Bright yellow

  // Represents less prominent or de-emphasized elements, helping create a balanced and readable design.
  // **Common UI Usage**:
  // - Placeholder text (e.g., "Search...")
  // - Muted button states (e.g., "Disabled")
  // - Backgrounds for less critical components (e.g., tooltips, dropdowns)
  muted: {
    hue: 210,
    saturation: 10,
    lightness: { text: 50, background: 90, border: 70 },
  }, // Subdued gray-blue

  // A vibrant and energetic highlight color used sparingly to add a sense of dynamism and fun.
  // **Common UI Usage**:
  // - Special emphasis on action buttons (e.g., "Upgrade Plan")
  // - Highlights in graphs, charts, or statistics
  // - Special promotional banners or text
  highlight: {
    hue: 280,
    saturation: 80,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Electric purple
} as const

export type TThemeColor = keyof typeof ThemeColorMap

const keyValueMap = Object.entries(ThemeColorMap)
export const themeHueSaturation = keyValueMap
  .map(
    ([key, { hue, saturation, lightness }]) => `#wow-ui .theme-${key} {
  --tch: ${hue};
  --tcs: ${saturation}%;
  --tcl: ${lightness.text}%;
  --bgcl: ${lightness.background}%;
  --bdcl: ${lightness.border}%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}`
  )
  .join('\n')
export const themeLightnessAlpha = ''
// color: white;
