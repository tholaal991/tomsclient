import { Typography } from "antd";
import React, { useEffect } from "react";
import { OperatorCard } from "./OperatorCard";
import { CapsuleTabs, Card, Space, Toast } from "antd-mobile";

import { useQuery } from '@apollo/client';
import { FormsByUserIdDocument, FormsByUserIdQuery, FormsByUserIdQueryVariables, GetAllUsersDocument, GetAllUsersQuery, GetAllUsersQueryVariables } from "../../../generated/graphql";
import { CapsuleTab } from "antd-mobile/es/components/capsule-tabs/capsule-tabs";
import card from "antd-mobile/es/components/card";
import { useNavigate } from "react-router-dom";







export const OperatorWindow: React.FC = () => {
  const userId = 12;
  // const { data, loading, error, refetch } = useQuery<FormsByUserIdQuery, FormsByUserIdQueryVariables>(FormsByUserIdDocument, { variables: { userId } });
  // const UsersData = useQuery<GetAllUsersQuery,GetAllUsersQueryVariables> (GetAllUsersDocument, { variables: { }});


  const {
    data: formsData,
    loading: formsLoading,
    error: formsError,
    refetch: refetchForms,
  } = useQuery<FormsByUserIdQuery, FormsByUserIdQueryVariables>(FormsByUserIdDocument, {
    variables: { userId },
  });
  
  const {
    data: usersData,
    loading: usersLoading,
    refetch: refetchUsers,
    error: usersError,
  } = useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, {
    variables: {},
  });



  useEffect(() => {
    refetchUsers()
    refetchForms({ userId });
  }, [userId, refetchForms, refetchUsers]);

  if (formsLoading) {
  }

  if (formsError) {
  }

  const users =  usersData?.getAllUsers;
  const forms = formsData?.formsByUserId;


  const mappedUsers = users?.map( (user,key) => ({
    rcn: user.rcn,
    name: user.name,
  }))

  const mappedForms = forms?.map((form,key) => ({
    id: form.id,
    approveId: form.approveId,
    approval_status: form.approval_status,
    shiftId: form.shiftId,
    inchargeId: form.inchargeId,
  }));
 
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
  
  const pendingApprovals = mappedForms?.filter(
    (form) => form.approval_status === 2
  );

  console.log(pendingApprovals?.length);

  const generatedForms = mappedForms?.filter(
    (form) => form.approval_status === 1
  );


  const navigate = useNavigate();
  
  // const cardCliked=()=>{
  //     Toast.show('Ftd form filling')
  //     navigate("/submitftd");
  // }

  const targetUser = mappedUsers?.find( (user, key) => ( user.rcn == userId))

  console.log(generatedForms?.length);
  
  return (
    <>
      <Card>


      

      <CapsuleTabs>
        <CapsuleTabs.Tab title='Action' key={'Action'} >
        <Typography.Title level={4} style={{ padding: '20px' }}> Action Page </Typography.Title>
      <Space direction="vertical" style={{ "--gap-vertical": '20px' }}>
        {generatedForms?.map((form) => (
          <OperatorCard 
          title={String(mapApprovalType(Number(form?.approval_status)))} 
          name={String(targetUser?.name)} 
          score="very high" 
          statu={String(mapApprovalType(Number(form?.approval_status)))} 
          formid={Number(form.id)}
          shiftid={Number(form.shiftId)}
          bodyClicked={()=> navigate("/pro", {state: {operator_formid: form.id, operator_shiftid: form.shiftId, operator_rcn: Number(targetUser?.rcn),}})}
          
            />
        ))}

      </Space>
        </CapsuleTabs.Tab >

        <CapsuleTabs.Tab title='Pending' key={'Pending'}>
        <Typography.Title level={4} style={{ padding: '20px' }}> Pending Approval Page </Typography.Title>
      <Space direction="vertical" style={{ "--gap-vertical": '20px' }}>
        {pendingApprovals?.map((form) => (
          <OperatorCard 
          title={String(mapApprovalType(Number(form?.approval_status)))} 
          name={String(targetUser?.name)} 
          score="very high" 
          statu={String(mapApprovalType(Number(form?.approval_status)))} 
          formid={Number(form.id)}
          shiftid={Number(form.shiftId)}
            />
        ))} 
      
      </Space>
        </CapsuleTabs.Tab>

        <CapsuleTabs.Tab title='Latest Approval' key={'Latest Approval'}>
        <Typography.Title level={4} style={{ padding: '20px' }}> Last Approval </Typography.Title>
      <Space direction="vertical" style={{ "--gap-vertical": '20px' }}>
        {mappedForms?.map((form) => (
          <OperatorCard 
          title={String(mapApprovalType(Number(form?.approval_status)))} 
          name={String(targetUser?.name)} 
          score="very high" 
          statu={String(mapApprovalType(Number(form?.approval_status)))} 
          formid={Number(form.id)}
          shiftid={Number(form.shiftId)}
            />
        ))}
        {/* <OperatorCard title={'My Action'} name={'Ahmed Mohamed'} score={"very high"} statu={"pending"} /> */}
        {/* <OperatorCard title={'Pending Approval'} name={'Ahmed Mohamed'} score={"very high"} statu={"pending"} /> */}
        {/* <OperatorCard title={'Latest Approval'} name={'Ahmed Mohamed'} score={"very high"} statu={"pending"} /> */}
      </Space>
        </CapsuleTabs.Tab>

      </CapsuleTabs>
      
      </Card>
    </>
  );
};
