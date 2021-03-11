import React, { useState,useEffect } from 'react';
import { Row, Col, Form, Input, Button,DatePicker,Select,Space,Table} from 'antd';
import styles from './index.less';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';

import AddOrder from './component/addOrder/index'

import logoSrc from '@/assets/logo.png';
import columns from './table/column';

const OrderPage = () => {
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState([])
  const [pageIndex, setPageIndex] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pageTotal, setPageTotal] = useState(100)
  const [addOrderVisibe, setAddOrderVisibe] = useState(true)

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
  const onFinish = (values: any) => {
    console.log('Success:', values);
    console.log('Success:', moment(values.date).format('YYYY-MM-DD'));
  };
  const onReset = () => {
    form.resetFields();
  };
  const pageChange = (current:number, pageSize:number) => {
    setPageIndex(current)
    setPageSize(pageSize)
  }
  const onShowSizeChange = (current:number, pageSize:number) => {
    setPageIndex(current)
    setPageSize(pageSize)
  }
  return (
    <div className={styles.orderPageWrap}>
        <div className={styles.tagWrap}>
          <div className={styles.tagItem}>
            <Row>
              <Col span="20">今日接诊</Col>
              <Col span="4">
                <img src={logoSrc} alt=""/>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span="20">20人</Col>
            </Row>
          </div>
          <div className={styles.tagItem}>
            <Row>
              <Col span="20">初诊患者</Col>
              <Col span="4">
                <img src={logoSrc} alt=""/>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span="20">20人</Col>
            </Row>
          </div>
          <div className={styles.tagItem}>
            <Row>
              <Col span="20">复诊患者</Col>
              <Col span="4">
                <img src={logoSrc} alt=""/>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span="20">20人</Col>
            </Row>
          </div>
          <div className={styles.tagItem}>
            <Row>
              <Col span="20">今日诊金</Col>
              <Col span="4">
                <img src={logoSrc} alt=""/>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span="20">20人</Col>
            </Row>
          </div>
        </div>
        <div className={styles.searchWrap}>
          <Form
            layout="inline"
            onFinish={onFinish}
            form={form}
          >
            <Form.Item label="DatePicker" name="date">
              <DatePicker locale={locale} />
            </Form.Item>
            <Form.Item label="患者" name="patientMsg">
              <Input placeholder="请输入患者姓名/手机号" />
            </Form.Item>
            <Form.Item label="患者" name="type">
              <Select style={{width: 200}} placeholder="请选择">
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Space size={20}>
                <Button type="primary" htmlType="submit">搜索</Button>
                <Button onClick={onReset} >重置</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.tableTitleWrap}>
          <div className={styles.tableTitle}>预约列表</div>
          <Button onClick={() =>{setAddOrderVisibe(true)}}>新建预约</Button>
        </div>
        <div className={styles.tableWrap}>
          <Table 
            columns={columns} 
            dataSource={tableData} 
            scroll={{ x: 1500, y: 300 }}
            pagination={{ 
              position: ['bottomCenter'],
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
        <AddOrder 
          visible={addOrderVisibe} 
          changeVisible={(visible:boolean) => {
            setAddOrderVisibe(visible)
          }}
        />
    </div>
  )
}

export default OrderPage