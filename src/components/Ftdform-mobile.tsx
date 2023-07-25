
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

  import { CheckMarkSVG } from '../SVG/CheckMark.SVG';

  import { Button, Statistic, message } from 'antd';
  import React, { useState } from 'react';
import { PassedCard } from './passedCard';
 import { Typography} from 'antd'
import { wrap } from 'module';
import { Result } from 'antd-mobile';

  
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






    return (  
      <PageContainer title='Submit FTD Form' > 
      
      <ProCard >
      <Paragraph> How many hour have you slept in the last 48 hours? test one two three</Paragraph>  
        <StepsForm
          containerStyle={{ marginLeft: '-11vh',justifyContent: 'center',alignContent: 'center',flexWrap: 'wrap', display: 'flex', flexDirection: 'column'}}
          onFinish={async () => {
            setLoading(true);
            await waitTime(1000);
            message.success('Suceesfully Form Submitted.');
            setLoading(false);
          } }
          submitter={{
            render: ({ form, onSubmit, step, onPre }) => {
              return [ (step < 2 && 
                <Button
                  key="rest"
                  onClick={() => {
                    form?.resetFields();
                  } }
                >
                  Reset
                </Button>),
                step > 0 && (   
                  <Button
                    key="pre"
                    onClick={() => {
                      onPre?.();
                    } }
                  >
                    Previous
                  </Button>
                ), step < 2 && (
                <Button
                  key="next"
                  loading={loading}
                  type="primary"
                  onClick={() => {
                    onSubmit?.();
                  } }
                >
                  Next
                </Button>),( step >= 2 &&
                <Button type='primary'>
                  OK
                </Button>)
             
                
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
              name="goodHealth"
              label="Are you in good Health Right now?"
              rules={[
                {
                  required: true,
                },
              ]}
              options={['Yes', 'No']} />
            <ProFormRadio.Group
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
                   name="MedicineWillEffect"
                   label="Will it effect your driving?"
                   rules={[
                     {
                       required: true,
                     },
                   ]}
                   options={['Yes', 'No']} />

                <ProFormDependency name={['MedicineWillEffect']}>
               {({ MedicineWillEffect }) => {
                return (
                    MedicineWillEffect == 'Yes' &&  <ProFormText name="medicineName" label="Medicine Name" width='sm' placeholder='Medicine  name'  rules={[
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
           
           <ProFormDigit name='twentyfour' label='Hours I have you slept in 24 hours?' width='sm' placeholder={'24 hours'}/>
           <ProFormDigit name='fourtyeight' label='Hours I have you slept in 48 hours?' width='sm' placeholder={'48 hours'}/>
                

        

          { /* <ProFormDigit name="twentyfourhoursleep"  label="How many hour have you slept in the last 24 hours?" placeholder="24 hour sleep"  rules={[
                     {
                       required: true,
                     },
                   ]}/> */}

               

          {/* <ProFormDigit name="fourtyeighthoursleep" label="How many hour have you slept in the last 48 hours testing one tw hree?"   placeholder="48 hour sleep"  rules={[
                     {
                       required: true,
                     },
                   ]}/> */}

           
          </StepsForm.StepForm>





          <StepsForm.StepForm name="time" title="Score">
            
            <div style={{display: 'flex', marginBottom: '20px' , flexDirection: 'column', flexWrap: 'wrap'}}>
              
               
              
              <Result title='Passed. Start your duty!' status='success' />
              <Result title='Peding Approval'  status='waiting' />  
            
            </div>
           
          
        
               
           
        
          </StepsForm.StepForm>
       
        </StepsForm>

  

      </ProCard>
      
      </PageContainer>
                
       
    )
}