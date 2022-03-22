import React from 'react';
import { Card, Col, Row, Tabs } from 'antd';

import { RightCards } from './RightCards';
import { MyAsset } from '../../components/Dashboard/MyAsset';
import { MyApply } from '../../components/Dashboard/MyApply';
import './style.less';

export const Dashboard = () => {
  return (
    <>
      <Row className="dashboard" gutter={[16, 16]}>
        <Col span={18}>
          <Card>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="我的资产" key="1">
                <MyAsset />
              </Tabs.TabPane>
              <Tabs.TabPane tab="我的申请" key="2">
                <MyApply />
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
