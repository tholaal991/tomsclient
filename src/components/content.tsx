import {Routes, Route} from "react-router-dom"

import { Applications } from "../Pages/Applications/Applications";


import { Passed } from "../Pages/Passed/Passed";
import { Practical } from "../Pages/Practical/Practical";
import { Dashboard } from "../Pages/Dashboard/Dashboard";

import { Shortlist } from "../Pages/annoucement/Iulaan";
import { DeviceDetect } from "./devicedetect";
import { Ftdfrom } from "./Ftdform";
import { Approval } from "./approvl";



export default function Contents () {

return (


      <Routes>
            <Route path="/" element={ <Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/applications" element={ <Applications/>} ></Route>
       
            <Route path="/passed" element={<Passed />} ></Route>
            <Route path="/practical" element={<Practical />} ></Route>
            <Route path="/shortlist" element={<Shortlist />} ></Route>
           
             <Route path="/submitftd" element={<Ftdfrom/>}></Route>
             <Route path="/device" element={<DeviceDetect/>}></Route>
             <Route path="/approval" element={<Approval/>}></Route>
      </Routes>
   


);



}