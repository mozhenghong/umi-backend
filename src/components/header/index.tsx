import React ,{useState}from 'react';
import {Col,Row} from 'antd';
import './index.less';
import { history } from 'umi';


const Index  = (props)=> {
    const [userName,setUserName] = useState('xxx')
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{userName}</span>
                        <span onClick={() =>{ history.push('/login')}}>退出</span>
                    </Col>
                </Row>
                
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                </Row>
            </div>
        );
}

export default Index;