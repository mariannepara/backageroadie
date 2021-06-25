import React from 'react';
import { Table, TableColumn, Progress } from '@backstage/core';
import Alert from '@material-ui/lab/Alert';
import { useAsync } from 'react-use';
import { Issue } from '../../types/types';

type DenseTableProps = {
  issues: Issue[];
};

export const DenseTable = ({ issues }: DenseTableProps) => {

  const columns: TableColumn[] = [
    { title: 'Assigned To', field: 'assignedTo' },
  ];

  const data = issues.map(issue => {
    return {
      assignedTo: issue.assigned_to,
    };
  });

  return (
    <Table
      title="Project Issues"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const ExampleIssuesComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<Issue[]> => {
    const response = await fetch('http://localhost:7000/api/ticketing/projects/1');
    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data.issues);
    return data.issues;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable issues={value || []} />;
};
