






import { useEffect, useState } from "react";
import { GetAllFormsDocument, GetAllFormsQuery, GetAllFormsQueryVariables } from "../../generated/graphql";
import { useQuery } from "@apollo/client";
import { ModalForm, PageContainer } from "@ant-design/pro-components";
import GenericReport from "./Report/GenericReport";
import { Button, Empty, Toast } from "antd-mobile";
import { Select } from "antd";
import FTDModalForm from "../FTDModalForm";
import {  Modal } from 'antd';



import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const AddIcharge: React.FC = () => {

 const [visibleModalForm, setVisibleModalForm]= useState(false);
 const [open, setOpen] = useState(false);
 const [confirmLoading, setConfirmLoading] = useState(false);
 const [modalText, setModalText] = useState('Content of the modal');


 const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };


    const  selectData = [

        {
            value: '1',
            label: 'Not Identified',
        },
        {
            value: '2',
            label: 'Closed',
        },
        {
            value: '3',
            label: 'Communicated',
        },
        {
            value: '4',
            label: 'Identified',
        },
        {
            value: '5',
            label: 'Resolved',
        },
        {
            value: '6',
            label: 'Cancelled',
        },
    ]
    







    return (

        <PageContainer title='Manage Shift'>
  




      <Button onClick={showModal} >
        Add Incharges
       </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
     
      <FTDModalForm visibleModalForm={visibleModalForm}  modalClose={()=> setVisibleModalForm(false)} />

        

        <Button onClick={()=> setVisibleModalForm(true)}>Add Incharge</Button>

<Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
        options={selectData} />
        
        
        <Table dataSource={data}>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={(tags: string[]) => (
                    <>
                        {tags.map((tag) => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )} />
            <Column
                title="Action"
                key="action"
                render={(_: any, record: DataType) => (
                        <Button size="small"> Delete </Button>
                )} />
        </Table>

        </PageContainer>

    )
    
};




export default AddIcharge;





  
// //   const options: SelectProps['options'] = [];


// // for (let i = 10; i < 36; i++) {
// //   options.push({
// //     value: i.toString(36) + i,
// //     label: i.toString(36) + i,
// //   });
// // }
    

// // const handleChange = (value: string) => {
// //   Toast.show(`selected ${value}`);
// // };

// // export const  AddIcharge = () => {
// //     return (
// //         <div>
// //         <h1>hello</h1>
// //         </div>
// //     )
// //     }
