import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { ExampleIssuesComponent } from '../ExampleIssuesComponent';
import { ExampleIssuesSummeryComponent } from '../ExampleIssuesSummeryComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to issuetracker!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <SupportButton>Manage all issues in one place.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <ExampleIssuesSummeryComponent />
        </Grid>
        <Grid item>
          <ExampleIssuesComponent />
        </Grid>
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);


