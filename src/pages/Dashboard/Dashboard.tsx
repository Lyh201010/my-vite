import React from 'react';
import { Card, Col, Row, Tabs } from 'antd';

import { RightCards } from './RightCards';
import { MyAssetTable } from '../../components/Asset/MyAssetTable';
import { MyApplyTable } from '../../components/Apply/MyApplyTable';
import './style.less';

export const Dashboard = () => {
  return (
    <>
      <Row className="dashboard" gutter={[16, 16]}>
        <Col span={18}>
          <Card>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="我的资产" key="1">
                <MyAssetTable />
              </Tabs.TabPane>
              <Tabs.TabPane tab="我的申请" key="2">
                <MyApplyTable />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col span={6} className="dashboard-right-cards">
          <RightCards />
        </Col>
      </Row>
    </>
  );
};
