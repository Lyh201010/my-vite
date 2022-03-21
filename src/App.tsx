import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.less';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import './App.less';
import { usePrevious } from 'ahooks';

import { Routes } from './routes';
import Menus from './routes/Menus';

const { Header, Sider, Content } = Layout;
interface IMenu {
  openKeys: string[];
  selectedKey: string;
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState<IMenu>({ openKeys: [''], selectedKey: '' });
  const prePathname = usePrevious(location.pathname);

  function checkIsMobile() {
    const clientWidth = window.innerWidth;
    return clientWidth <= 992;
  }

  const handleResize = (isMobile: boolean) => {
    setCollapsed(isMobile);
  };

  function resizeListener() {
    let timer: NodeJS.Timeout | null = null;
    const delay = 100;
    // 有新的触发
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      handleResize(checkIsMobile());
    }, delay);
  }

  useEffect(() => {
    const recombineOpenKeys = (openKeys: string[]) => {
      let i = 0;
      let strPlus = '';
      const tempKeys: string[] = [];

      // 多级菜单循环处理
      while (i < openKeys.length) {
        strPlus += openKeys[i];
        tempKeys.push(strPlus);
        i++;
      }
      return tempKeys;
    };
    const getOpenAndSelectKeys = () => {
      return {
        openKeys: recombineOpenKeys(
          location.pathname.match(/[/](\w+)/gi) || []
        ),
        selectedKey: location.pathname,
      };
    };

    if (prePathname !== location.pathname) {
      setMenu(getOpenAndSelectKeys());
    }
  }, [prePathname, location.pathname, collapsed]);

  const menuClick = (e: any) => {
    setMenu((state) => ({ ...state, selectedKey: e.key }));
  };

  const openMenu = (keys: string[]): void => {
    const latestOpenKey = keys.find((key) => menu.openKeys.indexOf(key) === -1);
    setMenu((state) => ({
      ...state,
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    }));
  };

  useEffect(() => {
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menus
          onClick={menuClick}
          mode="inline"
          selectedKeys={[menu.selectedKey]}
          openKeys={menu.openKeys}
          onOpenChange={openMenu}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
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
  );
};

export default App;
