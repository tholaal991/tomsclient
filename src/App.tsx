<<<<<<< Updated upstream
import 'antd/dist/reset.css';
import './App.css';
import AppMenu from './components/menu';
import Contents from './components/content';
import {useNavigate} from 'react-router-dom'
import { Headers } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from 'antd';


import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Switch } from 'antd';
import { useRef, useState } from 'react';
import customMenuDate from './customMenu';
import { icons } from 'antd/es/image/PreviewGroup';
import { CheckMarkSVG } from './SVG/CheckMark.SVG';
import { MtccSVG } from './SVG/MtccSVG';



const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

let serviceData: any[] = customMenuDate;



const { Content, Header} = Layout;

function App() {

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









  return (

  

    <>
      <ProLayout
        style={{
          height: '100vh',display: 'flex'
        }}
        actionRef={actionRef}
        suppressSiderWhenMenuEmpty={toggle}
        title='T.O.M.S'
        logo={<MtccSVG/>}
        menu={
          {
          request: async () => {
            await waitTime(2000);
            return serviceData;
          },
        }}
        location={{
          pathname: '/welcome/welcome',
        }}
      >



             <Contents/>
        
       

          {/* <div>
            Hide Sider when menu fetched from server is empty Sider：
            <Switch checked={toggle} onChange={setToggle} />
          </div>
          Hello World
          <Button
            style={{
              margin: 8,
            }}
            onClick={() => {
              serviceData = customMenuDate;
              actionRef.current?.reload();
            }}
          >
            Refresh menu
          </Button>
          <Button
            style={{
              margin: 8,
            }}
            onClick={() => {
              serviceData = [];
              actionRef.current?.reload();
            }}
          >
            Refresh menu (empty  data)
          </Button> */}
       
      </ProLayout>
    </>
   























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
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FtdLayout } from './ftd/layout.ftd';
import { HomeLayout } from './home/layout.home';
import { ProCard } from '@ant-design/pro-components';




function App() {
  return (
    <div style={{
      height: '100vh'
    }} >
        

        <ProCard title='Pending Approval' className='approval_card'>
           

        </ProCard>
     

        <div className='approval_card'>
                <span> test </span>
        </div>


     

        {/* <ProLayout
        menuItemRender={(item, dom) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            pre {dom}
          </div>
        )}
        subMenuItemRender={(_, dom) => (   
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            pre {dom}
          </div>
        )}
        title="Remax"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div
            id="customize_menu_header"
            style={{
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            onClick={() => {
              window.open('https://remaxjs.org/');
            }}
          >
            {logo}
            {title}
          </div>
        )}
        {...defaultProps}
        location={{
          pathname: '/welcome',
        }}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
 */}


    </div>
>>>>>>> Stashed changes
  );
}

export default App;
