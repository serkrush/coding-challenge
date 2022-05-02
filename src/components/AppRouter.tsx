import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import {publicRoutes} from '../routes'
import { HOME_ROUTE } from '../utils/consts';

const AppRouter = () => {
  return (
    <Routes>
      {
        publicRoutes.map(
          (onj: any) => <Route key={onj.path} path={onj.path} element={onj.Component} />
        )
      }
      <Route key={'/'} path={'*'} element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter;