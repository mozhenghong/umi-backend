import React, { useState } from 'react';
import { Col, Row, Popover, Button, Modal, Form, Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';
import { history } from 'umi';
import avator from '@/assets/logo.png'

interface PatientItemProps{
  name: string,
  mobile: string,
  age: string,
  birth: string,
  caseNumber: string,
}
const Index = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [strong, setStrong] = useState(1);
  const [dropVisibe, setDropVisibe] = useState(false);
  const [patientData, setPatientData] = useState<PatientItemProps[]>([]);

  const content = (
    <div>
      <img src={avator} alt="" className={styles.avator} />
      <div onClick={() => { setIsModalVisible(true) }}>11111111111修改密码</div>
      <div onClick={() => { history.push('/login') }}>退出登录</div>
    </div>
  );

  const menu = (
    <Menu>
    <div className={styles.dropDownWrap}>
      <div className={styles.title}>找到30个患者</div>
      <div className={styles.mainWrap}>
        {patientData.map((item) => {
          return (
            <div className={styles.patientItem}>
            <Row>
              <Col span="24">
                <img src={avator} alt=""/>
                <span>{item.name}</span>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <span>{item.caseNumber}</span>
              </Col>
              <Col span="12">
                <span>{item.mobile}</span>
              </Col>
            </Row>
            <Row>
              <Col span="24">
                <span>{item.age}{`(${item.birth})`}</span>
              </Col>
            </Row>
            </div>
          )
        })}
      </div>
    </div>
    </Menu>
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
  const handleVisibleChange = (flag:boolean)=> {
    console.log(flag)
    if(flag){
      if(patientData.length){
        setDropVisibe(flag);
      }
    }else{
      setDropVisibe(flag)
    }
  };
  return (
    <div className={styles.header}>
      <Row className={styles.headerTop}>
        <Col span="4">
        </Col>
        <Col span="16" className={styles.searchwrap}>
          <Dropdown 
            overlay={menu} 
            placement="bottomCenter"  
            visible={dropVisibe}
            onVisibleChange={handleVisibleChange}
            trigger={['click']}
          >
            <Input
              prefix={<SearchOutlined className="site-form-item-icon" />}
              placeholder="请输入姓名/手机号"
              style={{ width: '60%' }}
              allowClear
              onChange={(e) => {
                console.log('inputchange')
                setPatientData([
                  {
                    name: 'XXXX',
                    mobile: '176534944',
                    caseNumber: '234244',
                    age: '12',
                    birth: '1994-01-09'
                  }, {
                    name: 'YYYY',
                    mobile: '176534944',
                    caseNumber: '234244',
                    age: '12',
                    birth: '1994-01-09'
                  },
                  {
                    name: 'XXXX',
                    mobile: '176534944',
                    caseNumber: '234244',
                    age: '12',
                    birth: '1994-01-09'
                  }, {
                    name: 'YYYY',
                    mobile: '176534944',
                    caseNumber: '234244',
                    age: '12',
                    birth: '1994-01-09'
                  }
                ])
                if (e.target.value) {
                  setDropVisibe(true)
                } else {
                  setDropVisibe(false)
                }
              }}
            />
          </Dropdown>
          <Button icon={<PlusOutlined />}>新增患者</Button>
        </Col>
        <Col span="4" className={styles.headerItem}>
          <Popover placement="bottomRight" content={content} title="" trigger="hover">
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
          layout="vertical"
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
            <Input.Password
              placeholder="密码不少于6位且包含数字和字母"
              onChange={(event) => {
                //密码强度校验
                //密码为6位及以上并且字母数字特殊字符三项都包括
                const strongRegex = new RegExp("^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
                //密码为6位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
                const mediumRegex = new RegExp("^(((?=.*[A-Z])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[!@#\$%\^&\*]))|((?=.*[0-9])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
                const enoughRegex = new RegExp("^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9]))(?=.{6,})");
                if (strongRegex.test(event.target.value)) {
                  setStrong(3)
                } else if (mediumRegex.test(event.target.value)) {
                  setStrong(2)
                } else if (enoughRegex.test(event.target.value)) {
                  setStrong(1)
                }
              }}
            />
          </Form.Item>
          <div className={styles.pwdStrength}>
            <span className={styles.weak}>低</span>
            <span className={styles.middle} style={{ background: (strong === 2 || strong === 3) ? 'red' : '#fff' }}>中</span>
            <span className={styles.strong} style={{ background: strong === 3 ? 'red' : '#fff' }}>高</span>
          </div>
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
            <Button onClick={() => { setIsModalVisible(false); }}>取消</Button>
            <Button type="primary" htmlType="submit" >确定</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Index;