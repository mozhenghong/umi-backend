import React  from 'react';
import {Col,Row} from 'antd';
import './index.less';
import NavLeft from '@/components/navLeft/index'
import Header from '@/components/header/index'
import Footer from '@/components/footer/index'
import { Provider } from 'mobx-react';
import {store} from '@/store/index';
export default (props:any) => {
    return <Provider store={store}>
        {JSON.stringify(store)}
            <div className="App">
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span={20} className="Main">
                        <Row>
                            <Header />
                        </Row>
                        <Row>
                            { props.children }
                        </Row>
                        <Row>
                            <Footer />
                        </Row>
                    </Col>
                </Row>
            </div>
        </Provider>
  }