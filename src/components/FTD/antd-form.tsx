import React, { useState } from 'react';
import { Card, Typography, message, InputNumber, Radio,Form, Button, Input, Checkbox } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {  Divider, Space, Tag, Toast,  } from 'antd-mobile';
import { useMutation, useQuery } from '@apollo/client';
import { CreateFtdformInput, UpdateFtdformDocument, UpdateFtdformInput, UpdateFtdformMutation, UpdateFtdformMutationVariables } from '../../generated/graphql';
const { Paragraph } = Typography;

export const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const AntdFTDForm = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [form] = Form.useForm();
const [medicineTaking, setMedicineTaking] = useState(false);

const [updateFtdForm, {error}] = useMutation<UpdateFtdformMutation, UpdateFtdformMutationVariables>(UpdateFtdformDocument)



const handleupdateFTDForm = async (updateFormInputx: UpdateFtdformInput) => {
    console.debug('handleUPDateformcalled')
    await updateFtdForm({variables: {updateFtdformInput: updateFormInputx}})
}

  const navigate = useNavigate();

  const handleSubmit =  (values: UpdateFtdformInput) => {
    console.log('Form data:', values);
  
    const updateForm: UpdateFtdformInput = {
      id: values.id,
      forty_eight_hour_score: values.forty_eight_hour_score,
      twenty_four_hour_score: values.twenty_four_hour_score,
      taking_medicine_score: values.taking_medicine_score,
      good_health_score: values.good_health_score,
      approval_status: 2,
    }
    handleupdateFTDForm(updateForm) 
    console.log('update form data:', updateForm)
    console.log('handle submit called');


    setLoading(true);
    // await waitTime(1000);
    message.success('Successfully Form Submitted.');
    setLoading(false);
     navigate("/operator")
    // navigate('/operator');
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const isLastStep = step === 2;
 const {state} = useLocation()
 const {operator_formid, operator_shiftid, operator_rcn} = state
  return (
      <Card>
        <Form onFinish={handleSubmit} form={form}>
          
          <Space>
            <Tag>Form ID: { operator_formid } </Tag>
           <Tag> Shift ID { operator_shiftid } </Tag>
           <Tag> RCN: {operator_rcn}</Tag>
          </Space>
           
            <Divider > Health </Divider>
              <Form.Item name="goodHealth" label="Are you in good Health Right now?" rules={[{ required: true }]}>
                <Radio.Group options={['Yes', 'No']} />
              </Form.Item>

              <Form.Item name="MedicineTaking" label="Are you taking any medicine?" rules={[{ required: true }]}>
                <Radio.Group options={['Yes', 'No']} onChange={(e)=> e.target.value === 'Yes' ? setMedicineTaking(true): setMedicineTaking(false)}/>
              </Form.Item>

              {medicineTaking && ( <Form.Item name="MedicineWillEffect" label="Will it affect your driving?" rules={[{ required: true }]}>
                        <Radio.Group options={['Yes', 'No']} />
                      </Form.Item>)}  
             

                      <Divider> Sleep </Divider>

              <Form.Item name="twentyfourinput" label="Hours I have slept in the last 24 hours?" rules={[{ required: true }]}>
                <InputNumber min={0} max={24} placeholder="24 hours" />
              </Form.Item>

              <Form.Item name="fortyeightinput" label="Hours I have slept in the last 48 hours?" rules={[{ required: true }]}>
                <InputNumber min={0} max={48} placeholder="48 hours" />
              </Form.Item>



              <Form.Item  rules={[{required: true}]} required>
                <Checkbox >
                I have read and understood the above questions, and I certify that my answers are true and complete to the best of my knowledge.
                </Checkbox>
              </Form.Item>


          <Form.Item>
          
              <Button type="primary" block onClick={(e)=> e}>
                Submit
              </Button>
            
          
          </Form.Item>
          </Form>
      </Card>
    
  );
};

export default AntdFTDForm;
