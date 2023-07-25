import {Routes, Route} from "react-router-dom"

import { Applications } from "../Pages/Applications/Applications";


import { Passed } from "../Pages/Passed/Passed";
import { Practical } from "../Pages/Practical/Practical";
import { Dashboard } from "../Pages/Dashboard/Dashboard";

import { Shortlist } from "../Pages/annoucement/Iulaan";
import { Ftdform } from "./Ftdform";



export default function Contents () {

return (


      <Routes>
            <Route path="/" element={ <Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/applications" element={ <Applications/>} ></Route>
       
            <Route path="/passed" element={<Passed />} ></Route>
            <Route path="/practical" element={<Practical />} ></Route>
            <Route path="/shortlist" element={<Shortlist />} ></Route>
            <Route path="/submitftdform" element={<Ftdform />} > </Route>
             
      </Routes>
   


);



}