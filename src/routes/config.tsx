import React from 'react';

import Dashboard from '../pages/Dashboard';
import PendingReceip from '../pages/PendingReceip';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import NotFound from '../pages/NotFound';

export interface IFMenuBase {
  path: string;
  title?: string;
  icon?: string;
  element?: any;
  isMenu?: boolean;
}

export interface IFMenu extends IFMenuBase {
  children?: IFMenu[];
}

const routesConfig: IFMenu[] = [
  // 菜单相关路由
  {
    path: '/',
    title: '首页',
    icon: 'HomeOutlined',
    element: <Dashboard />,
    isMenu: true,
  },
  {
    path: '/asset/management',
    title: '日常管理',
    icon: 'CalendarOutlined',
    isMenu: true,
    children: [
      {
        path: '/asset/management/myself',
        title: '资产清单',
        element: <Page2 />,
      },
      {
        path: '/asset/management/change',
        title: '资产转移',
        element: <Page3 />,
      },
      {
        path: '/asset/management/input',
        title: '资产登记',
        element: <Page1 />,
      },
      {
        path: '/asset/management/manage-all',
        title: '资产管理',
        element: <Page2 />,
      },
    ],
  },
  {
    path: '/asset/inventory',
    title: '盘点',
    icon: 'BookOutlined',
    isMenu: true,
    children: [
      {
        path: '/asset/inventory/management',
        title: '盘点管理',
        element: <Page2 />,
      },
      {
        path: '/asset/inventory/report',
        title: '资产报表',
        element: <Page3 />,
      },
    ],
  },
  {
    path: '/asset/setting',
    title: '系统设置',
    icon: 'SettingOutlined',
    isMenu: true,
    children: [
      { path: '/asset/setting/people', title: '成员管理', element: <Page2 /> },
      {
        path: '/asset/setting/department',
        title: '部门管理',
        element: <Page3 />,
      },
      {
        path: '/asset/setting/category',
        title: '资产类别',
        element: <Page1 />,
      },
    ],
  },
  { path: '/pendingreceipt', element: <PendingReceip />, isMenu: false },
  { path: '*', element: <NotFound />, isMenu: false },
];

export default routesConfig;
