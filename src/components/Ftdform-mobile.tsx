
import {
  PageContainer,
    ProCard,
    ProForm,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormDatePicker,
    ProFormDateRangePicker,
    ProFormDependency,
    ProFormDigit,
    ProFormItem,
    ProFormRadio,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
    ProHelpSelect,
    StatisticCard,
    StepsForm,
    
  } from '@ant-design/pro-components';

  import { Card, Input, Button as MobileButton, NumberKeyboard, Radio, } from 'antd-mobile'

  import { CheckMarkSVG } from '../SVG/CheckMark.SVG';

  import { Button, InputNumber, Statistic, message, Typography } from 'antd';
  import React, { useState } from 'react';
import { PassedCard } from './passedCard';
  
import { wrap } from 'module';
import { Result } from 'antd-mobile';
import { MobileOnlyView } from 'react-device-detect';
import TypedInputNumber from 'antd/es/input-number';
import { useNavigate } from 'react-router';

  
 const {Paragraph} = Typography;
  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };



export const FtdMobile = () => {
  const [loading, setLoading] = useState(false);
  const [form] = ProForm.useForm();


   const navigate = useNavigate()
    return (  
      <Card title='Submit FTD Form' style={{}}> 
      
      <Card >
      <Paragraph> How many hour have you slept in the last 48 hours? test one two three</Paragraph>  
        <StepsForm
          
          containerStyle={{ justifyContent: 'center',alignContent: 'center',flexWrap: 'wrap', display: 'flex', flexDirection: 'column'}}
          onFinish={async (values) => {
            console.log('entered values of the form are : ',values);
            setLoading(true);
            await waitTime(1000);
            message.success('Suceesfully Form Submitted.');
            setLoading(false);
          } }
          submitter={{
            render: ({ form, onSubmit, step, onPre }) => {
              return [ (step < 1 && 
                <MobileButton
                 
                block  style={{minWidth: '100px'}}
                  size='large'
                  key="rest"
                  onClick={() => {
                    form?.resetFields();
                  } }
                >
                  Reset
                </MobileButton>),
                step > 0  && (   
                  <MobileButton
                  block  style={{minWidth: '100px'}}
                  size='large'
                    key="pre"
                    onClick={() => {
                      onPre?.();
                    } }
                  >
                    Previous
                  </MobileButton>
                ), step < 2 && (
                <MobileButton
                block  style={{minWidth: '100px'}}
                size='large'
                  key="next"
                  loading={loading}
                  color='primary'
                  onClick={() => {
                    onSubmit?.();
                  
                  } }
                >
                  Next
                </MobileButton>),( step >= 2 &&
                <MobileButton color='primary' key='OK' size='large' block  style={{minWidth: '100px'}} onClick={()=> navigate("/operator")}>
                  OK
                </MobileButton>)
             
                
              ];
            },
          }}
          formProps={{
            validateMessages: {
              required: 'Please fill this field',
            },
          }}
        >
          
          
          <StepsForm.StepForm
             
            name="base"
            title="Health Info"
            onFinish={async () => {
              setLoading(true);
              await waitTime(2000);
              setLoading(false);
              return true;
            } }
          >
           
   

         

            

            <ProFormRadio.Group
            key='goodHealth'
              extra
              radioType='button'
              name="goodHealth"
              label="Are you in good Health Right now?"
              rules={[
                {
                  required: true,
                },
              ]}
              options={['Yes', 'No']} 
              />
            <ProFormRadio.Group
             key={'MedicineTaking'}
              extra
              radioType='button'
              name="MedicineTaking"
              label="Are you taking any medicine?"
              rules={[
                {
                  required: true,
                },
              ]}
              options={['Yes', 'No']} />

<ProFormDependency name={['MedicineTaking']}>
              {({ MedicineTaking }) => {
                

                

                return (
                  
                  MedicineTaking == 'Yes' && (  <><ProFormRadio.Group
                  key={'MedicineTaking'}
                    radioType='button'
                   name="MedicineWillEffect"
                   label="Will it effect your driving?"
                   rules={[
                     {
                       required: true,
                     },
                   ]}
                   options={['Yes', 'No']} />

                <ProFormDependency name={['MedicineWillEffect']} >
               {({ MedicineWillEffect }) => {
                return (
                    MedicineWillEffect == 'Yes' &&  <ProFormText name="medicineName"  label="Medicine Name" width='sm' placeholder='Medicine  name'  rules={[
                      {
                        required: true,
                      },
                    ]} />
                );
              } }
            </ProFormDependency> </>)
                 
            
                    
                );
              } }
            </ProFormDependency>
          </StepsForm.StepForm>


         
          <StepsForm.StepForm name="checkbox" title="Sleep Info" style={{display: 'flex', flexDirection: 'column'}}>
           
          
            
           <ProForm.Item label='Hours  I  have slept in the 24 hours?' >
             <InputNumber name='twentyfourinput' size='large' inputMode='numeric' min={0} max={24} title='input 24 hour sleep' placeholder={'24 hours'} required/>
              
           </ProForm.Item>

           
           <ProForm.Item  label='Hours I have slept in the 48 hours?' >
             <InputNumber name='twentyfourinput'  size='large' inputMode='numeric' min={0} max={48} title='input 48 hour sleep' placeholder={'48 hours'} required/>
           </ProForm.Item>
          
        
           
          </StepsForm.StepForm>





          <StepsForm.StepForm name="time" title="Score">
            
            {/* <div style={{display: 'flex', marginBottom: '20px' , flexDirection: 'column', flexWrap: 'wrap'}}> */}
              
               
              
              <Result title='Passed. Start your duty!' status='success' />
              <Result title='Peding Approval'  status='waiting' />  
            
            {/* </div> */}
           
          
        
               
           
        
          </StepsForm.StepForm>
       
        </StepsForm>

  

      </Card>
      
      </Card>
                
       
    )
}