import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import * as colors from '@radix-ui/colors'

type RadixColorScale = { [key: string]: string }
type RadixColors = { [key: string]: RadixColorScale }

// Helper to convert camelCase to kebab-case
const toKebabCase = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

// Generate color variables for both light and dark modes
const generateThemeVariables = () => {
  const lightTheme: Record<string, string> = {}
  const darkTheme: Record<string, string> = {}
  const radixColors = colors as RadixColors

  for (const [key, value] of Object.entries(radixColors)) {
    // Skip dark themes as we'll process them with their light counterparts
    if (key.endsWith('Dark')) continue

    const baseKey = toKebabCase(key)
    const darkKey = `${key}Dark`

    // Process light theme values
    Object.entries(value).forEach(([step, color]) => {
      const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
      lightTheme[colorKey] = color
    })

    // Process dark theme values if they exist
    if (darkKey in radixColors) {
      const darkScale = radixColors[darkKey] as RadixColorScale
      Object.entries(darkScale).forEach(([step, color]) => {
        const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
        darkTheme[colorKey] = color
      })
    }
  }

  return { lightTheme, darkTheme }
}

const { lightTheme, darkTheme } = generateThemeVariables()

export default defineConfig({
  safelist: [
    // Color variations for common utilities
    ...Array.from({ length: 12 }, (_, i) => [
      'tomato',
      'red',
      'ruby',
      'crimson',
      'pink',
      'plum',
      'purple',
      'violet',
      'iris',
      'indigo',
      'blue',
      'cyan',
      'teal',
      'jade',
      'green',
      'grass',
      'orange',
      'brown',
    ].map(color => `text-${color}-${i + 1}`)).flat(),
    // Color variations for common utilities
    ...Array.from({ length: 12 }, (_, i) => [
      `text-red-${i + 1}`,
      `text-blue-${i + 1}`,
      `text-green-${i + 1}`,
      `border-red-${i + 1}`,
      `border-blue-${i + 1}`,
      `border-green-${i + 1}`,
      `bg-red-${i + 1}`,
      `bg-blue-${i + 1}`,
      `bg-green-${i + 1}`,
    ]).flat(),
    // Border utilities
    'border',
    'border-2',
    'rounded',
    // Spacing utilities
    'p-2',
  ],
  shortcuts: [
    ['test-border', 'border-2 border-blue-6'],
    ['test-box', 'bg-red-3 text-red-11 p-2 rounded border-2 border-red-6'],
  ],
  theme: {
    colors: Object.fromEntries(
      Object.entries(colors as RadixColors)
        .filter(([name]) => !name.endsWith('Dark'))
        .map(([name]) => [
          toKebabCase(name),
          Object.fromEntries(
            Array.from({ length: 12 }, (_, i) => [
              i + 1,
              `var(--${toKebabCase(name)}-${i + 1})`,
            ]),
          ),
        ]),
    ),
    fontfamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...existing code...
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
        :root {
          ${Object.entries(lightTheme)
              .map(([key, value]) => `${key}: ${value};`)
              .join('\n          ')}
        }
        
        .dark {
          ${Object.entries(darkTheme)
              .map(([key, value]) => `${key}: ${value};`)
              .join('\n          ')}
        }
      `,
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
