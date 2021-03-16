import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, Form, Input, Select, Upload, DatePicker, Radio, message, Checkbox, Menu, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.less';
import moment from 'moment';

import avatorSrc from '@/assets/layout/avator.png'

const { TextArea } = Input;

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 19 },
};

interface Visible {
  visible: boolean,
  changeVisible: Function,
  record: object
}
const TransferModal: React.FC<Visible> = (props) => {
  const [form] = Form.useForm();
  const { visible, changeVisible, record } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(visible)
  }, [visible])

  const handleOk = () => {
    setIsModalVisible(false);
    changeVisible(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    changeVisible(false)
  };

  return (
    <Modal
      title="转诊"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={832}
      footer={
        <div>
          <Button onClick={() => { changeVisible(false) }}>取消</Button>
          <Button
            type="primary" htmlType="submit" onClick={() => form.submit()}>接诊</Button>
        </div>
      }
    >
      <div className="reception-modal-wrap">
        <div className="title">今日信息</div>
        <Row style={{ display: 'flex', alignItems: 'center', paddingBottom: '33px' }}>
          <Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={avatorSrc} alt="" className="avator" />
            <div>
              <div className="name">名字</div>
              <div>1876569099</div>
            </div>
          </Col>
          <Col span={10}>
            上次就诊时间：2021-01-02
            </Col>
          <Col span={4}>
            医生：xxxx
            </Col>
        </Row>
        <div className="title">今日预约</div>
        <Row style={{ display: 'flex', alignItems: 'center', paddingBottom: '45px' }}>
          <Col span={6}>
            <div className="order-time">
              11:00-XXXX
            </div>
          </Col>
          <Col span={8}>
            <Radio.Group onChange={(e) => { console.log(e.target.value) }} >
              <Radio value={1}>初诊</Radio>
              <Radio value={2}>复诊</Radio>
            </Radio.Group>
          </Col>
        </Row>
        <div className="title">接诊医生</div>
        <Row style={{paddingBottom:'15px'}}>
          <Col span={8}>
            <DatePicker 
              style={{width: 216}}  
              placeholder="选择时间"
            />
          </Col>
          <Col span={8}>
            <Select style={{ width: 216}} placeholder="选择诊所">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Col>
          <Col span={8}>
          <Select style={{ width: 216}} placeholder="选择科室">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Col>
        </Row>
        <div className="patient-select">
          <Radio.Group onChange={(e) => { console.log(e.target.value) }} >
              <Radio value={1}>初诊</Radio>
              <Radio value={2}>复诊</Radio>
          </Radio.Group>
        </div>
        <Row>
          <Col span={2}>
            <span className="remark">备注</span>
          </Col>
          <Col span={21}>
            <TextArea rows={4} />
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default TransferModal