import { Statistic } from "antd"
import { CheckMarkSVG } from "../SVG/CheckMark.SVG"
import {Typography}from "antd"




export const PassedCard =()=> {

    return (
        <> 
        
         <CheckMarkSVG/> <Statistic value="Passed"/>
          <Typography.Text> You can start your duty!</Typography.Text>
        </>
      
    )
}