import { PageTitle } from "../../components/pageTitle"
import { CheckOutlined, CloseOutlined, DownloadOutlined, } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Space,
    Switch,
    Table,
    Form,
    Input,


  } from 'antd';
  import React, { useState } from 'react';
  import type { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";






interface DataType extends React.HTMLAttributes<HTMLElement> {
  key: React.Key;
  id: string;
  AppStatus: string;
  fullName: string;
  acceptanceStatus: string;
  score: number
}



const data: DataType[] = [];
for(let i=0; i<46; i++){
  data.push(
    { 
      key: i,
      id: 'A2222',
      acceptanceStatus: 'Accepted',
       AppStatus: 'Approved',
      fullName: 'Ahmed Tholaal',
      score: i+555,
      
    }
  )
}










export const PracticalParticipants: React.FC = () =>{
    
   


  const [editing, setEditing] = useState(false);
  const [selectedRowKeys, SetSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [Rejectloading, setRejectLoading] = useState(false);
  const [OpenStatusloading, setOpenStatusLoading] = useState(false);
  const [dataSource, setDataSource] = useState<DataType[]>()
  const [editingRow, setEditingRow] = useState<React.Key>();

 const [form] = Form.useForm();
  
  setDataSource(data)

 const onSwitchedEdit = () => {
   if (editing === true) {
     setEditing(false)
   } else{
    setEditing(true)
   }
 }

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


 const  onEditButtonClicked =(val: number)=>{
    form.setFieldsValue({
      score: val
    })
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
          dataIndex: 'acceptanceStatus',
          render: (text,record)=> <a>hi</a>
          
      },{
        title: 'kakkudi',
        dataIndex: 'kakkudi'
      }
      ,
      {
      
          title: 'Score',
          dataIndex: 'score',
          render: (text,record) => {
            {
             if (editingRow === record.key && editing === true){
              return(
               
                  < Form.Item name="score"   rules={[
                     {
                       required: true,
                       message: 'Enter Score'
                     }
                   ]}>
                       <Input placeholder="Enter Score"/>
                   </Form.Item>
                
                    
              )
             } else {
              return (<p>{text}</p>)
             }
             }
 
          }
          
      }
      ,
      {
          
          title: 'Action',
          dataIndex: 'action',
        
          render: (text, record) => {

            // {
            //   if(editingRow === record.key){
            //     return (<Form.Item name="score" rules={[
            //       {
            //         required: true,
            //         message: 'Enter Score'
            //       }
            //     ]}>
            //         <Input placeholder="Enter Score"/>
            //     </Form.Item>)
                
            //   }else {
            //     return <p>{text}</p>;
            //   }
            // }
                
             return (
               <div>
                 
            
          
{                     
                      editing === true ? 
                       <>  
                       
                       
                       
                       <Button
                      icon = { <CheckOutlined />}
                      type="link"
        
                      style={{marginRight:5, color: ""}}
                       onClick={ ()=> console.log(record.score)}
                      
                     ></Button>  <Button
                     type="link"
                     icon = { <CloseOutlined />}
                     style={{marginRight:5, color: "red"}}
                     // onClick={ ()=> setEditOpen(true)}
                    
                     
                    ></Button><Button
                   type="link"
                   
                    onClick={ ()=> {setEditingRow(record.key);
                      onEditButtonClicked(record.score)
                    }
                        
                      
                                                              }
                    
                   
                  >Edit</Button>
                  <Button type="link" htmlType="submit" > Save </Button>
                                                              
                  </> : null
                    
                    }
              </div>
             )
             
          
      }
    
    }
      
      ,
      
   {
       
          title: 'Downloads',
          dataIndex: 'actions',
          render: (_ , record) => (
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






    return (
        <div>
           
     <Space style={{display: "flex",flexDirection: "column"}}>

     <PageTitle> Practical List</PageTitle>
      
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

        <label style={{marginLeft: '20px', paddingRight: '10px', fontWeight: 'bold'}}>Edit</label><Switch title="Edit" onChange={onSwitchedEdit}/>

        <span style={{marginLeft: '10px'}}>
          {hasSelected ? `Selected ${selectedRowKeys.length} applicant(s)` : ''}
        </span>
        
      </div>   


     
    <Form form={form} >
        <Table
        columns={columns}
        dataSource={dataSource}
        style={{minWidth: '110vh', marginBottom: '20vh',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        rowSelection={rowSelection}
        >
          
      </Table>
      
    </Form>
   
</Space>
     

        </div>
        
    )
}
  