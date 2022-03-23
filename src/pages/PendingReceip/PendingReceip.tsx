import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './style.less';
import { PendingReceipCard } from '../../components/Apply/PendingReceipCard';

export const PendingReceip = () => {
  const { t } = useTranslation();

  const pendingReceip = [
    {
      img_url:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      asset_name: 'MacBook Pro',
      asset_id: 'PHONE 0025854559',
      owner: 'Samantha Li',
      transfer_date: '2022-03-14',
    },
    {
      img_url:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      asset_name: 'MacBook Pro',
      asset_id: 'PHONE 0025854560',
      owner: 'Leo',
      transfer_date: '2022-03-14',
    },
    {
      img_url:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      asset_name: 'MacBook Pro',
      asset_id: 'PHONE 0025854561',
      owner: 'Louis',
      transfer_date: '2022-03-14',
    },
    {
      img_url:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      asset_name: 'MacBook Pro',
      asset_id: 'PHONE 0025854562',
      owner: 'Timothy',
      transfer_date: '2022-03-14',
    },
    {
      img_url:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      asset_name: 'MacBook Pro',
      asset_id: 'PHONE 0025854563',
      owner: 'Ali',
      transfer_date: '2022-03-14',
    },
    {
      img_url:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      asset_name: 'MacBook Pro',
      asset_id: 'PHONE 0025854564',
      owner: 'Lii',
      transfer_date: '2022-03-14',
    },
  ];

  useEffect(() => {}, []);

  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={t('待签收资产')} key="1">
          <div className="pendingReceip-cards">
            {pendingReceip.map((assetInfo) => (
              <PendingReceipCard assetInfo={assetInfo} />
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={t('资产签收记录')} key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
