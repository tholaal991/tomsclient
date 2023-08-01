import { Button, Select, Space, Table, Modal, Form, Radio, Input, Popconfirm } from "antd"
import  React,{useState} from 'react'
import { PageTitle } from "../../components/pageTitle"
import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeFilled, EyeInvisibleTwoTone, PlusOutlined, UndoOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"
import { CreateItem } from "./CreateItem"
import { SeeIulaanParticipants } from "./SeeIulaanParticipants"
import type { ColumnsType } from 'antd/es/table';





interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
  interface IulaanProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
  }

  interface SeeIulaanParticipantsProps {
    EditOpen: boolean;
    onEdit: (values: Values) => void;
    onEditModalCancel: () => void;
  }
  
  const CollectionCreateForm: React.FC<IulaanProps> = ({
    open,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: '200vh'}}
        open={open}
        title="Create New Consumable Item"
        okText="Create Item"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <CreateItem/>

      </Modal>
    );
  };


  const SeeIulaanChildTable: React.FC<SeeIulaanParticipantsProps> = ({
    EditOpen,
    onEdit,
    onEditModalCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: '130vh'}}
        open={EditOpen}
        title="Applicants"
        okText="ok"
        onCancel={onEditModalCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onEdit(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <SeeIulaanParticipants/>

      </Modal>
    );
  };





export const Shortlist = () => {
    const [open, setOpen] = useState(false);
    const [EditOpen, setEditOpen] = useState(false);

   
    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
      };


    const onEdit = (values: any) => {
      console.log('Recieved values of form: ', values)
      setEditOpen(false);
    }





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






    const [data, setData] = useState([
        {iulaanNo: 'HR/5865/1456',
        date: '25 June 2023',
        description: 'Procurement Officer Post',
        status: 'Open for Submission',
        deadline: '01 July 2023',
        applied: '25',
        workflowStatus: 'open'
    
    }
    ])


    const columns = [
        {
            key: '1',
            title: 'Iulaan No.',
            dataIndex: 'iulaanNo'
        },
        {
            key: '2',
            title: 'Date',
            dataIndex: 'date'
        },
        {
            key: '3',
            title: 'Description',
            dataIndex: 'description'
        },
        {
            key: '4',
            title: 'Status ',
            dataIndex: 'status',
            filters: [
              {
                text: 'Open For Submission',
                value: 'open',
              },
              {
                text: 'Closed For Submission',
                value: 'closed',
              },
             
            ]
        }, {
            key: '5',
            title: 'Workflow Status',
            dataIndex: 'workflowStatus',
            filters: [
              {
                text: 'open',
                value: 'open',
              }
              ,
              {
                text: 'filtered',
                value: 'filtered',
              }
              ,
              {
                text: 'practical',
                value: 'practical',
              },
              {
                text: 'Interview',
                value: 'Interview',
              },
              {
                text: 'passed',
                value: 'passed',
              },
              {
                text: 'Finished',
                value: 'finished',
              },
            ]
        }
        , {
            key: '5',
            title: 'Deadline',
            dataIndex: 'deadline'
        }
        ,{
          key: '5',
          title: 'Applied',
          dataIndex: 'applied'
      }, {
        key: '13',
        title: 'View More',
        dataIndex: 'actions',
        render: (_ : any, record:any) => (
                 <div>
                   
                  <Button
                  icon = { <EyeFilled />}
                  style={{marginRight:5, color: "green"}}
                  onClick={ ()=> setEditOpen(true)}
                  title="Process"
                 >See Details</Button>
               
                 
                 </div>
                 
                 
        )}
      
     
    ]

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Iulaan </PageTitle>

      

        <div style={{display:"flex", justifyContent: "flex-end", marginRight: 20, marginBottom: 10}}><Search placeholder="Enter consumable details" onSearch={onSearch} style={{width: 400}} 
             allowClear /></div>
            


  <div>
      
  <div style={{marginBottom: 16, }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Close Submission
        </Button>
        <Button type="primary" onClick={startReject} disabled={!hasSelected} loading={Rejectloading} style={{marginLeft: '10px', background: !hasSelected ? '':'red'}}>
          Delete Iulaan
        </Button>
        <Button type="primary" onClick={startOpenStatus} disabled={!hasSelected} loading={OpenStatusloading} style={{marginLeft: '10px', background: !hasSelected ? '':'green'}}>
          Open Submission
        </Button>


        <span style={{marginLeft: '10px'}}>
          {hasSelected ? `Selected ${selectedRowKeys.length} applicant(s)` : ''}
        </span>
      </div>   


 <SeeIulaanChildTable
        EditOpen={EditOpen}
        onEdit={onEdit}
        onEditModalCancel={() => {
          setEditOpen(false);
        }}
        
      /> 

    </div>


        

        <Table
        columns={columns}
        dataSource={data}
        style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        rowSelection={rowSelection}
        
        >


        </Table>

        </div>
       


    )
}
