
const layoutSizes = {
    desktop: '1440px',
    laptop: '1024px',
    mobile: '375px',
}

export const theme = {
  colors: {
    primary: 'hsl(35, 77%, 62%)',
    secondary: 'hsl(5, 85%, 63%)',
    offWhite: 'hsl(36, 100%, 99%)',
    grayishBlue: 'hsl(233, 8%, 79%)',
    darkGrayishBlue: 'hsl(236, 13%, 42%)',
    veryDarkBlue: 'hsl(240, 100%, 5%)'
  },
  fonts: {
    mainFont: {
      font: 'Inter, sans-serif;',
      weights: {
        400: '400',
        700: '700',
        800: '800',
      }
    },
    sizes: {
      base: '15',
      s: 16,
      m: '22',
      l: '32'
    }
  },
  layout: {
    sizes: layoutSizes,
    queries: {
      laptop: `(min-width: ${layoutSizes.laptop})`,
      desktop: `(min-width: ${layoutSizes.desktop})`,
    },
    spaces: {
      xs: '16px',
      s: '22px',
      m: '28px',
      l: '32px',
      xl: '64px',
    }
  }
}

export const calcFontToRem = (fontsize) => {
  return `calc(${fontsize} / ${theme.fonts.sizes.base} * 1rem)`
}