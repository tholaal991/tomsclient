
import 'antd/dist/reset.css';
import './App.css';
import {useNavigate} from 'react-router-dom'
import { Headers } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from 'antd';


import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Switch } from 'antd';
import { useEffect, useRef, useState } from 'react';
import customMenuDate from './customMenu';
import { icons } from 'antd/es/image/PreviewGroup';
import { CheckMarkSVG } from './SVG/CheckMark.SVG';
import { MtccSVG } from './SVG/MtccSVG';
import Contents from './content';
import { CarFilled, CiCircleFilled } from '@ant-design/icons';
import { OperatorWindow } from './components/FTD/Operator/OperatorWindow';
import React from 'react';



const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

let serviceData: any[] = customMenuDate;



const { Content, Header} = Layout;

export default function App() {

  // const navigate = useNavigate()

  // const onClick = (e:any) => {
  //   if( e.key != undefined){
  //     navigate(e.key)
  //   }
  //   console.log('click loged from parent',  e.key)
  // }
 


  const actionRef = useRef<{
    reload: () => void;
  }>();
  const [toggle, setToggle] = useState(false);


  const [menuData, setMenuData] = useState([])






  return (

  

    <>
      <ProLayout 
        style={{
          height: '100vh',display: 'flex'
        }}
        menuDataRender={() => [{
          path: '/operator',
          name: 'Fit to Drive',
          icon: <CarFilled/>,
          component: '../components/FTD/Operator/OperatorWindow',
          hideChildrenInMenu: false,
          children: [
            {
              path: '/operator',
              name: 'Operator',
              icon: <CarFilled/>,
              component: '../components/FTD/Operator/OperatorWindow',
            },
            {
               path: '/inchargeftd',
  
               name: 'Submit Ftd',
               icon: <CarFilled/>,
               component: '../components/FTD/Incharge-Ftdform-mobile',
            },  
            {
              path: '/approval',
              name: 'FTD Approval Page',
              icon: <CarFilled/>,
              component: '../components/FTD/Incharge-Ftdform-mobile',
           }, 
           {
            path: '/ftdreport',
            name: 'FTD Report',
            icon: <CarFilled/>,
            component: '../components/FTD/Report/TestGenericReport',

         },    {
          path: '/addincharge',
          name: 'Manage Shift Incharge',
          icon: <CarFilled/>,
          component: '../componets/FTD/Report/AddIncharge',

       }, 
         


          ]
        }]}
        actionRef={actionRef}
        suppressSiderWhenMenuEmpty={toggle}
        title='Fit to Drive'
        logo={<MtccSVG/>}
        menu={
          {
          request: async () => {
            await waitTime(2000);
            return serviceData;
          },
        }}
        menuItemRender={(item, dom) => {
          return (
            <a
              onClick={() => {
                if (item.path) {
                  window.location.href = item.path;
                }
              }}
            >
              {dom}
            </a>
          );
        }
        }
        location={
          {
          pathname: '/o',
        }
        }
        rightContentRender={() => (
          <div
            // style={{
            //   marginRight: '1rem',
            // }}
          >
            {/* <Switch
              checked={toggle}
              onChange={() => {
                setToggle(!toggle);
              }}
            /> */}
          </div>
        )}
      >
        <PageContainer
          // content="FTD Module"
          // extra={[
          //   <Button key="3">操作</Button>,
          //   <Button key="2">操作</Button>,
          //   <Button key="1" type="primary">
          //     主操作
          //   </Button>,
          // ]}
          // footer={[
          //   <Button key="3">重置</Button>,
          //   <Button key="2" type="primary">
          //     提交
          //   </Button>,
          // ]}
          // tabList={[

          //   {
          //     tab: '基本信息',
          //     key: 'base',
          //   },
          //   {
          //     tab: '详细信息',
          //     key: 'info',
          //   },
          // ]}
          // tabProps={{
          //   onChange: (key) => {
          //     console.log(key);
          //   },
          // }}
        >
         
       
        </PageContainer>
        

           <Contents/>
        
       

         
       
      </ProLayout>
    </>
  )

        }























    // <Layout>
        
    //     <AppMenu onClick={onClick}/>

    //      <Layout
    //           style={{
    //             //  minWidth: "88vw",
    //             //  minHeight: "92vh", 
                 
    //           }}

    //      >
    //           <Header
    //             style={{
                  
    //               display: "flex",
    //               justifyContent: "center",
    //               height: "6.3vh",
    //               alignItems: "center",
    //               color: 'white'
                  
                  
    //             }}
    //           > 
    //           <Headers>  Fit to Drive Form </Headers></Header>
                
    //      <Content style={{marginLeft: 20, marginRight: 20}}>
    //          <Contents/>
    //      </Content>
       
    //       <Footer />

    //       </Layout>

    // </Layout>
        