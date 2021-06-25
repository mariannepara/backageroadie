import React from 'react';
import { Progress, InfoCard } from '@backstage/core';
import Alert from '@material-ui/lab/Alert';
import { useAsync } from 'react-use';
import { Issue, Project } from '../../types/types';

type CardContentProps = {
  projectName: string;
  issues: Issue[];
};

export const CardContent = ({ issues, projectName }: CardContentProps) => {

  return (
    <InfoCard title={`Issues Summery of ${projectName}`}>
      {issues.length}
    </InfoCard>
  );
};

export const ExampleIssuesSummeryComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<Project> => {
    const response = await fetch('http://localhost:7000/api/ticketing/projects/1');
    return await response.json();
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <CardContent issues={value?.issues || []} projectName={value?.name || ''} />;
};
