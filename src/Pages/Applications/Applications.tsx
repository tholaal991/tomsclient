import { Button, Select, Space, Table, Modal, Form, Radio, Input, Popconfirm } from "antd"
import  React,{useState} from 'react'
import { PageTitle } from "../../components/pageTitle"
import { ApiOutlined, ArrowDownOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, PlusOutlined, UndoOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"
import { CreateItem } from "./CreateItem"
import { EditApplicant } from "./EditApplicant"





interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
  interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
  }

  interface CollectionEditFormProps {
    EditOpen: boolean;
    onEdit: (values: Values) => void;
    onEditModalCancel: () => void;
  }
  
  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: '80vh'}}
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


  const CollectionEditForm: React.FC<CollectionEditFormProps> = ({
    EditOpen,
    onEdit,
    onEditModalCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: '90vh'}}
        open={EditOpen}
        title="User Details"
        okText="Save Changes"
        cancelText="Cancel"
        onCancel={onEditModalCancel}
        footer={null}
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
        <EditApplicant/>

      </Modal>
    );
  };








export const Applications = () => {
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



    const [data, setData] = useState([
        {id: 'A228952',
        iulaanNo: 'DJA/4568/HUR',
        fullName: 'Ahmed Mohamed',
        appStatus: 'Submitted',
        workflowStatus: 'Open',
        attachments: '3',
    
    }
    ])


    const columns = [
        {
            key: '1',
            title: 'ID Card No',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Iulaan No.',
            dataIndex: 'iulaanNo'
        },
        {
            key: '3',
            title: 'Applicant Full Name',
            dataIndex: 'fullName'
        },
        {
            key: '4',
            title: 'Application Status ',
            dataIndex: 'appStatus'
        }, {
            key: '5',
            title: 'WorkFlow Status',
            dataIndex: 'workflowStatus'
        }
        , {
            key: '6',
            title: 'Attachment',
            dataIndex: 'attachments'
        }
        ,
     {
            key: '13',
            title: 'View More',
            dataIndex: 'actions',
            render: (_ : any, record:any) => (
                     <div>
                       
                      <Button
                      icon = { <EyeOutlined />}
                      style={{marginRight:5, color: "green"}}
                      onClick={ ()=> setEditOpen(true)}
                      title="Process"
                     >See Details</Button>
                   
                     
                     </div>
                     
                     
            )
                  
            

          
        }
    ]

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Applications </PageTitle>

      

        <div style={{display:"flex", justifyContent: "flex-end", marginRight: 20, marginBottom: 20, }}><Search placeholder="Enter consumable details" onSearch={onSearch} style={{width: 400}} 
             allowClear /></div>
            


  <div>
      
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />

 <CollectionEditForm
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
        >


        </Table>

        </div>
       


    )
}
