import { PageTitle } from "../../components/pageTitle"
import { DownloadOutlined, } from '@ant-design/icons';
import {
    Button,
    Space,
    Table
  } from 'antd';
  import React, { useState } from 'react';
  import type { ColumnsType } from "antd/es/table";






  interface DataType {
    key: React.Key;
    Id: string;
    fullName: string;
    AppStatus: string;
    workflowstatus: string;
  }






  

  const columns: ColumnsType<DataType>  = [
    {
              title: 'ID Card No',
        dataIndex: 'id'
    },
    {
            title: 'Applicant Full Name',
        dataIndex: 'fullName'
    },
    {
                 title: 'Application Status ',
        dataIndex: 'AppStatus'
    }, 
    {
        title: 'Workflow Status ',
        dataIndex: 'workflowstatus'
    }
    
    ,
 {
        key: '13',
        title: 'Downloads',
        dataIndex: 'actions',
        render: (_ : any, record:any) => (
                 <div>
                  <Button
                  icon = { <DownloadOutlined />}
                  style={{marginRight:5, color: "green"}}
                  // onClick={ ()=> setEditOpen(true)}
                  title="Process"
                 >Attachements</Button>
                 </div>
        )
    }
]


const data: DataType[]=[];
for (let i=0; i < 46; i++){
  data.push({
   key: i,
   Id: 'A280684',
   fullName: 'Ahmed Mohamed',
   AppStatus: 'submitted',
   workflowstatus: 'Open',
  })
}

  
export const SeeIulaanParticipants: React.FC = () =>{
 
   




  const [selectedRowKeys, SetSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [Rejectloading, setRejectLoading] = useState(false);
  const [OpenStatusloading, setOpenStatusLoading] = useState(false);


  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      SetSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const startReject = () => {
    setRejectLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      SetSelectedRowKeys([]);
      setRejectLoading(false);
    }, 1000);
  };
  const startOpenStatus = () => {
    setOpenStatusLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      SetSelectedRowKeys([]);
      setOpenStatusLoading(false);
    }, 1000);
  };


  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    SetSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;








    return (
        <div>
           
     

     <PageTitle> Applicants List</PageTitle>
      
     <div style={{marginBottom: 16, }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Approve Application
        </Button>
        <Button type="primary" onClick={startReject} disabled={!hasSelected} loading={Rejectloading} style={{marginLeft: '10px', background: !hasSelected ? '':'red'}}>
          Reject
        </Button>
        <Button type="primary" onClick={startOpenStatus} disabled={!hasSelected} loading={OpenStatusloading} style={{marginLeft: '10px', background: !hasSelected ? '':'green'}}>
          Open Status
        </Button>
        <Button type="primary" onClick={startOpenStatus} disabled={!hasSelected} loading={OpenStatusloading} style={{justifyContent: 'center',marginLeft: '10px', background: !hasSelected ? '':'green'}}>
          Send List to Practical
        </Button>


        <span style={{marginLeft: '10px'}}>
          {hasSelected ? `Selected ${selectedRowKeys.length} applicant(s)` : ''}
        </span>
      </div>   


     <Table
        columns={columns}
        dataSource={data}
        style={{minWidth: '110vh', marginBottom: '20vh',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        rowSelection={rowSelection}
        >

      </Table>
      

     

        </div>
        
    )
}
  