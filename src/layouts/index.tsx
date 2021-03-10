import React from 'react';
import { Col, Row, ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import styles from './index.less';
import NavLeft from '@/components/navLeft/index';
import Header from '@/components/header/index';
import Footer from '@/components/footer/index';

export default (props: any) => {
  return <ConfigProvider locale={zhCN}>
    <div className="App">
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={20} className={styles.mainWrap}>
          <Row>
            <Header />
          </Row>
          <Row style={{ background: '#ddd' }} className={styles.main}>
            {props.children}
          </Row>
          {/* <Row>
              <Footer />
          </Row> */}
        </Col>
      </Row>
    </div>
  </ConfigProvider>
}