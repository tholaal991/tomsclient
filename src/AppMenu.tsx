import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;






// import React, { useState } from 'react';
// import { Menu, Layout } from 'antd';
// import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, DashboardOutlined } from '@ant-design/icons';
// import { ApplicationSVG } from './SVG/ApplicationsSVG';
// import { IulaanSVG } from './SVG/IulaanSVG';
// import { PracticalSVG } from './SVG/PracticalSVG';
// import { InterviewSVG } from './SVG/InterviewSVG';
// import { CheckCircleOutlined } from '@ant-design/icons';

// const { Sider } = Layout;
// const { SubMenu } = Menu;

// interface AppMenuProps {
//   menuCollapsed?: boolean;
// }




// export const AppMenu = (prop: AppMenuProps) => {
 
//   return (
//     <Sider  collapsible collapsed={prop.menuCollapsed}  theme='light'>
//     <div className="logo" />
//     <Menu theme="light" hidden defaultSelectedKeys={['1']}>
//       <Menu.Item key="1" >
//         Dashboard
//       </Menu.Item>
//       <SubMenu key="2" title="Fit-to-Drive">
//         <Menu.Item key="2.1">Submit FTD</Menu.Item>
//         <Menu.Item key="2.2">Approvals</Menu.Item>
//       </SubMenu>
//       <Menu.Item key="3" >
//         Applications
//       </Menu.Item>
//       <Menu.Item key="4">
//         Iulaan
//       </Menu.Item>
//       <SubMenu key="5" title="Workflow">
//         <Menu.Item key="5.1">Practical</Menu.Item>
//         <Menu.Item key="5.2">Interview</Menu.Item>
//         <Menu.Item key="5.3">Passed</Menu.Item>
//       </SubMenu>
//     </Menu>
    
//   </Sider>
//   );
// };

// export default AppMenu;




// // import React from 'react';
// // import { FC, useState } from 'react';
// // import { Menu, MenuProps, Button,  Layout, Space} from 'antd';
// // import type { ItemType, MenuItemType, SubMenuType,  } from "antd/es/menu/hooks/useItems";
// // import 'antd/dist/reset.css';
// // import '../App.css';
// // import {MenuFoldOutlined,
// //   MenuUnfoldOutlined, HomeOutlined, BarChartOutlined, SettingOutlined, ImportOutlined, UserOutlined,
// // DashboardOutlined, TeamOutlined, RocketOutlined, IconProvider, SendOutlined, EnterOutlined, SwapOutlined, ShoppingCartOutlined, ShoppingFilled, ShoppingOutlined, CheckCircleOutlined} from '@ant-design/icons'
// // import Icon from '@ant-design/icons/lib/components/Icon';
// // import { ApplicationSVG } from '../SVG/ApplicationsSVG';
// // import { hover } from '@testing-library/user-event/dist/hover';

// // import { IulaanSVG } from '../SVG/IulaanSVG';
// // import { PracticalSVG } from '../SVG/PracticalSVG';
// // import { InterviewSVG } from '../SVG/InterviewSVG';
// // import { RecruitSVG } from '../SVG/RecruitSVG';
// // import { HiringProcessSVG } from '../SVG/HiringSVG';



// // const { Header, Sider, Content} = Layout;
// // type MenuItem = Required<MenuProps>['items'][number];

// // function getItem(
// //   label: React.ReactNode,
// //   key: React.Key,
// //   icon?: React.ReactNode,
// //   children?: MenuItem[],
// //   type?: 'group',
// // ): MenuItem {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //     type,
// //   } as MenuItem;
// // }

// // const items: MenuProps['items'] = [
  
  
// //   getItem('Dashboard','/dashboard',<DashboardOutlined style={{fontSize:'21px'}}/>),

// //   getItem('Fit-to-Drive','sub1', <Icon component={ApplicationSVG} />,[
// //     getItem('Submit FTD','/submitftdform',<Icon component={ApplicationSVG} />),
// //     getItem('Approvals', '/practical', <Icon component={PracticalSVG} />),
// //   ]),

  
// //   getItem('Applications', '/applications', <Icon component={ApplicationSVG} />),
// //   getItem('Iulaan', '/shortlist',<Icon component={IulaanSVG} />),
  
// //   getItem(' Workflow', 'sub3', <Icon component={HiringProcessSVG} style={{paddingTop: '.3vh'}}/>, [
// //     getItem('Practical', '/practical', <Icon component={PracticalSVG} />),
// //     getItem('Interview', '/interview',  <Icon component={InterviewSVG} />),
// //     getItem('Passed','/ftdform',<CheckCircleOutlined />),
// //    ]),

// // ]


// // type AppMenuProps = {
// //     onClick?: any;
// // }

// // function AppMenu(props: AppMenuProps) {
 
 
  
// // const [collapsed, setCollapsed] = useState(false);

// //   const toggleCollapsed = () => {
// //     setCollapsed(!collapsed);
// //   };

// //   const onClick: MenuProps['onClick'] = (e) => {
// //     console.log('click', e )
// //   }
// //   return (

// //     // radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
// //     // 'linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))'
// //     <div >
     
      

// //       <div>
// //       <Sider trigger={null} collapsible collapsed={collapsed}>
// //         <Menu 
// //         onClick={props.onClick}
// //         title='test'
// //         defaultSelectedKeys={[window.location.pathname]}
// //         defaultOpenKeys={['one']}
// //         mode='inline'
// //         items= {items}
// //         // style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
// //         />
// //       </Sider>
    
// //       </div>
     
            
            
// //     </div>
// //   );
// // }

// // export default AppMenu;
