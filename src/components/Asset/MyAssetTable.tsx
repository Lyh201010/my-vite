import React, { useEffect, useMemo, useState } from 'react';
import { Table, TableColumnsType, TablePaginationConfig, Tag } from 'antd';
import { useTranslation } from 'react-i18next';

import { AssetDetail } from 'src/services/asset.interface';

import { AssetDetailDrawer } from './AssetDetailDrawer';
import { get } from '../../utils/request';

interface PaginationProp {
  pageSize: number;
  current: number;
  total: number;
}

export const MyAssetTable = () => {
  const { t } = useTranslation();

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [assetDetail, setAssetDetail] = useState<AssetDetail>();

  const showAssetDetail = (record: AssetDetail) => {
    setAssetDetail(record);
    setVisible(true);
  };

  const columns = useMemo<TableColumnsType<AssetDetail>>(
    () => [
      {
        title: t('资产'),
        dataIndex: 'asset_name',
        key: 'asset_name',
        render: (text: string, record) => (
          <a onClick={() => showAssetDetail(record)}>{text}</a>
        ),
      },
      {
        title: t('资产编号'),
        dataIndex: 'asset_id',
        key: 'asset_id',
      },
      {
        title: t('资产类别'),
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: t('数量'),
        dataIndex: 'amount',
        key: 'amount',
      },
      {
        title: t('领取日期'),
        dataIndex: 'pickupDate',
        key: 'pickupDate',
      },
      {
        title: t('资产状态'),
        key: 'status',
        dataIndex: 'status',
        render: (status: number) => {
          {
            let color = '';
            let text = '';

            switch (status) {
              case 1:
                color = 'green';
                text = '正常使用';
                break;
              case 2:
                color = 'gold';
                text = '正在报修';
                break;
              case 3:
                color = 'blue';
                text = '正在维修';
                break;
              case 4:
                color = 'red';
                text = '正在退还';
                break;
            }
            return (
              <Tag color={color} key={status}>
                {text.trim()}
              </Tag>
            );
          }
        },
      },
    ],
    [t]
  );

  const fetch = (page: PaginationProp) => {
    get('api/myAsset', {})
      .then((response: any) => {
        setLoading(false);
        setPagination((prevPagination) => ({
          ...prevPagination,
          total: response?.data.length,
        }));
        setData(
          response?.data.slice(
            (page.current - 1) * page.pageSize,
            page.current * page.pageSize
          )
        );
      })
      .catch((error: unknown) => console.log(error));
  };

  const handleTableChange = (p: TablePaginationConfig) => {
    const pager = p as PaginationProp;
    setPagination((prevPagination) => ({
      ...prevPagination,
      current: pager.current,
      pageSize: pager.pageSize,
    }));
    fetch(pager);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    setLoading(true);
    fetch(pagination);
  }, []);

  return (
    <>
      <Table
        loading={loading}
        pagination={pagination}
        columns={columns}
        dataSource={data}
        onChange={(page: TablePaginationConfig) => handleTableChange(page)}
      />
      <AssetDetailDrawer
        assetDetail={assetDetail}
        visible={visible}
        onClose={onClose}
      />
    </>
  );
};
