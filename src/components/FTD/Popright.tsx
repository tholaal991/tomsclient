import { Card, Popup, Space, Tag } from "antd-mobile"
import { useState } from "react"

import {FTDformInfo} from "./FtdFormInfo.type"
import { Statistic, Typography } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

interface PoprightInterface {
    Show: boolean;
    content: FTDformInfo;
    setVisibleCloseRight(value: boolean): void;

}



export const Popright = (prop: PoprightInterface, ) => {
    
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

     



return (

<Popup
position='right'
visible={prop.Show}
closeOnSwipe
bodyStyle={{minWidth: '70vw'}}
showCloseButton
closeOnMaskClick={true}
onClose={() => {
    prop.setVisibleCloseRight(false)
}}
>

<Card >

<Space direction="vertical" style={{marginTop: '5vh'}}>


     <Typography.Title level={4}> Operator: {prop.content.operatorId}</Typography.Title>

     <Typography.Title level={4}> Form Id: {prop.content.id}</Typography.Title>

    <Typography.Title level={4}> Shift Id: {prop.content.shiftId}</Typography.Title>

    <Typography.Title level={4}> Approval Status: {mapApprovalType(Number(prop.content.approvalStatus))}</Typography.Title>
    
    </Space>
    </Card>    


</Popup>
)


}



