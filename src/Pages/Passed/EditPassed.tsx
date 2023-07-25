import { PageTitle } from "../../components/pageTitle"
import { PlusOutlined } from '@ant-design/icons';
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
    Space
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

  
export const EditPassed: React.FC = () =>{
    const [componentDisabled, setComponentDisabled] = useState<boolean>(false);


    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select style={{ width: 70}}
              options={[
                {value: 'MVR', label:'ރ'}
              ]}
            >
                    
            </Select>
        </Form.Item>
    )


    return (
        <div>
           
     <Space style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>

     <PageTitle> Edit Item  </PageTitle>
   


      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600, minWidth: "70vh"}}
      >


<Form.Item label="Company">
          <Select>
            <Select.Option value="company">Demo</Select.Option>
          </Select>
 </Form.Item>

 <Form.Item label="Item Name">
          <Input />
</Form.Item>

<Form.Item label="Category">
          <Select>
            <Select.Option value="category">Demo</Select.Option>
          </Select>
 </Form.Item>

<Form.Item label="Brand">
          <Select>
            <Select.Option value="brand">Demo</Select.Option>
          </Select>
 </Form.Item>

<Form.Item label="Location">
          <Select>
            <Select.Option value="location">Demo</Select.Option>
          </Select>
 </Form.Item>

 <Form.Item label="Model No.">
            <Input/>
 </Form.Item>

 <Form.Item label="Item No.">
       <Input/>
 </Form.Item>

 <Form.Item label="Order No.">
       <Input/>
 </Form.Item>

 <Form.Item label="Purchase Date">
    <DatePicker />
 </Form.Item>

<Form.Item label="Purchase Cost">
    <Input addonAfter={suffixSelector} style={{width:"60%"}}/>
</Form.Item>

 <Form.Item  label="Quantity">
    <Input/>
 </Form.Item>

<Form.Item label="Min QTY">
    <Input/>
</Form.Item>

<Form.Item label="Notes">
    <TextArea rows={3} />
</Form.Item>

<Form.Item label="Activate Item?" valuePropName="activateItem">
    <Switch/>
</Form.Item>

<Form.Item label="Can Adjust" valuePropName="adjust">
    <Checkbox>Postive</Checkbox>
    <Checkbox>Negative</Checkbox>
</Form.Item>

<Form.Item label="Upload Image" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="" listType="picture-card">
                <div>
                    <PlusOutlined/>
                    <div style={{marginTop: 8}}> Upload Item Image</div>
                </div>
            </Upload>
</Form.Item>

{/* <Form.Item style={{display: "flex",justifyContent: "center", height: 50}}>
     <Button htmlType="submit" style={{display: "inline-block", paddingInline: 40,height: 50, }}> Create Item </Button>
</Form.Item> */}

</Form>
</Space>
     








        </div>
        
    )
}
  