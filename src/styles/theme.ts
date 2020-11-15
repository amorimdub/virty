export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    familyHeader:
      "Satisfy, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.8rem',
      large: '2.4rem',
      xlarge: '4.8rem',
      xxlarge: '6.4rem'
    }
  },
  colors: {
    brand: '#5F249F',
    primary: {
      lightest: '#7935D0',
      light: '#6428AF',
      normal: '#5F249F',
      dark: '#532192',
      darkest: '#4C1F86'
    },
    accent: {
      lightest: '#B1C233',
      light: '#9EAF2E',
      normal: '#8A9E24',
      dark: '#697B20',
      darkest: '#56651A'
    },
    darkGray: {
      light: '#584F65',
      normal: '#443C4E',
      dark: '#322D38'
    },
    lightGray: {
      light: '#E9E6ED',
      normal: '#D6CEE0',
      dark: '#C4BCCE'
    },
    success: {
      light: '#75C466',
      normal: '#55AA44',
      dark: '#3E8C2E'
    },
    danger: {
      light: '#E26262',
      normal: '#CC4444',
      dark: '#B43232'
    },
    warning: {
      light: '#FFDA21',
      normal: '#FFCC11',
      dark: '#F5BC10'
    },
    info: {
      light: '#55ABCD',
      normal: '#4499BB',
      dark: '#3589AB'
    },
    white: '#FAFAFA',
    black: '#0B0314'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '6.4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
