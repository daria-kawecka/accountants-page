import { AppLayout } from 'containers/AppLayout/AppLayout';
import { Routes } from 'routes/Routes';
import { Theme } from 'theme';

export const App = () => (
  <Theme>
    <AppLayout>
      <Routes />
    </AppLayout>
  </Theme>
);
