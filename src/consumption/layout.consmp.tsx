import React from 'react'
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { consumptionDefProps } from './_defProps.consump';

export const ConsumpLayout: React.FC = ()=> {


    return (<>
         <ProLayout
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
        title="Ferry Log"
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
              // window.open('https://remaxjs.org/');
            }}
          >
            {logo}
            {title}
          </div>
        )}
        {...consumptionDefProps}
        location={{
          pathname: '/welcome',
        }}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    
    </>)
}