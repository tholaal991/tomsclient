
import React  from "react"
import { CapsuleTabs } from 'antd-mobile'
import { FC, useRef } from 'react'
import { Dialog, List, SwipeAction, Toast, Image } from 'antd-mobile'

import { Action, SwipeActionRef } from 'antd-mobile/es/components/swipe-action'
import { ApplicationSVG } from "../SVG/ApplicationsSVG"
import { CheckMarkSVG } from "../SVG/CheckMark.SVG"

export const Approval =()=> {


    return (
        <>
          
        <CapsuleTabs>
          < CapsuleTabs.Tab title = ' Pending ' key = 'pending' >  
            Peding Approvals
            <WithList />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title=' Rejected ' key='rejected'>
            Rejected Requests
          </CapsuleTabs.Tab>
          < CapsuleTabs.Tab title = ' Approved ' key = ' approved ' >  
            Approved Requests
          </CapsuleTabs.Tab>
        </CapsuleTabs>
     
        
        </>
    )
}

const WithList: FC = () => {
    const leftActions: Action[] = [
      {
        key: 'pin',
        text : 'Top' , 
        color: 'primary',
      },
    ]
    const rightActions: Action[] = [
      {
        key: 'unsubscribe',
        text : 'Unfollow' , 
        color: 'light',
      },
      {
        key: 'mute',
        text : 'Do Not Disturb' , 
        color: 'warning',
      },
      {
        key: 'delete',
        text : 'delete' , 
        color: 'danger',
      },
    ]
  
    const items = ['Ahmed Mohamed', 'Habeeb Hussain', 'Hussain']
    return (
      <List>
        {items.map(item => (
          <SwipeAction
            key={item}
            leftActions={leftActions}
            rightActions={rightActions}
          >
            <List.Item>{item}</List.Item>
          </SwipeAction>
        ))}
      </List>
    )
  }