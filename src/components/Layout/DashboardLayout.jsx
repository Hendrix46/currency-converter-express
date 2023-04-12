import {DollarCircleOutlined, SwapOutlined,} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";

const { Content, Sider } = Layout;

export const MenuLayout = () => {
    const location = useLocation()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={location.pathname}>
                    <Menu.Item key="/currencies">
                        <DollarCircleOutlined />
                        <span>Currency List</span>
                        <Link to="/currencies"/>
                    </Menu.Item>
                    <Menu.Item key="/converter">
                        <SwapOutlined />
                        <span>Converter</span>
                        <Link to="/converter"/>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Content
                    style={{
                        margin: '24px 16px 0',
                        padding: 24,
                        background: colorBgContainer,
                        height: '100vh',
                        overflow: 'initial',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
