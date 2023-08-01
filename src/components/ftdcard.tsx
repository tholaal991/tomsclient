
import { Card } from 'antd';
import React, { CSSProperties } from 'react';


export interface ftdCardProps {
    title: string ;
    style: CSSProperties;
    child: any
}

export const FtdCard = (prop: ftdCardProps) => {
   
  return (
     <Card title={prop.title} style={prop.style}>
     
     {prop.child}

     </Card>
  )

}