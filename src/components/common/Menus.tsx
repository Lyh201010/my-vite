import { Menu, MenuProps } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as Icons from '@ant-design/icons';

import routesConfig, { IFMenu } from '../../routes/config';

type SiderMenuProps = MenuProps & {
  onClick: (e: any) => void;
  selectedKeys: string[];
  openKeys?: string[];
  onOpenChange: (keys: string[]) => void;
};

const Menus = ({ ...props }: SiderMenuProps) => {
  const [t] = useTranslation();

  const renderMenuItem = (item: IFMenu) => {
    const MenuIcon = Icons[item.icon];
    return (
      <Menu.Item icon={item.icon && <MenuIcon />} key={item.path}>
        <Link to={item.path}>
          <span className="nav-text">{t(item.title)}</span>
        </Link>
      </Menu.Item>
    );
  };

  const renderSubMenu = (item: IFMenu) => {
    const MenuIcon = Icons[item.icon];
    return (
      <Menu.SubMenu
        key={item.path}
        icon={item.icon && <MenuIcon />}
        title={<span className="nav-text">{t(item.title)}</span>}
      >
        {item.children!.map((sub) =>
          sub.children ? renderSubMenu(sub) : renderMenuItem(sub)
        )}
      </Menu.SubMenu>
    );
  };

  return (
    <Menu mode="inline" theme="dark" {...props}>
      {routesConfig
        .filter((item) => item.path !== '*')
        .map((configItem) => {
          return configItem.children!
            ? renderSubMenu(configItem)
            : renderMenuItem(configItem);
        })}
    </Menu>
  );
};

export default Menus;
