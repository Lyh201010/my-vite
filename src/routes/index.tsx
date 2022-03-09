import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import NotFound from '../pages/NotFound';

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <Page1 /> },
    { path: "/page2", element: <Page2 /> },
    { path: "/page3", element: <Page3 /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "*", element: <Navigate to='/not-found'/> }
  ]);
}
