



import React, { useEffect, useState }  from "react"
import { CapsuleTabs, Card, PullToRefresh, Space, Tag } from 'antd-mobile'
import { FC, useRef } from 'react'
import { Dialog, List, SwipeAction, Toast, Image } from 'antd-mobile'

import { Action, SwipeActionRef } from 'antd-mobile/es/components/swipe-action'

import { Typography } from "antd"
import { Popright } from "../Popright"
import {FTDformInfo} from "../FtdFormInfo.type"

import { useMutation, useQuery } from "@apollo/client"

import { FormsByInchargeIdDocument, FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables,GetAllUsersDocument, GetAllUsersQuery, GetAllUsersQueryVariables, UpdateApprovalStatusDocument, UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables } from "../../../generated/graphql"



// function getNextData() {
//   const ret: string[] = []
//   for (let i = 0; i < 18; i++) {
//     ret.unshift(lorem.generateWords(1))
//   }
//   return ret
// }

 




    
export const  FTDApprovalLists = () => {
//get all forms by incharge 


const [updateApprovalStatus, {loading, error}] = useMutation<UpdateApprovalStatusMutation,UpdateApprovalStatusMutationVariables>(UpdateApprovalStatusDocument)

const handlechangeFormStatus = async (id: number, status: number)  => {
  await updateApprovalStatus({variables: {formId: id, approvalStatus: status}})
}



const {
  data: formsData,
  loading: formsLoading,
  error: formsError,
  refetch: refetchForms,

} = useQuery<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>(FormsByInchargeIdDocument, {variables: {inchargeId: 12}});

const {
  data: usersData,
  loading: usersLoading,
  refetch: refetchUsers,
  error: usersError,
} = useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, {
  variables: {},
});


useEffect(() => {
  refetchForms({inchargeId: 12})
  refetchUsers()
},[refetchForms,refetchUsers]) 

if (usersLoading) {
  
} 

if (usersError) {
  
} 

if (formsLoading) {
  
}

if (formsError) {
  
}

const users =  usersData?.getAllUsers;
const forms = formsData?.formsByInchargeId;


const mappedUsers = users?.map( (user,key) => ({
  rcn: user.rcn,
  name: user.name,
}))

const mappedForms = forms?.map( (form,key) => ({
  key: key,
  id: form?.id,
  operatorId: form?.operatorId,
  approvalStatus: form?.approval_status,
  shiftId: form?.shiftId,
  name: mappedUsers?.find( (user) => user.rcn === form?.operatorId)?.name,
}))

 const unattendedForms = mappedForms?.filter( (form) => form.approvalStatus === 1) || []
 const pendingForms = mappedForms?.filter( (form) => form.approvalStatus === 2) || []
  const approvedForms = mappedForms?.filter( (form) => form.approvalStatus === 4) || []
  const rejectedForms = mappedForms?.filter( (form) => form.approvalStatus === 3) || []
  const cancelledForms = mappedForms?.filter( (form) => form.approvalStatus === 5) || []

    // const [data, setData] = useState(() => getNextData())
  
    const [visibleCloseRight, setVisibleCloseRight] = useState(false)
  
  
      const leftActions: Action[] = [
        {
          key: 'view',
          text : 'View' , 
          color: 'primary',
          
          onClick(e) {
            Toast.show('You clicked')
          },
        }
      ]
      const rightActions: Action[] = [
       
        {
          key: 'approve',
          text : 'Approve' , 
          color: 'green',
          
        },
        {
          key: 'reject',
          text : 'Reject' , 
          color: 'danger',
        },
      ]

      function mapApprovalType (val: number): string {
        switch (val) {
          case 1: {
            return 'Pending Action';
            break;
          }
          case 2: {
            return 'Pending Approval'
            break;
          }
          case 3:{
            return 'Rejected'
            break;
          }
          case 4: {
            return 'Approved'
            break;
          }
          case 5:{
            return 'Cancelled'
            break;
          }
          default: {
            return 'Undefined state';
            break;
          }
        }
        
    }
    
    
      
      const pendingftdItems: FTDformInfo[] = pendingForms?.map((form,key) => ({ key: key, id: Number(form.id), operatorName: String(form.name), operatorId: Number(form.operatorId), approvalStatus: Number(form.approvalStatus), shiftId: Number(form.shiftId )})) || []
      const unattendedftdItems: FTDformInfo[] = unattendedForms?.map((form,key) => ({ key: key, id: Number(form.id), operatorName: String(form.name), operatorId: Number(form.operatorId), approvalStatus: Number(form.approvalStatus), shiftId: Number(form.shiftId )})) || []
      const approvedftdItems: FTDformInfo[] = approvedForms?.map((form,key) => ({ key: key, id: Number(form.id),operatorName: String(form.name), operatorId: Number(form.operatorId), approvalStatus: Number(form.approvalStatus), shiftId: Number(form.shiftId )})) || []  
      const rejectedftdItems: FTDformInfo[] = rejectedForms?.map((form,key) => ({ key: key, id: Number(form.id),operatorName: String(form.name), operatorId: Number(form.operatorId), approvalStatus: Number(form.approvalStatus), shiftId: Number(form.shiftId )})) || []
      const cancelledftdItems: FTDformInfo[] = cancelledForms?.map((form,key) => ({ key: key, id: Number(form.id), operatorName: String(form.name), operatorId: Number(form.operatorId), approvalStatus: Number(form.approvalStatus), shiftId: Number(form.shiftId )})) || []

      return (
  
       <>

<PullToRefresh
      canReleaseText={'release to get updated'}
      pullingText={'pull and release'}
      completeText={'Updating if any data'}
      onRefresh={async () => {
        await setTimeout(()=>{},1000)
       
      }}
    >
        
        <CapsuleTabs >
          <CapsuleTabs.Tab title='Pending' key='1'>
            <List>
              {pendingftdItems.map(item => (
                <SwipeAction
                key={item.key}
                leftActions={[{
                  key: 'view',
                  text : 'View' , 
                  color: 'primary',
                  
                  onClick(e) {
                    console.log(item)
                    setVisibleCloseRight(true)
                    
                  },
                }]}
                rightActions={[
                  { key: 'approve', text: 'Approve', color: 'green',
                  onClick(e) {
                    handlechangeFormStatus(Number(item.id),4) 
                  }
                  
                },
                  { key: 'reject', text: 'Reject', color: 'danger',
                  onClick(e) {
                    handlechangeFormStatus(Number(item.id),3) 
                  }
                 },
                ]}
                >
                <Popright Show={visibleCloseRight}  setVisibleCloseRight={setVisibleCloseRight} content={item}/>
                <List.Item title='Risky' description='Director'>
                <Space direction="vertical" wrap style={{marginTop: '5px'}}>
                       
                       <Space> {item.operatorName} </Space>
                       </Space>
                       <Space direction="horizontal">
                       <Space> <Tag round>Rcn: {item.operatorId}  </Tag></Space> 
                      <Space>  <Tag color="blue"> {mapApprovalType(Number(item.approvalStatus))} </Tag></Space>
                      </Space> 
              </List.Item>
                </SwipeAction>
              ))}
            </List>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Unattended' key='0'>
            <List>
              {unattendedftdItems.map(item => (
                <SwipeAction
                key={item.key}
                leftActions={[
                  {
                    key: 'view',
                    text : 'View' ,
                    color: 'primary',
                    onClick(e) {
                      console.log(item)
                      setVisibleCloseRight(true)
                    },
                  }
                ]}
               
                >
                  <Popright Show={visibleCloseRight}  setVisibleCloseRight={setVisibleCloseRight} content={item}/>
                <List.Item title='Risky' description='Director'>
                <Space direction="vertical" wrap style={{marginTop: '5px'}}>
                       
                       <Space> {item.operatorName} </Space>
                       </Space>
                       <Space direction="horizontal">
                       <Space> <Tag round>Rcn: {item.operatorId}  </Tag></Space> 
                      <Space>  <Tag color="orange"> {mapApprovalType(Number(item.approvalStatus))} </Tag></Space>
                      </Space> 
              </List.Item>
                </SwipeAction>
              ))}
            </List>
          </CapsuleTabs.Tab>

          <CapsuleTabs.Tab title='Approved' key='2'>
            <List>
              {approvedftdItems.map(item => (
                <SwipeAction
                key={item.key}
                leftActions={[
                  {
                    key: 'view',
                    text : 'View' ,
                    color: 'primary',
                    onClick(e) {
                      console.log(item)
                      setVisibleCloseRight(true)
                    },
                  }
                ]}
                
                >
                  <Popright Show={visibleCloseRight}  setVisibleCloseRight={setVisibleCloseRight} content={item}/>
                <List.Item title='Risky' description='Director'>
                  
                    <Space direction="vertical" wrap style={{marginTop: '5px'}}>
                       
                       <Space> {item.operatorName} </Space>
                       </Space>
                       <Space direction="horizontal">
                       <Space> <Tag round>Rcn: {item.operatorId}  </Tag></Space> 
                      <Space>  <Tag color="green"> {mapApprovalType(Number(item.approvalStatus))} </Tag></Space>
                      </Space> 
              
              </List.Item>
                </SwipeAction>
              ))}
            </List>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Rejected' key='3'>
            <List>
              {rejectedftdItems.map(item => (
                <SwipeAction
                key={item.key}
                leftActions={[
                  {
                    key: 'view',
                    text : 'View' ,
                    color: 'primary',
                    onClick(e) {
                      console.log(item)
                      setVisibleCloseRight(true)
                    },
                  }
                ]}
               
                >
                  <Popright Show={visibleCloseRight}  setVisibleCloseRight={setVisibleCloseRight} content={item}/>
                <List.Item title='Risky' description='Director'>
                <Space direction="vertical" wrap style={{marginTop: '5px'}}>
                       
                       <Space> {item.operatorName} </Space>
                       </Space>
                       <Space direction="horizontal">
                       <Space> <Tag round>Rcn: {item.operatorId}  </Tag></Space> 
                      <Space>  <Tag color="red"> {mapApprovalType(Number(item.approvalStatus))} </Tag></Space>
                      </Space> 
              </List.Item>
                </SwipeAction>
              ))}
            </List>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='Cancelled' key='4'>
            <List>
              {cancelledftdItems.map(item => (
                <SwipeAction
                key={item.key}
                leftActions={[
                  {
                    key: 'view',
                    text : 'View' ,
                    color: 'primary',
                    onClick(e) {
                      console.log(item)
                      setVisibleCloseRight(true)
                    },
                  }
                ]}
                
                >
                  <Popright Show={visibleCloseRight}  setVisibleCloseRight={setVisibleCloseRight} content={item}/>
                <List.Item title='Risky' description='Director' >
                   
                <Space direction="vertical" wrap style={{marginTop: '5px'}}>
                       
                       <Space> {item.operatorName} </Space>
                       </Space>
                       <Space direction="horizontal">
                       <Space> <Tag round>Rcn: {item.operatorId}  </Tag></Space> 
                      <Space>  <Tag color="red"> {mapApprovalType(Number(item.approvalStatus))} </Tag></Space>
                      </Space> 
                 
              </List.Item>
                </SwipeAction>
              ))}
            </List>
          </CapsuleTabs.Tab>
        </CapsuleTabs>


       

            
  
        {/* <List>
          {ftdItems.map(item => (
           <SwipeAction
           key={item.key}
           leftActions={[
            {
              key: 'view',
              text : 'View' , 
              color: 'primary',
              
              onClick(e) {
                console.log(item)
                setVisibleCloseRight(true)
              },
            }
           ]}
           
           rightActions={rightActions}
             
          
         >
          <Popright Show={visibleCloseRight}  setVisibleCloseRight={setVisibleCloseRight} content={item}/>
            <List.Item title='Risky' description='Director'>
            {item.operatorId}
          </List.Item>
          </SwipeAction>
       
          ))}
        </List> */}
        
        </PullToRefresh>
        </>
      )
    }