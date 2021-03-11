import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, Form, Input, Select, Upload, DatePicker, Radio, message, Collapse,Checkbox} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

const { TextArea } = Input;
const { Panel } = Collapse;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const getOpenKeys = (length:number) => Array.from({length}).map((v, k) => k);

interface Visible {
  visible: boolean,
  changeVisible: Function
}
const AddPatient: React.FC<Visible> = (props) => {
  const [form] = Form.useForm();
  const { visible, changeVisible } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  return (
    <Modal
      title="新建预约"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={900}
      footer={
        <div>
          <Button onClick={() => { changeVisible(false) }}>取消</Button>
          <Button
            type="primary" htmlType="submit" onClick={() => form.submit()}>新建预约</Button>
        </div>
      }
    >
      <div className={styles.wrap}>
        <Row style={{borderBottom: '1px solid #ddd', padding: '5px 0'}} >
          <Col span="12">
            <div className={styles.title}>个人信息</div>
          </Col>
          <Col span="12">
            <div className={styles.title}>
              <span className={styles.require}>*</span>
              预约项目
            </div>
          </Col>
        </Row>
        <Row>
          <Col span="12" style={{borderRight: '1px solid #ddd', padding: '5px 20px 5px 0'}}>
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
                  <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item
                  label="手机号"
                  name="mobile"
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Input placeholder="请输入姓名" />
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
                  <DatePicker />
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
          <Col span="12">
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
                        return <Checkbox value={detail.value}>{detail.label}</Checkbox>
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