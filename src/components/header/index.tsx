import React, { useState } from 'react';
import { Col, Row, Popover, Button, Modal, Form, Input} from 'antd';
import styles from './index.less';
import { history } from 'umi';
import avator from '@/assets/logo.png'

//密码强度校验
//密码为6位及以上并且字母数字特殊字符三项都包括
var strongRegex = new RegExp("^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
//密码为6位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
var enoughRegex = new RegExp("(?=.{6,}).*", "g")

const Index = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const content = (
    <div>
      <img src={avator} alt="" className={styles.avator} />
      <div onClick={() => { setIsModalVisible(true) }}>修改密码</div>
      <div onClick={() => { history.push('/login') }}>退出登录</div>
    </div>
  );

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={styles.header}>
      <Row className={styles.headerTop}>
        <Col span="24">
          <Popover content={content} title="" trigger="hover">
            <img src={avator} alt="" className={styles.avator} />
          </Popover>
        </Col>
      </Row>
      <Modal 
        title="修改密码" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={null}
      >
        <div>登录账号：xxx</div>
        <Form
          layout = "vertical" 
          onFinish={onFinish}
        >
        <Form.Item label="原密码" name="oldPassword">
          <Input.Password placeholder="请输入原密码" />
        </Form.Item>
        <Form.Item 
          label="新密码" 
          name="newPassword"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="密码不少于6位且包含数字和字母" />
        </Form.Item>
        <Form.Item 
          label="确认新密码" 
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: '请确认新密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次密码输入不一致!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="请确认新密码" />
        </Form.Item>
        <Form.Item>
          <Button onClick={()=>{setIsModalVisible(false);}}>取消</Button>
          <Button type="primary" htmlType="submit" >确定</Button>
        </Form.Item>
      </Form>
      </Modal>
    </div>
  );
}

export default Index;