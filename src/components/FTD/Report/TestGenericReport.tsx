import React from 'react';
import GenericReport from './GenericReport';

interface DataType {
  key: string;
  'Form Date': string;
  Rcn: string;
  'Staff Name': string;
  Shift: string;
  'Risk Level': string;
  Status: string;
  'Applied on': string;
}

 const data: DataType[] = [
  {
    key: '1',
    'Form Date': '2021-09-01',
    Rcn: 'RCN-001',
    'Staff Name': 'John Doe',
    Shift: 'Morning',
    'Risk Level': 'High',
    Status: 'Pending',
    'Applied on': '2021-09-01',
    },
    {
    key: '2',
    'Form Date': '2021-09-01',
    Rcn: 'RCN-002',
    'Staff Name': 'John Doe',
    Shift: 'Morning',
    'Risk Level': 'High',
    Status: 'Pending',
    'Applied on': '2021-09-01',
    },
    {
    key: '3',
    'Form Date': '2021-09-01',
    Rcn: 'RCN-003',
    'Staff Name': 'John Doe',
    Shift: 'Morning',
    'Risk Level': 'High',
    Status: 'Pending',
    'Applied on': '2021-09-01',
    },
];

const TESTGENERIC = () => {  

  return <GenericReport<DataType> data={data} rowKey="key" ReportName='Fit to Drive Form Report' />;
};

export default TESTGENERIC;
