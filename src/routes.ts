import { lazy } from 'react';

import Routes from 'constants/routes';

const Home = lazy(() => import('pages/Home'));

const routes = {
  home: {
    label: 'home',
    path: Routes.home,
    component: Home,
  },
};

export default { ...routes };
