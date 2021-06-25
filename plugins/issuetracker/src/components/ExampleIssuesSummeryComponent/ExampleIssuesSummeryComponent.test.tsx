import React from 'react';
import { render } from '@testing-library/react';
import { ExampleIssuesSummeryComponent } from './ExampleIssuesSummeryComponent';
import { setupServer } from 'msw/node';
import { msw } from '@backstage/test-utils';

describe('ExampleIssuesComponent', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  msw.setupDefaultHandlers(server);

  // setup mock response
  it('should render', async () => {
    const rendered = render(<ExampleIssuesSummeryComponent />);
    expect(await rendered.findByTestId('progress')).toBeInTheDocument();
  });
});
