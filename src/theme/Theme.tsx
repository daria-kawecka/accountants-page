import { FC, PropsWithChildren } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import colors from './colors';
import fontSizes from './fontSizes';
import GlobalStyles from './global';

const theme: DefaultTheme = {
  colors,
  fontSizes,
};

export const Theme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
