import React, { FC } from 'react';
import { Card } from 'antd';

interface PendingReceipProps {
  img_url: string;
  asset_name: string;
  asset_id: string;
  owner: string;
  transfer_date: string;
}

interface AssetCardProps {
  assetInfo: PendingReceipProps;
}

export const PendingReceipCard: FC<AssetCardProps> = ({ assetInfo }) => {
  return (
    <Card
      hoverable
      style={{ width: 'calc(25% - 20px)', minWidth: 260 }}
      cover={<img alt="example" src={assetInfo?.img_url} />}
    >
      <span>{assetInfo?.asset_name}</span>
      <span>{assetInfo?.asset_id}</span>
      <span>{assetInfo?.owner}</span>
      <span>{assetInfo?.transfer_date}</span>
    </Card>
  );
};
