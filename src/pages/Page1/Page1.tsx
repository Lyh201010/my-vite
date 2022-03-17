import { Row } from 'antd';
import React from 'react';

import { PageForm } from './PageForm';
import './style.less';

export const Page1 = () => {
  return (
    <Row className="page1-body">
      <PageForm></PageForm>
    </Row>
  );
};
