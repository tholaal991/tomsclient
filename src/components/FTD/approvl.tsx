
import React, { useState }  from "react"
import {  FloatingBubble } from 'antd-mobile'
import { PlusCircleFilled } from "@ant-design/icons"
import { FTDApprovalLists } from "./Lists/FTDApprovalLists"




export const Approval =()=> {

   const [showInchargeFormMobile, setshowInchargeFormMobile] =useState(false)
    

    return (
        <>

         
         
         <FloatingBubble    
            style={
               {
                  '--initial-position-bottom': '24px',
                  '--initial-position-right': '24px',
                  '--edge-distance': '24px'
               }
            }
            onClick={ ()=> {
               setshowInchargeFormMobile(true)
            }}
            >
              <PlusCircleFilled/>
         </FloatingBubble>


         <FTDApprovalLists/>
        
        </>
    )
}


