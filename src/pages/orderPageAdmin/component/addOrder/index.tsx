import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, Form, Input, Select, Upload, DatePicker, Radio, message, Collapse,Checkbox, Menu, Dropdown} from 'antd';
import { LoadingOutlined, PlusOutlined, SearchOutlined} from '@ant-design/icons';
import styles from './index.less';
import moment from 'moment';

import caseSrc from '@/assets/layout/caseno.png';
import mobileSrc from '@/assets/layout/mobile.png';
import defaultAvatorSrc from '@/assets/layout/defaultAvator.png'

const { TextArea } = Input;
const { Panel } = Collapse;

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 19 },
};
interface PatientItemProps {
  name: string,
  mobile: string,
  age: string,
  birth: string,
  caseNumber: string,
}

const getOpenKeys = (length:number) => Array.from({length}).map((v, k) => k);

interface Visible {
  visible: boolean,
  changeVisible: Function
}
const AddPatient: React.FC<Visible> = (props) => {
  const [form] = Form.useForm();
  const { visible, changeVisible } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [patientData, setPatientData] = useState<PatientItemProps[]>([]);
  const [nameDropVisibe, setNameDropVisibe] = useState(false);
  const [phoneDropVisibe, setPhoneDropVisibe] = useState(false);
  const [panelData, setPanelData] = useState([
    {
      key: '定期复查',
      children: [
        {label: 'xxxxx', value: 1},
        {label: 'yyy', value: 2},
        {label: 'iio', value: 3},
        {label: 'pp', value: 4},
        {label: 'ionph', value: 5},
      ]
    },
    {
      key: '你猜',
      children: [
        {label: 'xxxxx', value: 1},
        {label: 'yyy', value: 2},
        {label: 'iio', value: 3},
        {label: 'pp', value: 4},
        {label: 'ionph', value: 5},
      ]
    },
    {
      key: '哈哈哈',
      children: [
        {label: 'xxxxx', value: 1},
        {label: 'yyy', value: 2},
        {label: 'iio', value: 3},
        {label: 'pp', value: 4},
        {label: 'ionph', value: 5},
      ]
    },
    {
      key: '嘻嘻嘻',
      children: [
        {label: 'xxxxx', value: 1},
        {label: 'yyy', value: 2},
        {label: 'iio', value: 3},
        {label: 'pp', value: 4},
        {label: 'ionph', value: 5},
      ]
    },
  ]);

  const menu = (
    <Menu>
      <div className="dropDownWrap">
        <div className="title">找到30个患者</div>
        <div className="mainWrap">
          {patientData.map((item) => {
            return (
              <div className="patientItem">
                <Row>
                  <Col span="24" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={defaultAvatorSrc} alt="" />
                    <span className="patient-name">{item.name}</span>
                    <span className="patient-age">{item.age}岁{`(${item.birth})`}</span>
                  </Col>
                </Row>
                <Row style={{ paddingTop: "9px" }}>
                  <Col span="12" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={caseSrc} alt="" />
                    <span>{item.caseNumber}</span>
                  </Col>
                  <Col span="12" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={mobileSrc} alt="" />
                    <span>{item.mobile}</span>
                  </Col>
                </Row>
              </div>
            )
          })}
          <div className="footer">
            显示更多…
        </div>
        </div>
      </div>
    </Menu>
  );


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
  const callback = (key:any) => {
    console.log('colpase',key)
  }
  const handleNameVisibleChange = (flag: boolean) => {
    if (flag) {
      if (patientData.length) {
        setNameDropVisibe(flag);
      }
    } else {
      setNameDropVisibe(flag)
    }
  };
  const handlePhoneVisibleChange = (flag: boolean) => {
    if (flag) {
      if (patientData.length) {
        setPhoneDropVisibe(flag);
      }
    } else {
      setPhoneDropVisibe(flag)
    }
  };
  return (
    <Modal
      title="新建预约"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={858}
      footer={
        <div>
          <Button onClick={() => { changeVisible(false) }}>取消</Button>
          <Button
            type="primary" htmlType="submit" onClick={() => form.submit()}>新建预约</Button>
        </div>
      }
    >
      <div className={styles.wrap}>
        <Row style={{ padding: '5px 0'}} >
          <Col span="12">
            <div className={styles.title}>个人信息</div>
          </Col>
          <Col span="12">
            <div className={styles.title} style={{paddingLeft:'115px'}}>
              <span className={styles.require}>*</span>
              预约项目
            </div>
          </Col>
        </Row>
        <Row>
          <Col span="12" style={{padding: '5px 0 5px 0'}}>
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
               <Form.Item
                  label="姓名"
                  name="name"
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                   <Dropdown
                    overlay={menu}
                    placement="bottomCenter"
                    visible={nameDropVisibe}
                    onVisibleChange={handleNameVisibleChange}
                    trigger={['click']}
                  >
                    <Input 
                      placeholder="请输入姓名" 
                      onChange={(e) => {
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
                          setNameDropVisibe(true)
                        } else {
                          setNameDropVisibe(false)
                        }
                      }}
                    />
                  </Dropdown>
                </Form.Item>
                <Form.Item
                  label="手机号"
                  name="mobile"
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Dropdown
                    overlay={menu}
                    placement="bottomCenter"
                    visible={phoneDropVisibe}
                    onVisibleChange={handlePhoneVisibleChange}
                    trigger={['click']}
                  >
                    <Input  
                      placeholder="请输入手机号" 
                      onChange={(e) => {
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
                          setPhoneDropVisibe(true)
                        } else {
                          setPhoneDropVisibe(false)
                        }
                      }}
                    />
                  </Dropdown>            
                </Form.Item>
                <Form.Item
                  label="病历号"
                  name="case"
                >
                  <Input placeholder="请输入姓名" />
                </Form.Item>
                <div className={styles.title}>预约信息</div>
                <Form.Item
                  name="provience"
                  label="预约诊所"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="provience"
                  label="科室"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="provience"
                  label="医生"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="provience"
                  label="诊室"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="provience"
                  label="就诊类型"
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="预约时间"
                  name="year"
                >
                  <DatePicker 
                    style={{width: '100%'}}  
                    showTime 
                    format="YYYY-MM-DD HH:mm" 
                    minuteStep={15}
                    disabledDate={(currentDate)=>{
                      return moment(currentDate).valueOf()< moment(new Date()).valueOf()
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="provience"
                  label="预约时长"
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="provience"
                  label="备注"
                >
                  <TextArea placeholder="输入备注"/>
                </Form.Item>
            </Form>
          </Col>
          <Col span="12" style={{padding: '0 40px 0 115px'}} >
            <Input
              style={{ width: '224px',marginLeft:'10px' }}
              suffix={<SearchOutlined style={{ color: '#cccccc' }} />}
              placeholder="请输入要搜索的姓名"
              allowClear
            />
          <Collapse
            defaultActiveKey={getOpenKeys(panelData.length)}
            onChange={callback}
            expandIconPosition="right"
            ghost
          >
          {panelData.map((item,index) => {
            return <Panel header={item.key} key={index}>
                    <Checkbox.Group style={{ width: '100%' }} onChange={(values) => {console.log('checkbox',item.key, values)}}>
                      {item.children.map((detail) => {
                        return <Checkbox 
                                  value={detail.value}
                                  style={{width: '50%', marginLeft: '0'}}
                                >{detail.label}</Checkbox>
                              })}
                      </Checkbox.Group>
                    </Panel>
          })}
        </Collapse>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default AddPatient