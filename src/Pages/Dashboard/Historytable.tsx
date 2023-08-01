import { Table } from "antd"
import { useState} from "react"


export const HistoryTable = () => {
   

   



    const [data, setData] = useState([
        {
            dateTime: '23/33/33',
            Iulaan: 'HR/JB/20210',
            jobPost: 'Procurement Officer',
            deadline: '12/06/2023',
            idcard: 'A235689',
            fullName: 'Ahmed Haamid',
            attachments: '3',
            noofappforthepost: '20',
            location: 'Male - DJA',
    }, 
        {
            dateTime: '23/33/23',
            Iulaan: 'HR/JB/9999',
            jobPost: 'ICT Officer',
            deadline: '14/06/2023',
            idcard: 'A3030303',
            fullName: 'Waheed Haamid',
            attachments: '2',
            noofappforthepost: '7',
            location: 'Male - DJA',
    }, 
    ])


    const columns = [
        {
            key: '1',
            title: 'Date Time',
            dataIndex: 'dateTime'
        }, {
            key: '5',
            title: 'Iulaan No',
            dataIndex: 'Iulaan'
        },
        {
            key: '3',
            title: 'Job Post',
            dataIndex: 'jobPost'
        },
        {
            key: '3',
            title: 'Dead Line',
            dataIndex: 'deadline'
        },

        {
            key: '2',
            title: 'ID Card',
            dataIndex: 'idcard'
        },
        
        {
            key: '4',
            title: 'Full Name',
            dataIndex: 'fullName'
        },
            {
                key:'8',
                title: 'Attachments',
                dataIndex: 'attachments'
            }
        , {
            key: '6',
            title: 'No. Applcnt for Post',
            dataIndex: 'noofappforthepost'
        } , {
            key: '7',
            title: 'Location',
            dataIndex: 'location'
        }
        , 
     
    ]

    return (
            
        

        <div>




        <Table
        columns={columns}
        dataSource={data}
        pagination ={false}
        
        
        >


        </Table>

        </div>
       


    )
}
