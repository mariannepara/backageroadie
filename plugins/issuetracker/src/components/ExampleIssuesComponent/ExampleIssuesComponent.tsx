import React from 'react';
import { Table, TableColumn, Progress, TableFilter } from '@backstage/core';
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
    { title: 'Title', field: 'title' },
    { title: 'Description', field: 'description' },
    { title: 'Status', field: 'status' },
    { title: 'Assigned to', field: 'assigned_to' },
  ];

  const filters: TableFilter[] = [
    {
      column: 'Type',
      type: 'multiple-select',
    },
    {
      column: 'Status',
      type: 'checkbox-tree',
    },
  ];

  const data = issues.map(issue => {
    return {
      type: issue.type,
      title: issue.title,
      description: issue.description,
      status: issue.status,
      assigned_to: issue.assigned_to,
    };
  });

  return (
    <Table
      title={projectName}
      options={{ search: false, paging: false, padding: 'dense' }}
      columns={columns}
      filters={filters}
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
