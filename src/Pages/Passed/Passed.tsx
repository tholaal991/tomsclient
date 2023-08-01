import { Button, Select, Space, Table, Modal, Form, Radio, Input, Popconfirm } from "antd"
import  React,{useState} from 'react'
import { PageTitle } from "../../components/pageTitle"
import { ArrowRightOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined, SettingOutlined, UndoOutlined, UserAddOutlined, UserOutlined, UserSwitchOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"
import { PassedParticipants } from "./PassedParticipants" 





interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
 
  interface CollectionEditFormProps {
    EditOpen: boolean;
    onEdit: (values: Values) => void;
    onEditModalCancel: () => void;
  }
  



  const CollectionEditForm: React.FC<CollectionEditFormProps> = ({
    EditOpen,
    onEdit,
    onEditModalCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: '125vh'}}
        open={EditOpen}
        title="Filtered"
        okText="OK"
        cancelText="Cancel"
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
        <PassedParticipants   />

      </Modal>
    );
  };








export const Passed = () => {
    const [open, setOpen] = useState(false);
    const [EditOpen, setEditOpen] = useState(false);


    const onEdit = (values: any) => {
      console.log('Recieved values of form: ', values)
      setEditOpen(false);
    }



    const [data, setData] = useState([
        {id: '1',
        category: 'test category',
        model: 'tesla',
        item: 'Ts-001',
        total: '233',
        remaining: '3545',
    
    }
    ])


    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Iulaan No.',
            dataIndex: 'category'
        },
        {
            key: '3',
            title: 'No. Of Applicants',
            dataIndex: 'model'
        },
        {
            key: '4',
            title: 'Status ',
            dataIndex: 'item'
        }, {
            key: '5',
            title: 'Attended',
            dataIndex: 'total'
        }
        , {
            key: '6',
            title: 'Remaining',
            dataIndex: 'remaining'
        } 
        , {
            key: '',
            title: 'Remaining',
            dataIndex: 'remaining'
        } ,
     {
            key: '13',
            title: 'Actions',
            dataIndex: 'actions',
            render: (_ : any, record:any) => (
                     <div>
                        <Popconfirm   title="Are you sure reopen workflow?" okText="Yes" cancelText="No">   <Button icon ={<UndoOutlined />
                    } style={{color: "red"}} 
                      onClick={()=> {console.log("You clicked delete Button! ")}}
                    >Send Back</Button> </Popconfirm>
                                             <span />
                      <Button
                      icon = { <UsergroupAddOutlined />}
                      style={{marginRight:5, }}
                      onClick={ ()=> setEditOpen(true)}
                      title="Process"
                     > Process List</Button>
                      <Button
                      icon = { <ArrowRightOutlined />}
                      style={{marginRight:5, color: "green"}}
                      // onClick={ ()=> setEditOpen(true)}
                      title="Send to Practical"
                     >Send To Practical</Button>
                   
                     
                     </div>
                     
                     
            )
                  
            

          
        }
    ]

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Final List </PageTitle>

      

        <div style={{display:"flex", justifyContent: "flex-end", marginRight: 20, marginBottom: 10}}><Search placeholder="Enter consumable details" onSearch={onSearch} style={{width: 400}} 
             allowClear /></div>
            


  <div>
      
     

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
