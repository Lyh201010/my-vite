import React, { useEffect, useState } from 'react';
import { Badge, Card, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const RightCards = () => {
  const { t } = useTranslation();
  const [pendingReceipt, setPendingReceipt] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    console.log(random);
    setPendingReceipt(random % 2 === 0 ? random : 0);
  }, []);

  const jumpPendingReceipt = () => {
    if (!pendingReceipt) {
      Modal.confirm({
        title: t('确认通知'),
        icon: <ExclamationCircleOutlined />,
        content: t('您没有待签收的资产，确认要跳转到待签收页面？'),
        okText: t('确认'),
        cancelText: t('取消'),
        onOk: () => navigate('/pendingreceipt'),
      });
    } else {
      navigate('/pendingreceipt');
    }
  };

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
      <Card
        title="待签收资产"
        extra={<a onClick={() => jumpPendingReceipt()}>{'查看待签收资产 >'}</a>}
      >
        <div className="right-second-card">
          <Badge offset={[6, 0]} dot={pendingReceipt !== 0}>
            待签收资产
          </Badge>
          <div>{pendingReceipt}</div>
        </div>
      </Card>
    </>
  );
};
