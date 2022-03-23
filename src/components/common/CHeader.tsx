import React, { FC } from 'react';
import { Layout, Space } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

interface CHeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

export const CHeader: FC<CHeaderProps> = ({ collapsed, toggle }) => {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <Space>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: toggle,
          }
        )}
      </Space>
    </Header>
  );
};
