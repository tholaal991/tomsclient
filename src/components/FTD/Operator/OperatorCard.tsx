
import React from "react"

import { ProCard } from "@ant-design/pro-components"
import { Avatar, Card, Divider, Space, Tag, Toast } from "antd-mobile";
import { Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";


interface operatorcardProp {
    title: string;
    name?: string;
    score?: string;
    statu?: string;
    formid?: number;
    shiftid?: number;
    bodyClicked?(): void;
}

 const BodyProperties: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    minWidth: '50%'
 }

 const HeaderStyle: React.CSSProperties = {
    paddingInline: '20px',
    borderEndEndRadius: '10px',
    minWidth: '50%',
   
 }



export const OperatorCard: React.FC <operatorcardProp> =(prop: operatorcardProp)=> {
 

    return (
        // <div style={{display: 'flex', width:'95%', padding: '25% 12%', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'red'}}>
        <Card title={prop.title} bodyStyle={BodyProperties} headerStyle={HeaderStyle} style={{ boxShadow: '0px 4px 4px 0px rga(0, 0, 0, 0.25)'} } onClick={prop.bodyClicked}>
            
            <Card style={{border: '1px solid #F3F3F3'  }} onClick={()=> prop.bodyClicked}>
                <Space direction="horizontal" block align="center">
                    <Avatar src=''/>
                </Space>
                <Space  direction="vertical">
                  <Space>
                <Typography.Title style={{color: 'grey'}} level={5}>{prop.name}</Typography.Title> 
            </Space>
               <Space direction="horizontal">
                  <Tag> Score: {prop.score}</Tag>
                   <Tag> Form: {prop.formid} </Tag>
               </Space>
            <Space direction="horizontal">
           
                <Tag color="primary" fill='outline'>
                    {prop.statu}
                </Tag>
                <Tag>
                   Shift: {prop.shiftid}
                </Tag>
                  
            </Space>

            </Space>
            </Card>
            
            
          
        
        </Card>
    )
}