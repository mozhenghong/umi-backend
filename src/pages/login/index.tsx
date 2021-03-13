import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { history } from 'umi';
import logoSrc from '@/assets/login/logo.png';
import errorSrc from '@/assets/login/error.png';
import cancelSrc from '@/assets/login/cancel.png';


const LoginPage = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    history.push('/orderPage')
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <img src={logoSrc} alt="" />
        <span>智慧诊所平台</span>
      </div>
      <div className={styles.mainWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.formWrap}>
            <Form
              form={form}
              name="normal_login"
              className={styles.loginForm}
              onFinish={onFinish}
            >
              <div className={styles.loginTitle}>欢迎登陆智慧诊所平台</div>
                <div className={styles.errorWrap} style={{visibility:isError?'visible':'hidden'}}> 
                  <div>
                    <img src={errorSrc} alt="" style={{marginRight: '4px'}}/>
                    账户密码错误
                  </div>
                  <img 
                    src={cancelSrc} alt="" 
                    style={{width: '8px',height:'8px'}}
                    onClick={()=>{setIsError(false)}}
                  />
                </div>
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入账户名' }]}
              >
                <Input prefix={<UserOutlined style={{ fontSize: '16px', color: '#1890FF' }} className="site-form-item-icon" />} placeholder="账户" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" style={{ fontSize: '16px', color: '#1890FF' }} />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <div className={styles.forgetPassword}>
                忘记密码
              </div>
              <Form.Item shouldUpdate>
                {() => (
                  <Button type="primary" htmlType="submit" className={styles.loginButton}
                    // disabled={
                    //   !form.isFieldsTouched(true) ||
                    //   !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    // }
                  >
                    登录
                  </Button>
                )}
              </Form.Item>
              <div className={styles.forgetPassword}
              onClick={() => {
                history.push('/register');
              }}>申请开通账号</div>
            </Form>
          </div>
        </div>
        <div className={styles.footerWrap}>
          <div className={styles.footer}>
            <div>
              <div>访问官网</div>
              <div>www.xxx.yyyy</div>
            </div>
            <div>
              <div>客服电话</div>
              <div>178248749243790</div>
            </div>
            <div>
              <div>工作时间</div>
              <div>9：00-22：00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage