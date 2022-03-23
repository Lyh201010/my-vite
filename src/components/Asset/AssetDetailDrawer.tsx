import React, { FC } from 'react';
import { Descriptions, Drawer } from 'antd';
import { AssetDetail } from 'src/services/asset.interface';
import './style.less';

interface DrawerProps {
  assetDetail: AssetDetail | undefined;
  visible: boolean;
  onClose: () => void;
}

export const AssetDetailDrawer: FC<DrawerProps> = ({
  assetDetail,
  visible,
  onClose,
}) => {
  return (
    <Drawer
      title={`${assetDetail?.asset_name} 详细信息`}
      placement="right"
      width={600}
      onClose={onClose}
      visible={visible}
    >
      <Descriptions bordered>
        <Descriptions.Item label="资产名称" span={3}>
          {assetDetail?.asset_name}
        </Descriptions.Item>
        <Descriptions.Item label="资产编号" span={3}>
          {assetDetail?.asset_id}
        </Descriptions.Item>
        <Descriptions.Item label="规格型号" span={3}>
          {assetDetail?.asset_id}
        </Descriptions.Item>
        <Descriptions.Item label="领取日期" span={3}>
          {assetDetail?.pickupDate}
        </Descriptions.Item>
        <Descriptions.Item label="保管人" span={3}>
          {assetDetail?.owner}
        </Descriptions.Item>
        <Descriptions.Item label="归属项目" span={3}>
          {assetDetail?.owner_project}
        </Descriptions.Item>
        <Descriptions.Item label="备注信息" span={3}>
          <span>处理器: 2.6 GHz Intel Core i7</span>
          <br />
          <span>内存: 16 GB 2667 MHz DDR4</span>
          <br />
          <span>序列号: CO2FJ2KMMD6P</span>
        </Descriptions.Item>
        <Descriptions.Item label="资产照片">
          <img
            className="asset-detail-img"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <br />
          <img
            className="asset-detail-img"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <br />
          <img
            className="asset-detail-img"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </Descriptions.Item>
      </Descriptions>
    </Drawer>
  );
};
