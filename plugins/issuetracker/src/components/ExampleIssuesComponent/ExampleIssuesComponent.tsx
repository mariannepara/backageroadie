import React from 'react';
import { Table, TableColumn, Progress } from '@backstage/core';
import Alert from '@material-ui/lab/Alert';
import { useAsync } from 'react-use';
import { Issue, Project } from '../../types/types';

type DenseTableProps = {
  projectName: string;
  issues: Issue[];
};

export const DenseTable = ({ issues, projectName }: DenseTableProps) => {

  const columns: TableColumn[] = [
    { title: 'Type', field: 'type' },
    { title: 'title', field: 'title' },
  ];

  // id: number;
  // type: string;
  // title: string;
  // description: string;
  // status: string;
  // assigned_to: string;
  // created_by: string;
  // created_at: string;

  const data = issues.map(issue => {
    return {
      type: issue.type,
      title: issue.title,
    };
  });

  return (
    <Table
      title={projectName}
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const ExampleIssuesComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<Project> => {
    const response = await fetch('http://localhost:7000/api/ticketing/projects/1'); 

    return await response.json();
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable issues={value?.issues || []} projectName={value?.name || ''} />;
};
