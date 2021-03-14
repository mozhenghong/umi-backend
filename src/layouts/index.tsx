import React from 'react';
import { Col, Row, ConfigProvider, Layout } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import  './index.less';
import NavLeftComponent from '@/components/navLeft/index';
import HeaderComponent from '@/components/header/index';
import FooterComponent from '@/components/footer/index';

export default (props: any) => {
  return <ConfigProvider locale={zhCN}>
    <div className="App">
      <Row className="container">
        <Row className="layout-title-wrap">
          <Col span={24}>
            <HeaderComponent/>
          </Col>
        </Row>
        <Row className="layout-main-wrap">
          <div className="nav-left">
            <NavLeftComponent />
          </div>
          <div className="mainWrap">
            <Row className="main">
              {props.children}
            </Row>
        </div>
        </Row>
      </Row>
    </div>
  </ConfigProvider>
}