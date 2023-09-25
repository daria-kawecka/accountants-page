export interface Colors {
  black: string;
  white: string;
  grey200: string;
  grey800: string;
  blue: string;
  lightBlue: string;
  alphaBlack: string;
}

export interface FontSizes {
  xSmall: string;
  small: string;
  medium: string;
  large: string;
}

export interface FontWeights {
  bold: number;
  normal: number;
  light: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizes;
  }
}
