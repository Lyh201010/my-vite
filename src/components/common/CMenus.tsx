import { Menu } from 'antd';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as Icons from '@ant-design/icons';

import routesConfig, { IFMenu } from '../../routes/config';

interface IMenu {
  openKeys: string[];
  selectedKey: string;
}
interface MenuInfo {
  key: string;
  keyPath: string[];
}

const Menus = () => {
  const [t] = useTranslation();
  const [menu, setMenu] = useState<IMenu>({ openKeys: [''], selectedKey: '' });

  const menuClick = (e: MenuInfo) => {
    setMenu((state) => ({ ...state, selectedKey: e.key }));
  };

  const openMenu = useCallback(
    (keys: string[]): void => {
      const latestOpenKey = keys.find(
        (key) => menu.openKeys.indexOf(key) === -1
      );
      setMenu((state) => ({
        ...state,
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      }));
    },
    [menu.openKeys]
  );

  const renderMenuItem = (item: IFMenu) => {
    const MenuIcon = Icons[item.icon];
    return (
      <Menu.Item icon={item.icon && <MenuIcon />} key={item.path}>
        <Link to={item.path}>
          <span className="nav-text">{t(item?.title || '')}</span>
        </Link>
      </Menu.Item>
    );
  };

  const renderSubMenu = (item: IFMenu) => {
    const MenuIcon = Icons[item?.icon];
    return (
      <Menu.SubMenu
        key={item.path}
        icon={item.icon && <MenuIcon />}
        title={<span className="nav-text">{t(item?.title || '')}</span>}
      >
        {item.children!.map((sub) =>
          sub.children ? renderSubMenu(sub) : renderMenuItem(sub)
        )}
      </Menu.SubMenu>
    );
  };

  return (
    <Menu
      mode="inline"
      theme="dark"
      onOpenChange={openMenu}
      onClick={menuClick}
    >
      {routesConfig
        .filter((item) => item.isMenu)
        .map((configItem) => {
          return configItem.children!
            ? renderSubMenu(configItem)
            : renderMenuItem(configItem);
        })}
    </Menu>
  );
};

export default Menus;
