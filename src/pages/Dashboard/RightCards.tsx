import React from 'react';
import { Card } from 'antd';

export const RightCards = () => {
  return (
    <>
      <Card
        title="当前资产总量"
        extra={<span className="dashboard-asset-amount">20</span>}
      >
        <div className="right-first-card">
          正常资产<span>16</span>
        </div>
        <div className="right-first-card">
          报修中<span>1</span>
        </div>
        <div className="right-first-card">
          维修中<span>1</span>
        </div>
        <div className="right-first-card">
          退还中<span>2</span>
        </div>
      </Card>
      <Card title="待签收资产" extra={<a>{'查看待签收资产 >'}</a>}>
        <div className="right-second-card">
          <div>待签收</div>
          <div>{1}</div>
        </div>
      </Card>
    </>
  );
};
