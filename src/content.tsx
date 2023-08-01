import {Routes, Route} from "react-router-dom"

import { Applications } from "./Pages/Applications/Applications";


import { Passed } from "./Pages/Passed/Passed";
import { Practical } from "./Pages/Practical/Practical";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

import { Shortlist } from "./Pages/annoucement/Iulaan";
import { DeviceDetect } from "./components/devicedetect";
import { Ftdfrom } from "./components/Ftdform";
import { Approval } from "./components/FTD/approvl";
import { PassedPage } from "./components/PassedPage";
import { OperatorWindow } from "./components/FTD/Operator/OperatorWindow";
import { InchargeFtdFormMobile } from "./components/FTD/Incharge-Ftdform-mobile";
import { AntdFTDForm } from "./components/FTD/antd-form";
import FtdReportTable from "./components/FTD/Report/FtdReportTable";
import TESTGENERIC from "./components/FTD/Report/TestGenericReport";
import { FtdMobile } from "./components/Ftdform-mobile";



export default function Contents () {

return (


      <Routes>
            <Route path="/" element={ <Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/applications" element={ <Applications/>} ></Route>
       
            <Route path="/passed" element={<Passed />} ></Route>
            <Route path="/practical" element={<Practical />} ></Route>
            <Route path="/shortlist" element={<Shortlist />} ></Route>
           
             <Route path="/submitftd" element={<FtdMobile/>}></Route>
             <Route path="/device" element={<DeviceDetect/>}></Route>
             <Route path="/approval" element={<Approval/>}></Route>
             <Route path="/pro" element={<AntdFTDForm/>}></Route>

             <Route path="/ftdreport" element={<FtdReportTable/>}></Route>
             
             <Route path="/123" element={<PassedPage/>}></Route>
             <Route path='/operator' element={<OperatorWindow/>}></Route>
             <Route path='/testgeneric' element={<TESTGENERIC/>}></Route>
             <Route path='/inchargeftd' element={<InchargeFtdFormMobile/>}></Route>


      </Routes>
   


);



}