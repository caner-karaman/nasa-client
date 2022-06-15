import 'styled-components';

interface IColor {
  primary: string;
  secondary: string;
  white: string;
  darkGray: string;
  black: string;
  lightGray: string;
  lightGray2: string;
  gray: string;
  error: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: IColor;
  }
}