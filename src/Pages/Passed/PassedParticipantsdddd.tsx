import { PageTitle } from "../../components/pageTitle"
import { CheckOutlined, CloseOutlined, DownloadOutlined, } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Space,
    Table
  } from 'antd';
  import React, { useState } from 'react';
  import type { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";






interface DataType {
  key: React.Key;
  id: string;
  AppStatus: string;
  fullName: string;
  acceptanceStatus: string;
}

const columns: ColumnsType<DataType> = [
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
    
      title: 'Acceptance Status',
      dataIndex: 'acceptanceStatus'
  }
  
  ,
  {
    
      title: 'Score',
      dataIndex: 'acceptanceStatus'
  }
  
  ,
{
      
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

                <Button
                icon = { <CheckOutlined />}
                style={{marginRight:5, color: ""}}
                // onClick={ ()=> setEditOpen(true)}
                
               ></Button>

                <Button
                icon = { <CloseOutlined />}
                style={{marginRight:5, color: "red"}}
                // onClick={ ()=> setEditOpen(true)}
                
               ></Button>
               </div>
      )
  }
]


const data: DataType[] = [];
for(let i=0; i<46; i++){
  data.push(
    { 
      key: i,
      id: 'A2222',
      acceptanceStatus: 'Accepted',
      AppStatus: 'Approved',
      fullName: 'Ahmed Tholaal'
    }
  )
}









export const PassedParticipantsxx: React.FC = () =>{
    
   



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

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Rows',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => {
              if (index % 2 !==0){
                return false;
              }
              return true;
            },
          );
          SetSelectedRowKeys(newSelectedRowKeys)
        },
      },
    ]
  };
  const hasSelected = selectedRowKeys.length > 0;






  const columns = [
      {
          key: '1',
          title: 'ID Card No',
          dataIndex: 'id'
      },
      {
          key: '3',
          title: 'Applicant Full Name',
          dataIndex: 'fullName'
      },
      {
          key: '4',
          title: 'Application Status ',
          dataIndex: 'AppStatus'
      }, 
      {
          key: '6',
          title: 'Acceptance Status',
          dataIndex: 'acceptanceStatus'
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

                    <Button
                    icon = { <CheckOutlined />}
                    style={{marginRight:5, color: ""}}
                    // onClick={ ()=> setEditOpen(true)}
                    
                   ></Button>

                    <Button
                    icon = { <CloseOutlined />}
                    style={{marginRight:5, color: "red"}}
                    // onClick={ ()=> setEditOpen(true)}
                    
                   ></Button>
                   </div>
          )
      }
  ]

    return (
        <div>
           
     <Space style={{display: "flex",flexDirection: "column"}}>

     <PageTitle> Passed List</PageTitle>
      
     <div style={{marginBottom: 16, marginLeft: '-530px'}}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Export as a List
        </Button>
        <Button type="primary" onClick={startReject} disabled={!hasSelected} loading={Rejectloading} style={{marginLeft: '10px', background: !hasSelected ? '':'red'}}>
          Reject
        </Button>
        <Button type="primary" onClick={startOpenStatus} disabled={!hasSelected} loading={OpenStatusloading} style={{marginLeft: '10px', background: !hasSelected ? '':'green'}}>
          Open Status
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
      
</Space>
     

        </div>
        
    )
}
  