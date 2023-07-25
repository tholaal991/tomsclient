import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled
} from '@ant-design/icons'

export const consumptionDefProps =  {
    route: {
        path: '/',
        routes: [
          {
            path: '/welcome',
            name: 'Welcome',
            icon: <SmileFilled />,
            component: './Welcome',
          },
          {
            path: '/admin',
            name: '管理页',
            icon: <CrownFilled />,
            access: 'canAdmin',
            component: './Admin',
            routes: [
              {
                path: '/admin/sub-page1',
                name: '一级页面',
                icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                component: './Welcome',
              },
              {
                path: '/admin/sub-page2',
                name: '二级页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: '/admin/sub-page3',
                name: '三级页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
           
          },
        ],
      },
      location: {
        pathname: '/',
      },
      appList: [
        {
          icon: <ChromeFilled/>,
          title: 'Fit To Drive',
          desc: 'Fit to drive form. and Reports',
          url: 'https://ant.design',
        },
        {
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
          title: 'Ferry Log',
          desc: 'Ferry Log App, Reports',
          url: 'https://antv.vision/',
          target: '_blank',
        },
        {
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
          title: 'Incident - Accident',
          desc: 'Accident - Incident Report',
          url: 'https://procomponents.ant.design/',
        },
        {
          icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
          title: 'Fuel Consumption',
          desc: 'Fuel Consumption Form and Report',
          url: 'https://umijs.org/zh-CN/docs',
        },
    
      ],


}