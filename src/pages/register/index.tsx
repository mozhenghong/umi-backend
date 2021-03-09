import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Form, Input, Button, Select, Upload, Modal, Row, Col } from 'antd';
import { history } from 'umi';
import logoSrc from '@/assets/logo.png';

const { Option } = Select;
const { Search } = Input;
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const registerPage = () => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])
  const [isAccess, setIsAccess] = useState(true)
  const [visible, setVisible] = useState(false)

  const onFinish = (values: any) => {
    console.log('Rregister', values);
    setVisible(true)
  };
  const handleCancel = () => {
    setPreviewVisible(false)
  }
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  };
  const handleChange = ({ fileList }: any) => setFileList(fileList);
  const handleConfirmOk = () => {
    setVisible(false);
  };

  const handleConfirmCancel = () => {
    setVisible(false);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <img src={logoSrc} alt="" />
        <span>智慧诊所平台</span>
      </div>
      <div className={styles.contentWrap}>
        <Form name="register-form" onFinish={onFinish} style={{ minWidth: '30%' }}>
          <Form.Item label="" name="name">
            <Input placeholder="请输入所名称" />
          </Form.Item>
          <Form.Item label="" style={{ marginBottom: 0 }}>
            <Form.Item
              name="year"
              rules={[{ required: true }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Select allowClear>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
            >
              <Select allowClear>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Form.Item>
          </Form.Item>
          <Form.Item label="" name="address">
            <Input placeholder="请输入详细地址 " />
          </Form.Item>
          <Form.Item label="" name="applyname">
            <Input placeholder="请输入申请人姓名" />
          </Form.Item>
          <Form.Item label="" name="mobile"
            rules={[{
              pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号'
            }]}>
            <Input placeholder="请输入申请人手机号" />
          </Form.Item>
          <Form.Item label="" style={{ display: 'flex' }}>
            <Form.Item
              name="picNum"
              noStyle
              rules={[{ required: true, message: 'Username is required' }]}
            >
              <Input style={{ width: '70%' }} placeholder="请输入验证码" />
            </Form.Item>
            <span>
              <img src={logoSrc} alt="" style={{ width: 40, height: 20 }} />
            </span>
          </Form.Item>
          {isAccess && <Form.Item label="" name="msgNum">
            <Search
              placeholder="输入短信中的验证码"
              enterButton="获取验证码"
              onSearch={(value) => { console.log(value) }}
            />
          </Form.Item>}
          <Form.Item label="" name="merchant">
            <Input placeholder="请输入营业执照机构名称" />
          </Form.Item>
          <Form.Item
            name="upload"
            label=""
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </Form.Item>
          <Form.Item label="">
            <Button>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              立即申请
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Modal
        title="信息确认"
        visible={visible}
        onOk={handleConfirmOk}
        onCancel={handleConfirmCancel}
        footer={
          <div>
            <Button>否</Button>
            <Button
              type="primary" onClick={() => {
                history.push('/registerSuccess')
              }}>是</Button>
          </div>
        }
      >
        <Row>
          <Col span={12}>诊所名称：XXXXXX诊所</Col>
          <Col span={12}>地址：浙江省杭州市拱墅区泰嘉园B313</Col>
        </Row>
        <Row>
          <Col span={12}>申请人姓名：张三</Col>
          <Col span={12}>申请人手机号：1351234567</Col>
        </Row>
        <Row>
          <Col span={12}>机构名称：XXXXXX口腔门诊部</Col>
        </Row>
        <Row>
          <Col span={24}>请确认您所输入的信息是否正确？</Col>
        </Row>
      </Modal>
    </div>
  )
}

export default registerPage