import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import './index.less';
// 引入侧边栏配置
import MenuConfig from '@/config/menuConfig';
import { history } from 'umi';


const { SubMenu } = Menu;

const Index = (props:any) => {
    const [menuTreeNode, setMenuTreeNode] = useState(null)

    useEffect(() => {
         // 菜单渲染
        const renderMenu=(data)=>{
            return data.map((item)=>{
                if(item.children){
                    return(
                        <SubMenu title={item.title} key={item.key}>
                            {renderMenu(item.children)}
                        </SubMenu>
                    )
                }
                return <Menu.Item title={item.title} key={item.key} 
                            onClick={() =>{
                                history.push(item.key);
                            }}> 
                                {item.title}
                        </Menu.Item>
            })
        }
        const menuTreeNode = renderMenu(MenuConfig);
        setMenuTreeNode(menuTreeNode)
    },[])
    return (
        <div className="wrapper">
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>系统</h1>   
            </div>
            <Menu className="menu" theme="dark" defaultOpenKeys={['/admin']}  mode="inline">
                {menuTreeNode}
            </Menu>
        </div>
    );
}

export default Index;