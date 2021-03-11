import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, Form, Input, Select, Upload, DatePicker, Radio, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { changeDependenciesStateTo0 } from 'mobx/dist/internal';
import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function getBase64(img: any, callback: Function) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

interface Visible {
  visible: boolean,
  changeVisible: Function
}
const AddPatient: React.FC<Visible> = (props) => {
  const [form] = Form.useForm();
  const { visible, changeVisible } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

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
  const onFinish = (values: any) => {
    console.log('Rregister', values);
  };

  const handleChange = (info:any) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: string) => {
        setLoading(false)
        setImageUrl(imageUrl)
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>)
  return (
    <Modal
      title="新增患者"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={900}
      footer={
        <div>
          <Button onClick={() => { changeVisible(false) }}>取消</Button>
          <Button
            type="primary" htmlType="submit" onClick={() => form.submit()}>新增患者</Button>
        </div>
      }
    >
      <div className={styles.wrap}>
        <div className={styles.title}>个人信息</div>
        <div className={styles.detail}>
          <Form 
            form={form} 
            name="add-patient" 
            onFinish={onFinish} 
            {...layout}
            initialValues={{
              'name': 'llllll',
              'sex':'b',
            }}
          >
            <Row>
              <Col span="12">
                <Form.Item
                  label="姓名"
                  name="name"
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item
                  label="病历号"
                  name="name"
                >
                  <Input placeholder="请输入姓名" disabled />
                </Form.Item>
                <Form.Item
                  label="出生日期"
                  name="year"
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item label="年龄" style={{ display: 'flex' }}>
                  <Form.Item
                    name="picNum"
                    noStyle
                  >
                    <Input disabled style={{ width: '70%' }} placeholder="请输入验证码" />
                  </Form.Item>
                  <span>
                    未成年
            </span>
                </Form.Item>
                <Form.Item
                  label="身份证号"
                  name="name"
                >
                  <Input placeholder="请输入姓名" />
                </Form.Item>
              </Col>
              <Col span="7">
                <Form.Item
                  label="性别 "
                  name="sex"
                >
                  <Radio.Group>
                    <Radio value="a">男</Radio>
                    <Radio value="b">女</Radio>
                    <Radio value="c">未知</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span="3">
                <Form.Item
                  label=""
                  name="avator"
                >
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <div className={styles.title}>联系方式</div>
            <Row>
              <Col span="12">
                <Form.Item
                  label="手机号"
                  name="mobile"
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
                <Form.Item
                  label="电话"
                  name="phone"
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span="12">
                <Form.Item
                  label="微信"
                  name="wechat"
                >
                  <Input placeholder="请输入" />
                </Form.Item>
                <Form.Item
                  label="邮箱"
                  name="e-mail"
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ display: 'flex' }}>
              <Col span="8">
                <Form.Item
                  name="provience"
                  label="家庭住址"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span="4">
                <Form.Item
                  name="city"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span="4">
                <Form.Item
                  name="area"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item
                  name="address"
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <div className={styles.title}>首诊信息</div>
            <Row>
              <Col span="12">
                <Form.Item
                  label="初诊日期"
                  name="firstDate"
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  label="责任医生"
                  name="doctor"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span="12">
                <Form.Item
                  label="诊所"
                  name="merchant"
                >
                  <Input placeholder="请输入" />
                </Form.Item>
                <Form.Item
                  label="初诊医生"
                  name="doctor"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default AddPatient