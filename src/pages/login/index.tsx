import React, { useState, useEffect } from 'react';
import styles from  './index.less';
import {Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { history } from 'umi';
import logoSrc from '@/assets/logo.png'
import leftImgSrc from '@/assets/dog.jpeg'

const LoginPage = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
  
    useEffect(() => {
      forceUpdate({});
    }, []);
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <img src={logoSrc} alt="" />
                <span>智慧诊所平台</span>
            </div>
            <div className={styles.contentWrap}>
                <img src={leftImgSrc} alt=""/>
                <div className={styles.formWrap}>
                    <Form
                        form={form}
                        name="normal_login"
                        className={styles.loginForm}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                            />
                        </Form.Item>
                        <a href="">
                            忘记密码？
                        </a>
                        <Form.Item shouldUpdate>
                            {() => (
                            <Button type="primary" htmlType="submit"            className={styles.loginButton}
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                            >
                                登录
                            </Button>
                            )}
                        </Form.Item>
                        <div  onClick={() => {
                            history.push('/register');
                        }}>申请开通账号</div>
                    </Form>
                </div>
            </div>
            <div className={styles.footerWrap}>
                <div>
                    <div>访问官网</div>
                    <div>www.xxx.yyyy</div>
                </div>
                <div>
                    <div>客服电话</div>
                    <div>178248749243790</div>
                    <div>工作时间：9：00-22：00</div>
                </div>
                <div>
                    点击申请开通账号，进入注册页面
                </div>
            </div>
        </div>
    )
}

export default LoginPage