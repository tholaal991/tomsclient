import { PageTitle } from "../../components/pageTitle"
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    Select,
    Switch,
    Upload,
    Space,
    Row,
    Col,
    Typography
  } from 'antd';
  import React, { useState } from 'react';
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;


  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  
export const EditApplicant: React.FC = () =>{
    const [componentDisabled, setComponentDisabled] = useState<boolean>(false);


    return (
        <div>
           
     <Space style={{display: "flex", flexDirection: "column", minWidth: '70vh'}}>

     <PageTitle> Applicant's Detalis  </PageTitle>
   


     <Form
        labelCol={{ span: 6}}
        wrapperCol={{ span: 25 }}
        layout="horizontal"
        style={{minWidth: '60vh'}}
       
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}
        {/* <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}
        
        <Form.Item label="Full Name">
          <Input />
        </Form.Item>
        <Form.Item label="ID Card Number">
          <Input />
        </Form.Item>

        <Form.Item label="Date Of Birth">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Current Address">
          <Input />
        </Form.Item>
        <Form.Item label="Permanent Address">
          <Input />
        </Form.Item>
        <Form.Item label="Email Address">
          <Input />
        </Form.Item>
        <Form.Item label="Nationality">
          <Input />
        </Form.Item>


        <Form.Item label="Mobile No.*">
          <Input />
        </Form.Item>

        <Form.Item label="Passport Size Upload " valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item>
             <Row>
                 <Col span={12}>

          <Upload>
           <Button icon={<UploadOutlined />}> ID Card </Button>
           </Upload>

                 </Col>

                 <Col span={12}>

<Upload>
           <Button icon={<UploadOutlined />}> CV </Button>
           </Upload>

                 </Col>
             </Row>




        </Form.Item>



        <Form.Item >

<Upload>
   <Button icon={<UploadOutlined />}> Upload </Button>
   </Upload>
</Form.Item>
       



        <Form.Item style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button style={{background: 'linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))' , width: '16vh', height: '6vh', color: 'white'}}> <Typography.Text style={{fontSize: '15px', color: 'white'}}>Save Changes</Typography.Text></Button>
        </Form.Item>

       
       
      </Form>
</Space>
     








        </div>
        
    )
}
  