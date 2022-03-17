import React, { FC, useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';

import { get } from '../../utils/request';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export const Page2: FC = () => {
  // rowSelection object indicates the need for row selection
  const [data, setData] = useState([]);

  useEffect(() => {
    get('api', {})
      .then((response: any) => {
        setData(response?.data);
      })
      .catch((error: unknown) => console.log(error));
  }, []);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
