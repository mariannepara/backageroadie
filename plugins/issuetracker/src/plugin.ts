import { createPlugin, createRoutableExtension } from '@backstage/core';

import { rootRouteRef } from './routes';

export const issuetrackerPlugin = createPlugin({
  id: 'issuetracker',
  routes: {
    root: rootRouteRef,
  },
});

export const IssuetrackerPage = issuetrackerPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
