
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message , Select} from 'antd';
import { title } from 'process';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

  const names = [ 'John', 'Paul', 'George', 'Ringo' ];

interface FTDModalFormProps  {
    visibleModalForm?: boolean;
    setVisibleModalForm?: (visibleModalForm: boolean) => boolean;
    modalClose?: () => void;

}


export default ({visibleModalForm,modalClose}: FTDModalFormProps) => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
       
      title="Click to Add Incharge"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          Add Incharge
        </Button>
        
      }

            
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => modalClose,
        
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('Good job');
        return true;
      }}
    >
     

      <ProForm.Group>
        <ProFormSelect name="name" placeholder={'select Incharge'}  tooltip={false} label="Name" width="md" options={[...names]}/>
        {/* <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
        options={selectData} />
         */}
      </ProForm.Group>
       
    
    </ModalForm>
  );
};