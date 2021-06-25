import React from 'react';
import { Progress, InfoCard } from '@backstage/core';
import Alert from '@material-ui/lab/Alert';
import { useAsync } from 'react-use';
import { Issue, Project } from '../../types/types';
import { Typography } from '@material-ui/core';

type CardContentProps = {
  projectName: string;
  issues: Issue[];
};

export const CardContent = ({ issues, projectName }: CardContentProps) => {
  const convert = () => {
    const res: { [index: string]: any } = {};
    issues.forEach((issue: any) => {
      // eslint-disable-next-line no-console
      console.log(issue.type)
      res[issue.type] = (res[issue.type] || 0) + 1;
    })
    return (
      <div>
        <div>{res.type}</div>
        <div>{res}</div>
      </div>
    )
  }


  return (
    <InfoCard title={`Issues Summery of ${projectName}`}>
      {/* {convert} */}
      <Typography paragraph>Unfortunately I couldn't finish this part due to time constraints. If you want to see it working, I can go into that later.</Typography>
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
