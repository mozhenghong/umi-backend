import React, { useState } from 'react';
import { Col, Row, Popover, Button, Modal, Form, Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import './index.less';
import { history } from 'umi';
import logoSrc from '@/assets/login/logo.png';
import avatorSrc from '@/assets/layout/avator.png';
import serviceSrc from '@/assets/layout/service.png';
import caseSrc from '@/assets/layout/caseno.png';
import mobileSrc from '@/assets/layout/mobile.png';


import AddPatient from './component/addPatient/index';

const layout = {
  labelCol: { span: 8},
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 18 ,span: 6 },
};
interface PatientItemProps {
  name: string,
  mobile: string,
  age: string,
  birth: string,
  caseNumber: string,
}
const Index = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [strong, setStrong] = useState(1);
  const [dropVisibe, setDropVisibe] = useState(true);
  const [patientData, setPatientData] = useState<PatientItemProps[]>([]);
  const [addPatientVisibe, setAddPatientVisibe] = useState(false);

  const content = (
    <div className="logout-wrap">
      <div onClick={() => { setIsModalVisible(true) }} className="operation-wrap">
        {/* <img src={changeSrc} alt=""/> */}
        <div className="change-img-wrap"></div>
        <span className="operation-content">修改密码</span>
      </div>
      <div onClick={() => { history.push('/login') }} className="operation-wrap operation-logout-wrap" >
        {/* <img src={logoutSrc} alt=""/> */}
        <div className="logout-img-wrap"></div>
        <span className="operation-content">退出登录</span>
      </div>
    </div>
  );

  const menu = (
    <Menu>
      <div className="dropDownWrap">
        <div className="title">找到30个患者</div>
        <div className="mainWrap">
          {patientData.map((item) => {
            return (
              <div className="patientItem">
                <Row>
                  <Col span="24">
                    <img src={caseSrc} alt="" />
                    <span className="patientName">{item.name}</span>
                    <span>{item.age}岁{`(${item.birth})`}</span>
                  </Col>
                </Row>
                <Row style={{paddingTop: "9px"}}>
                  <Col span="12">
                    <img src={caseSrc} alt=""/>
                    <span>{item.caseNumber}</span>
                  </Col>
                  <Col span="12">
                    <img src={mobileSrc} alt=""/>
                    <span>{item.mobile}</span>
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
  const handleVisibleChange = (flag: boolean) => {
    console.log(flag)
    if (flag) {
      if (patientData.length) {
        setDropVisibe(flag);
      }
    } else {
      setDropVisibe(flag)
    }
  };
  return (
    <div className="header">
      <Row className="headerTop">
        <Col span="6">
          <img src={logoSrc} alt="" />
          <span className="web-name">智慧诊所平台</span>
        </Col>
        <Col span="12" className="searchwrap">
          <Dropdown
            overlay={menu}
            placement="bottomCenter"
            visible={dropVisibe}
            onVisibleChange={handleVisibleChange}
            trigger={['click']}
          >
            <Input
              style={{ width: '224px' }}
              suffix={<SearchOutlined style={{ color: '#cccccc' }} />}
              placeholder="请输入姓名/手机号"
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
          <Button
            className="add-patient-button"
            icon={<PlusOutlined />}
            onClick={() => {
              setAddPatientVisibe(true)
            }}
          >
            新增患者
          </Button>
        </Col>
        <Col span="6" className="headerItem">
          <img src={serviceSrc} alt="" />
          <span className="service-title">客服</span>
          <Popover placement="bottomRight" content={content} title="" trigger="hover">
            <img src={avatorSrc} alt="" className="avator" />
          </Popover>
        </Col>
      </Row>
      <Modal
        title="修改密码"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={580}
      >
        <Form
          onFinish={onFinish}
          {...layout}
          style={{ padding: '0 65px 0 0' }}
          size={'small'}
        >
          <Form.Item label="登录账号" >
            <span>嘻嘻嘻</span>
          </Form.Item>
          <Form.Item 
            label="原密码" 
            name="oldPassword"
            rules={[
              {
                required: true,
                message: '请输入原密码!',
              },
            ]}
          >
            <Input.Password placeholder="请输入原密码" />
          </Form.Item>
          <Form.Item
            label="新密码"
            name="newPassword"
            rules={[
              {
                required: true,
                message: '请输入新密码!',
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
          <Form.Item label="" style={{marginTop:'-8px',paddingLeft:'157px'}} className="pwdStrength-wrap">
            <div className="pwdStrength">
              <span className="weak" style={{ background: strong === 1? '#E67B7A' : '#EDECEC',color: strong === 1? 'rgba(255, 255, 255, 0.85)' : '#999999' }}>低</span>
              <span className="middle" style={{ background: strong === 2? '#568AFF' : '#EDECEC',color: strong === 2? 'rgba(255, 255, 255, 0.85)' : '#999999'}}>中</span>
              <span className="strong" style={{ background: strong === 3 ? '#5EC8A0' : '#EDECEC',color: strong === 3? 'rgba(255, 255, 255, 0.85)' : '#999999'}}>高</span>
            </div>
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
          <Form.Item {...tailLayout}  style={{ marginRight: '-11px'}}>
            <Button onClick={() => { setIsModalVisible(false); }} style={{ marginRight: '10px'}} >取消</Button>
            <Button type="primary" htmlType="submit">确定</Button>
          </Form.Item>
        </Form>
      </Modal>
      <AddPatient
        visible={addPatientVisibe}
        changeVisible={(visible: boolean) => {
          setAddPatientVisibe(visible)
        }}
      />
    </div>
  );
}

export default Index;