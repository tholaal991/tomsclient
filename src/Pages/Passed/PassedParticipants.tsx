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
    InputNumber,
    Typography,
    Popconfirm,
    Select,


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
  score?: number;
  practScore?: number;
  interScore?: number;
}



const originData: DataType[] = [];
for(let i=0; i<46; i++){
  originData.push(
    { 
      key: i,
      id: 'A2222',
      acceptanceStatus: 'Accepted',
       AppStatus: 'Approved',
      fullName: 'Ahmed Tholaal',
      score: i+555,
      practScore: 23,
      interScore: 35,
      
    }
  )
}




interface EditableCellProps extends  React.HTMLAttributes<HTMLElement>{
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: DataType;
  index: number;
  children: React.ReactNode;
}


const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Select options={[
      {value: 'Accepted', label: 'Accepted'},
      {value: 'Rejected', label: 'Rejected'},
      {value: 'Disqualified', label: 'Disqualified'},
      {value: 'Open', label: 'Open'},
      {value: 'Absent', label: 'Absent'},
  
  
  
  ]}/> 
    
   
    
    return (
      <td {...restProps}>
          {
            editing ? (
              <Form.Item
                name={dataIndex}
                style={{margin: 0}}
                rules={
                  [
                    {
                      required: false,
                      message: `Enter ${title}`
                    }
                  ]
                }
              >
                  {inputNode}
              </Form.Item>
            ) : (
              children
            )
          }
      </td>
    )
  }


export const PassedParticipants: React.FC = () =>{
    
   


  const [editing, setEditing] = useState(false);
  const [selectedRowKeys, SetSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [Rejectloading, setRejectLoading] = useState(false);
  const [OpenStatusloading, setOpenStatusLoading] = useState(false);
  const [data, setData] = useState<DataType[]>(originData)
  const [editingKey, setEditingKey] = useState<React.Key>('');


 const [form] = Form.useForm();
  
 const isEditing = (record: DataType) => record.key === editingKey
const edit = (record: Partial<DataType> & {key: React.Key}) => {
  form.setFieldsValue({
    id: '',
      acceptanceStatus: '',
       AppStatus: '',
      fullName: '',
      score: null,
      ...record
  });
  setEditingKey(record.key)
}

const cancel = ()=> {
  setEditingKey('')
}


const save = async (key: React.Key) =>{
   try{
    const row = (await form.validateFields()) as DataType;
    
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1){
      const item = newData[index];
      newData.splice(index,1 , {
        ...item,
        ...row,
      });
      setData(newData);
      setEditingKey('');
    }else{
      newData.push(row);
      setData(newData);
      setEditingKey('');
    }

   }catch (errInfo){
    console.log(`Validate failed:`, errInfo);
   }
};


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



  const columns  = [
      {
   
          title: 'ID Card No',
          dataIndex: 'id'
      },
      {
    
          title: 'Applicant Full Name',
          dataIndex: 'fullName'
      },
      {
      
          title: 'Acceptance Status',
          dataIndex: 'acceptanceStatus',
          editable: true,
         
   
         
          
      },
      {
      
          title: 'Interview Score',
          dataIndex: 'interScore',
          
         
        
         
          
      }
      ,
      {
      
          title: 'Practical Score',
          dataIndex: 'practScore',
         
        
      },
          
     {
          
          title: 'Action',
          dataIndex: 'action',
          render: (_:any,record:DataType) => {
            {
              const editable = isEditing(record);

              return editable ? (
                  <span>
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
                    
                     
                    ></Button>
                    <Typography.Link onClick={()=> save(record.key)} style={{marginRight:8}}>
                      Save
                    </Typography.Link>
                    <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
                        <a>Cancel</a>
                    </Popconfirm>
                  </span>
              ): (
                <Typography.Link disabled={editingKey !== ''} onClick={ ()=> edit(record)}>
                  Edit
                </Typography.Link>
              )

              }
            }

    }
      
      ,
      
   {
       
          title: 'Downloads',
          dataIndex: 'actions',
          render: (_:any , record:any) => (
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


 const mergedColumns = columns.map(
  (col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        inputType: col.dataIndex === 'score' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      })
    }
  }
 )





    return (
        <div>
           
     <Space style={{display: "flex",flexDirection: "column"}}>

     <PageTitle> Interview Page</PageTitle>
      
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


     
    <Form form={form} component={false} >
        <Table
        components={
          {
            body:{
              cell: EditableCell
            }
          }
        }
        bordered
        columns={mergedColumns}
        pagination ={
          {
            onChange: cancel,
          }
        }
        dataSource={data}
        style={{minWidth: '110vh', marginBottom: '20vh',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        rowSelection={rowSelection}
        >
          
      </Table>
      
    </Form>
   
</Space>
     

        </div>
        
    )
}
  