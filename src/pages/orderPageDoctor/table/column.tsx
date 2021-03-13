import React from 'react';
import logoSrc from '@/assets/login/logo.png';

const columns = [
  {
    title: '姓名',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '预约时间',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '预约类型',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: '就诊类型',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: '医生',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: '科室',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: '预约项目',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: '就诊状态',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: '备注',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '接诊',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '检查',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '转诊',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '收费',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '病例',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '预约',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: '治疗完成',
    dataIndex: 'address',
    key: '7',
    width: 150,
    render: (record) => {
      return (
        <img 
          src={logoSrc} 
          alt="" 
          style={{width: 20, height: 20}}
          onClick={() => {
            console.log(record)
          }}
        />
      )
    }
  },
];
export default columns