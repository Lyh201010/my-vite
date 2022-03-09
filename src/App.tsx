import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.less';
import '@/App.less';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from './routes';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App= ()=> {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(()=> {
    console.log(location)
  })

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  
  const changeRoute = (pathName: string)=> {
    navigate(pathName);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <a onClick={()=>changeRoute('/')}>Home</a>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <a onClick={()=>changeRoute('/page2')}>Page 2</a>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            <a onClick={()=>changeRoute('/page3')}>Page 3</a>
          </Menu.Item>
          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="4">Option 9</Menu.Item>
            <Menu.Item key="5">Option 10</Menu.Item>
            <SubMenu key="sub12" title="Submenu">
              <Menu.Item key="6">Option 11</Menu.Item>
              <Menu.Item key="7">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
