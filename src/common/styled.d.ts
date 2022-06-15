import 'styled-components';

interface IColor {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  lightGray: string;
  lightGray2: string;
  gray: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: IColor;
  }
}