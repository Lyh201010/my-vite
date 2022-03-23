import React, { useCallback, useEffect, useState } from 'react';
import 'antd/dist/antd.less';
import { Layout } from 'antd';

import './App.less';
import { Routes } from './routes';
import Menus from './components/common/CMenus';
import { CHeader } from './components/common/CHeader';

const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const checkIsMobile = useCallback((): boolean => {
    const clientWidth = window.innerWidth;
    return clientWidth <= 992;
  }, []);

  const resizeListener = useCallback(() => {
    let timer: NodeJS.Timeout | null = null;
    const delay = 100;
    // 有新的触发
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setCollapsed(checkIsMobile());
    }, delay);
  }, [checkIsMobile]);

  useEffect(() => {
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [resizeListener]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menus />
      </Sider>
      <Layout className="site-layout">
        <CHeader collapsed={collapsed} toggle={toggle} />
        <Content
          className="site-layout-background"
          style={{
            margin: '16px',
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
