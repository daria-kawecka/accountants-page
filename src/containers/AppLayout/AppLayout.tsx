import { FC, PropsWithChildren } from 'react';

import { AppContainer } from './styles';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};
