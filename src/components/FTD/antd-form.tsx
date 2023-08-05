import React, { useEffect, useState } from 'react';
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
const [disableSubmit, setDisableSubmit] = useState(true);

const [updateFtdForm, {error}] = useMutation<UpdateFtdformMutation, UpdateFtdformMutationVariables>(UpdateFtdformDocument)

useEffect( () => {setDisableSubmit(true)}
, [form.getFieldValue('submitButton')])



if (error) {
  Toast.show(error.message)
}

const handleupdateFTDForm = async (updateFormInputx: UpdateFtdformInput) => {
    console.debug('handleUPDateformcalled')
    await updateFtdForm({variables: {updateFtdformInput: updateFormInputx}})
}

  const navigate = useNavigate();

  const handleSubmit =  () => {
    console.log('handle submit called' );
  
    


    const updateForm: UpdateFtdformInput = {
      id: operator_formid,
      forty_eight_hour_score: form.getFieldValue('fortyeightinput'),
      twenty_four_hour_score: form.getFieldValue('twentyfourinput'),
      taking_medicine_score: form.getFieldValue('MedicineTaking') === 'Yes' ? 1 : 0,
      good_health_score: form.getFieldValue('goodHealth') === 'Yes' ? 1 : 0,
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
        <Form onFinish={handleSubmit} form={form}
        onSubmitCapture={(e) => {console.log('submit captured', e)}
        }
        >
          
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



              <Form.Item  rules={[{required: true}]} >
                <Checkbox onChange={(e) => e.target.checked === true ? setDisableSubmit(false): setDisableSubmit(true)} onClick={()=> {
                    
                }} >
                I have read and understood the above questions, and I certify that my answers are true and complete to the best of my knowledge.
                </Checkbox>
              </Form.Item>


          <Form.Item>
          
              <Button type="primary" block onClick={handleSubmit} name='submitButton' disabled={disableSubmit}>
                Submit
              </Button>
            
          
          </Form.Item>
          </Form>
      </Card>
    
  );
};

export default AntdFTDForm;
