import { Card, Layout, Space, Statistic, Typography } from "antd";
import { GenericModalForm } from "../../components/GenericCreateModalForm";
import { PageTitle } from "../../components/pageTitle";
import { CreateItem } from "../Applications/CreateItem";
import { CheckCircleOutlined, CheckOutlined, FolderOpenOutlined, InboxOutlined, PullRequestOutlined, QuestionCircleFilled, QuestionCircleOutlined, ReconciliationFilled, ReconciliationOutlined, SendOutlined, ShoppingCartOutlined, SwapOutlined } from "@ant-design/icons";
import { HistoryTable } from "./Historytable";
import Icon from "@ant-design/icons/lib/components/Icon";
import { PracticalSVG } from "../../SVG/PracticalSVG";
import { InterviewSVG } from "../../SVG/InterviewSVG";




interface DashboardItemProps {
    title: string;
    value: number;
    item?:any
    mystyle?:any
}





export const Dashboard = () =>{

    const DashboardItem:React.FC<DashboardItemProps> = ({title, value,item,mystyle}) => {
        return (
            <Card style={{marginLeft: 15}}>
            <Space direction="horizontal">
                <div style={{height: 50, width: 50, fontSize: 30, display: "flex", justifyContent: "center"}}> <div style={mystyle}>{item}</div></div>
                <Statistic title={title} value={value} />
            </Space>
            </Card>
        )
    }


    return (
        <div> 
            <PageTitle> Dashboard </PageTitle> 
         <Layout style={{margin: 20}}>
            <Space direction="horizontal" >
                
                   <DashboardItem title="Open" value={233}  item={<FolderOpenOutlined/> }  mystyle={{color: "green"}}/>
                   <DashboardItem title="On Practical" value={233} item={ <Icon component={PracticalSVG}/>} mystyle={{color: "red"}}/>
                   <DashboardItem title="On Interview" value={233} item={<Icon component={InterviewSVG}/>} mystyle={{color: "navy"}}/>
                   <DashboardItem title="Application Submission not Attended" value={233} item={<QuestionCircleOutlined/>} mystyle={{color: "skyblue"}}/>
                   
            </Space>
          
          
           <div style={{marginTop: 40, margin:20, maxWidth: "110vh"}}>
           <Typography.Title level={5}>Activity History </Typography.Title> 
           <HistoryTable/>
           </div>
          
            
            

            </Layout>

           
        </div> 
    );
  
    
}