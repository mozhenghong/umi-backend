import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, Select, Space, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.less';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';

import AddOrder from './component/addOrder/index'

import logoSrc from '@/assets/login/logo.png';
import oneSrc from '@/assets/layout/one.png';
import twoSrc from '@/assets/layout/two.png';
import threeSrc from '@/assets/layout/three.png';
import fourSrc from '@/assets/layout/four.png';

const OrderPage = () => {
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState([])
  const [pageIndex, setPageIndex] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pageTotal, setPageTotal] = useState(100)
  const [addOrderVisibe, setAddOrderVisibe] = useState(false)

  useEffect(() => {
    const data = []
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    setTableData(data)
  }, [])
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
      render: () => {
        <a>action</a>
      },
    },
  ];
  const onFinish = (values: any) => {
    console.log('Success:', values);
    console.log('Success:', moment(values.date).format('YYYY-MM-DD'));
  };
  const onReset = () => {
    form.resetFields();
  };
  const pageChange = (current: number, pageSize: number) => {
    setPageIndex(current)
    setPageSize(pageSize)
  }
  const onShowSizeChange = (current: number, pageSize: number) => {
    setPageIndex(current)
    setPageSize(pageSize)
  }
  return (
    <div className="orderPageWrap">
      <div className="tagWrap">
        <div className="tagItem">
          <img src={oneSrc} alt="" />
          <div>
            <div>
              今日接诊
              </div>
            <div>
              <span className="tag-content">20</span>
              人
              </div>
          </div>
        </div>
        <div className="tagItem">
          <img src={twoSrc} alt="" />
          <div>
            <div>
              初诊患者
              </div>
            <div>
              <span className="tag-content">20</span>
              人
              </div>
          </div>
        </div>
        <div className="tagItem">
          <img src={threeSrc} alt="" />
          <div>
            <div>
              复诊患者
              </div>
            <div>
              <span className="tag-content">20</span>
              人
              </div>
          </div>
        </div>
        <div className="tagItem">
          <img src={fourSrc} alt="" />
          <div>
            <div>
              今日诊金
            </div>
            <div>
              <span className="tag-content">20</span>
              人
              </div>
          </div>
        </div>
      </div>
      <div className="searchWrap">
        <Form
          layout="inline"
          onFinish={onFinish}
          form={form}
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, display: 'flex' }}>
              <Form.Item label="日期" name="date">
                <DatePicker locale={locale} />
              </Form.Item>
              <Form.Item label="患者" name="patientMsg">
                <Input placeholder="请输入患者姓名/手机号" />
              </Form.Item>
              <Form.Item label="就诊类型" name="type">
                <Select style={{ width: 200 }} placeholder="请选择">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item>
                <Button onClick={onReset} style={{ marginRight: '8px' }}>重置</Button>
                <Button type="primary" htmlType="submit">搜索</Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
      <div className="main-table-wrap">
        <div className="tableTitleWrap">
          <div className="tableTitle">预约列表</div>
          <Button
            className="add-order-button"
            icon={<PlusOutlined />}
            onClick={() => { setAddOrderVisibe(true) }}
          >新建预约</Button>
        </div>
        <div className="tableWrap">
          <Table
            columns={columns}
            dataSource={tableData}
            scroll={{ x: 1500, y: 300 }}
            pagination={{
              // position: ['bottomCenter'],
              showSizeChanger: true,
              showQuickJumper: true,
              onShowSizeChange: onShowSizeChange,
              pageSize: pageSize,
              current: pageIndex,
              total: pageTotal,
              onChange: pageChange,
              showTotal: total => {
                return `共 ${total} 条`;
              },
            }}
          />
        </div>
      </div>
      <AddOrder
        visible={addOrderVisibe}
        changeVisible={(visible: boolean) => {
          setAddOrderVisibe(visible)
        }}
      />
    </div>
  )
}

export default OrderPage