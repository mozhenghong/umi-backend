import React, { useState, useEffect } from 'react';
import styles from  './index.less';
import {Button} from 'antd';
import { history } from 'umi';
import logoSrc from '@/assets/logo.png'

const LoginPage = () => {
  return (
      <div className={styles.wrap}>
          <div className={styles.title}>
              <img src={logoSrc} alt="" />
              <span>智慧诊所平台</span>
          </div>
          <div className={styles.contentWrap}>
              <div className={styles.successMsg}>
                <div>
                您已成功提交申请，请等待平台审核，审核结果会以短信的方式发送到您的手机上
                </div>
                <div onClick={() => {history.push('/login')}}>
                  返回登录页
                </div>
              </div>
          </div>
      </div>
  )
}

export default LoginPage