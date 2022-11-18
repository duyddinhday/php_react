import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useState,useEffect } from "react";
import AuthUser from './AuthUser';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Card, Col, Row } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

// end import layout


// old componnents 
export default function Dashboard() {
    const {http} = AuthUser();
    const [users, setUsers] = useState([]);
    const [userdetail,setUserdetail] = useState('');

    useEffect(()=>{

        fetchAllUsers();
    },[]);


    const fetchAllUsers = () => {
      http.get('/users').then(res=>{
          setUsers(res.data);
      })
  }


    //end 
    
    // start render
    // start render
    // start render
    // start render

    function renderElement(){
        if(userdetail){
            return <div>
              
              <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        className="site-layout-background"
        style={{
          padding: '24px 0',
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
           {users.map((user,index)=>( 
            <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="TITLE" bordered={false}>
                  {user.name}
                </Card>
              </Col>
          
            </Row>
          </div>
           ))}
          
        </Content>
      </Layout> 
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
            </div>
        }else{
            return <p>Loading.....</p>
        }

    }

    return(
        <div>
            { renderElement() }
        </div>
    )
}