import React, { useEffect } from 'react';
import GenericReport from './GenericReport';
import { useQuery } from '@apollo/client';
import { GetAllFormsDocument,GetAllFormsQuery, GetAllFormsQueryVariables } from '../../../generated/graphql';
import { Toast } from 'antd-mobile';
import {Empty} from 'antd';
import { PageContainer } from '@ant-design/pro-components';


interface DataType  {
  key: string;
  'Form Date': string;
  Rcn: string;
  'Staff Name': string;
  Shift: string;
  'Risk Level': string;
  Status: string;
  'Applied on': string;
}

 

 const Mydata: DataType[] = [
  {
    key: '1',
    'Form Date': '2021-09-01',
    Rcn: 'RCN-21',
    'Staff Name': 'Ahmed Mohamed',
    Shift: 'Morning',
    'Risk Level': 'High',
    Status: 'Pending',
    'Applied on': '2021-09-01',
    },
    {
    key: '2',
    'Form Date': '2021-09-01',
    Rcn: 'RCN-342',
    'Staff Name': 'Hamed Gasim',
    Shift: 'Morning',
    'Risk Level': 'High',
    Status: 'Pending',
    'Applied on': '2021-09-01',
    },
    {
    key: '3',
    'Form Date': '2021-09-01',
    Rcn: 'RCN-003',
    'Staff Name': 'Mohamed Ahmed',
    Shift: 'Morning',
    'Risk Level': 'High',
    Status: 'Pending',
    'Applied on': '2021-09-01',
    },
];

export const TESTGENERIC = () => {  
  const {
    data: formsData,
    loading: formsLoading,
    error: formsError,
    refetch: refetchForms,
  } = useQuery<GetAllFormsQuery, GetAllFormsQueryVariables>(GetAllFormsDocument, {
    variables: {},
  });
  
  useEffect(() => {
    refetchForms();
  }, [refetchForms]);
  
  if (formsLoading) {

    console.log('loading')
    
  }
  if (formsError) {
    console.log('error')
    Toast.show( 'Error fetching data')
  }
  
  
  const forms = formsData?.getAllForms;
  
  const mappedForms = forms?.map((form,key) => ({
    key: key.toString(),
    'Form Date': String(form?.createdAt),
     Rcn: String(form?.operatorId),
    'Staff Name': String(form?.operator.name),
    Shift: String(form?.shiftId),
    'Risk Level': String(form?.riskLevel),
    // Status: String(form?.),
    'Applied on':  form?.appliedOn,
       
  }));
  
  

  const data: DataType[] | undefined = mappedForms?.map((form,key) => ({
    key: key.toString(),
    'Form Date': String(form?.['Form Date']),
     Rcn: String(form?.Rcn),
    'Staff Name': String(form?.['Staff Name']),
    Shift: String(form?.Shift),
    'Risk Level': String(form?.['Risk Level']),
    Status: String('TODO'),
    'Applied on': form?.['Applied on'],
  }));   

 if (data){
     return <PageContainer title='Fit to Drive Report'>
           <GenericReport<DataType> data={Mydata} rowKey="key" ReportName='Fit to Drive Form Report' />;

     </PageContainer>
     
 } else {
    return <div> <Empty/> </div>
 }
};

export default TESTGENERIC;
