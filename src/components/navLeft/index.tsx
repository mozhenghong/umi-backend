import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import './index.less';
// 引入侧边栏配置
import MenuConfig from '@/config/menuConfig';
import { history } from 'umi';

import avator from'@/assets/layout/avator.png';

const { SubMenu } = Menu;

const Index = (props: any) => {
  const [menuTreeNode, setMenuTreeNode] = useState(null)

  useEffect(() => {
    // 菜单渲染
    const renderMenu = (data:any) => {
      return data.map((item: any) => {
        if (item.children) {
          return (
            <SubMenu title={item.title} key={item.key}>
              {renderMenu(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item title={item.title} key={item.key}
          icon={<img src={item.icon} />}
          onClick={() => {
            history.push(item.key);
          }}>
          {item.title}
        </Menu.Item>
      })
    }
    const menuTreeNode = renderMenu(MenuConfig);
    setMenuTreeNode(menuTreeNode)
  }, [])
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={avator} alt=""/>
        <div className="name">马冬梅</div>
        <div>什么梅</div>
      </div>
      <Menu className="menu" theme="dark" defaultOpenKeys={['/orderPage']} mode="inline">
        {menuTreeNode}
      </Menu>
    </div>
  );
}

export default Index;