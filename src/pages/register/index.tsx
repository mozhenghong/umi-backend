import React, { useState, useEffect } from 'react';
import './index.less';
import { Form, Input, Button, Select, Upload, Modal, Row, Col } from 'antd';
import { history } from 'umi';
import logoSrc from '@/assets/login/logo.png';
import warningSrc from '@/assets/login/warning.png';


const { Option } = Select;
const { Search } = Input;
import { PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

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
  const [tipsVisible, setTipsVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [enterGetCode, setEnterGetCode] = useState(false)
  const [count, setCount] = useState(10)


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
  const handleGetCode = () =>{
    setEnterGetCode(true)
    const timer = setInterval(() => {
      setEnterGetCode(true)
      setCount((count)=>{
        if (count === 0) {
          clearInterval(timer);
          setEnterGetCode(false)
          setCount(10)
        }
        return --count
      })
    }, 1000);
  }

  return (
    <div className="register-wrap">
      <div className="title">
        <img src={logoSrc} alt="" />
        <span>智慧诊所平台</span>
      </div>
      <div className="contentWrap">
        <div className="formWrap">
        <Form 
          name="register-form" 
          onFinish={onFinish} 
          className="registerForm"
          {...layout}
        >
        <div className="registerTitle">申请开通账号</div>
          <Form.Item label="诊所名称" name="name">
            <Input placeholder="请输入诊所名称" />
          </Form.Item>
          <Form.Item label="所在省市" style={{ marginBottom: 0 }}>
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
          <Form.Item label="详细地址" name="address">
            <Input placeholder="请输入详细地址 " />
          </Form.Item>
          <Form.Item label="申请人姓名" name="applyname">
            <Input placeholder="请输入申请人姓名" />
          </Form.Item>
          <Form.Item label="申请人手机号" name="mobile"
            rules={[{
              pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号'
            }]}>
            <Input placeholder="请输入申请人手机号" />
          </Form.Item>
          <Form.Item label="图形验证码" style={{ display: 'flex' }}>
            <Form.Item
              name="picNum"
              noStyle
              rules={[{ required: true, message: 'Username is required' }]}
            >
              <Input style={{ width: '75%' }} placeholder="请输入验证码" />
            </Form.Item>
            <span>
              <img src={logoSrc} alt="" style={{ width: 95, height: 32}} />
            </span>
          </Form.Item>
          {isAccess && <Form.Item label="短信验证码" name="msgNum">
            <Search
              className="search"
              placeholder="请输入短信中的验证码"
              enterButton={enterGetCode?<span style={{color: '#D9D9D9',padding: '0 8px'}}>{count}s后重发</span>:<span onClick={handleGetCode}>获取验证码</span>}
              onSearch={(value) => { console.log(value)}}
            />
            </Form.Item>
          }
          <Form.Item label="营业执照机构名称" name="merchant">
            <Input placeholder="请输入营业执照机构名称" />
          </Form.Item>
          <Form.Item
            name="upload"
            label="诊所营业执照"
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
          <Form.Item {...tailLayout}>
            <Button style={{marginRight:'20px'}}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              立即申请
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
      <Modal
        title="信息确认"
        visible={visible}
        onOk={handleConfirmOk}
        onCancel={handleConfirmCancel}
        closable = {false}
        centered
        className="register-confirm"
        width={610}
        footer={
          <div>
            <Button style={{marginRight: '16px'}}  onClick={()=>{setVisible(false)}}>否</Button>
            <Button
              type="primary"
              style={{marginRight: '-16px'}} 
              onClick={() => {
                setVisible(false)
                setTipsVisible(true)
              }}
              >是</Button>
          </div>
        }
      >
        <Row>
          <Col span={12}  className="confirm-content-wrap">
            <span className="confirm-label">诊所名称：</span> 
            <span className="confirm-content">XXXXXX诊所</span>
          </Col>
          <Col span={12} className="confirm-content-wrap">
            <span className="confirm-label">地址：</span>
            <span className="confirm-content">浙江省杭州市拱墅区泰嘉园B313</span>  
          </Col>
        </Row>
        <Row>
          <Col span={12} className="confirm-content-wrap">
            <span className="confirm-label">申请人姓名：</span>
            <span className="confirm-content">XXXXXX诊所</span>
          </Col>
          <Col span={12} className="confirm-content-wrap">
            <span className="confirm-label">申请人手机号：</span>
            <span className="confirm-content">XXXXXX诊所</span>
          </Col>
        </Row>
        <Row>
          <Col span={12} className="confirm-content-wrap">
            <span className="confirm-label">机构名称：</span>
            <span className="confirm-content">XXXXXX诊所</span>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="confirm-message">请确认您所输入的信息是否正确？</Col>
        </Row>
      </Modal>
      <Modal
        title={null}
        visible={tipsVisible}
        onOk={()=>{}}
        onCancel={()=>{ setTipsVisible(false)}}
        closable = {false}
        centered
        width={424}
        footer={null}
      >
        <div className="tips-modal">
          {!isSuccess&&<div className="tips-title-wrap">
            <img src={warningSrc} alt=""/>
            <span className="tips-title">提醒</span>
          </div>}
          <div className={isSuccess?"tips-content-success":"tips-content"}>当前营业执照已经存在一条申请正在审批中，不可重复提交，请您耐心等待审批结果，谢谢</div>
          <div className="tips-footer">
            {!isSuccess?<Button type="primary" onClick={()=>{setTipsVisible(false)}}>知道了</Button>:
            <Button type="primary" onClick={()=>{history.push('/login')}}>返回登录页</Button>}
          </div>
        </div>
        
      </Modal>
    </div>
  )
}

export default registerPage