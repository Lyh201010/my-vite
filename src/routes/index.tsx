import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routesConfig, { IFMenu } from './config';

// 路由处理方式
const routersHandler = (routesConfig: IFMenu[]): IFMenu[] => {
  const routers: IFMenu[] = routesConfig.map((item) => {
    if (item.children) {
      item.children = routersHandler(item.children);
    }
    if (item.element) {
      item.element = (
        <Suspense fallback={<div>加载中...</div>}>{item.element}</Suspense>
      );
    }

    return item;
  });
  return routers;
};

const generateRouters = (routesConfig: IFMenu[]): IFMenu[] => {
  const routers = routersHandler(routesConfig);
  return routers;
};

export const Routes = () => {
  return useRoutes(generateRouters(routesConfig));
};
