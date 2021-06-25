import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { issuetrackerPlugin, IssuetrackerPage } from '../src/plugin';

createDevApp()
  .registerPlugin(issuetrackerPlugin)
  .addPage({
    element: <IssuetrackerPage />,
    title: 'Root Page',
  })
  .render();
