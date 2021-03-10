import React from 'react';

const columns = [
  {
    title: '姓名',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '性别',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '年龄',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: '阶段',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: '手机号',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: '创建人',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: '创建时间',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: '诊所',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: '出诊日期',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '预约时间',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '就诊时间',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '医生',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '预约项目',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '消费金额（实收）',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '备注',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
export default columns