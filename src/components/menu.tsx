import React from 'react';
import { FC, useState } from 'react';
import { Menu, MenuProps, Button,  Layout, Space} from 'antd';
import type { ItemType, MenuItemType, SubMenuType,  } from "antd/es/menu/hooks/useItems";
import 'antd/dist/reset.css';
import '../App.css';
import {MenuFoldOutlined,
  MenuUnfoldOutlined, HomeOutlined, BarChartOutlined, SettingOutlined, ImportOutlined, UserOutlined,
DashboardOutlined, TeamOutlined, RocketOutlined, IconProvider, SendOutlined, EnterOutlined, SwapOutlined, ShoppingCartOutlined, ShoppingFilled, ShoppingOutlined, CheckCircleOutlined} from '@ant-design/icons'
import Icon from '@ant-design/icons/lib/components/Icon';
import { ApplicationSVG } from '../SVG/ApplicationsSVG';
import { hover } from '@testing-library/user-event/dist/hover';

import { IulaanSVG } from '../SVG/IulaanSVG';
import { PracticalSVG } from '../SVG/PracticalSVG';
import { InterviewSVG } from '../SVG/InterviewSVG';
import { RecruitSVG } from '../SVG/RecruitSVG';
import { HiringProcessSVG } from '../SVG/HiringSVG';



const { Header, Sider, Content} = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  
  
  getItem('Dashboard','/dashboard',<DashboardOutlined style={{fontSize:'21px'}}/>),

  getItem('Fit-to-Drive','sub1', <Icon component={ApplicationSVG} />,[
    getItem('Submit FTD','/submitftdform',<Icon component={ApplicationSVG} />),
    getItem('Approvals', '/practical', <Icon component={PracticalSVG} />),
  ]),

  
  getItem('Applications', '/applications', <Icon component={ApplicationSVG} />),
  getItem('Iulaan', '/shortlist',<Icon component={IulaanSVG} />),
  
  getItem(' Workflow', 'sub3', <Icon component={HiringProcessSVG} style={{paddingTop: '.3vh'}}/>, [
    getItem('Practical', '/practical', <Icon component={PracticalSVG} />),
    getItem('Interview', '/interview',  <Icon component={InterviewSVG} />),
    getItem('Passed','/ftdform',<CheckCircleOutlined />),
   ]),

]


type AppMenuProps = {
    onClick?: any;
}

function AppMenu(props: AppMenuProps) {
 
 
  
const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e )
  }
  return (

    // radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    // 'linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))'
    <div >
     
      

      <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu 
        onClick={props.onClick}
        title='test'
        defaultSelectedKeys={[window.location.pathname]}
        defaultOpenKeys={['one']}
        mode='inline'
        items= {items}
        // style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        />
      </Sider>
    
      </div>
     
            
            
    </div>
  );
}

export default AppMenu;
