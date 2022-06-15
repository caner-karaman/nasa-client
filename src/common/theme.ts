import { DefaultTheme } from "styled-components";


const theme: DefaultTheme = {
  color: {
    primary: '#A73636',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#C4C4C4',
    lightGray2: '#EAEAEA',
    gray: '#515151',
    darkGray: '#CCCCCC',
    secondary: '#1D7CDB',
    error: '#F72D2D'
  }
}

const sizes = {
  SMALL_SCREEN: '1025px',
  TABLET: '769px',
  MOBILE: '600px',
}

const device = {
  desktop: `(max-width: ${sizes.SMALL_SCREEN})`,
  tablet: `(max-width: ${sizes.TABLET})`,
  mobile: `(max-width: ${sizes.MOBILE})`,
}

export {theme, device, sizes};