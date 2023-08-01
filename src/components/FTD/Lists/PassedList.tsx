
import React  from "react"
import { CapsuleTabs, PullToRefresh, Space } from 'antd-mobile'
import { FC, useRef } from 'react'
import { Dialog, List, SwipeAction, Toast, Image } from 'antd-mobile'

import { Action, SwipeActionRef } from 'antd-mobile/es/components/swipe-action'

import { Typography } from "antd"



export const FtdPassedList: FC = () => {

    // const [data, setData] = useState(() => getNextData())
  
  
  
      const leftActions: Action[] = [
        {
          key: 'pin',
          text : 'View' , 
          color: 'primary',
        },
      ]
      
    
      const items = ['Ahmed Mohamed', 'Habeeb Hussain', 'Hussain']
   
  
      return (
  
  
        <List>
          {items.map(item => (
            <SwipeAction
              key={item}
              leftActions={leftActions}
             
            >
            <List.Item title='Risky' description='Director'>
            {item}
          </List.Item>
             
            </SwipeAction>
          ))}
        </List>
     
      )
    }
  
  