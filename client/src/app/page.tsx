"use client";
import React from "react";
import {
  HomeFilled,
  WalletFilled,
  UserOutlined,
  SignalFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";


const { Header, Content, Footer, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: "sub1",
    icon: <HomeFilled />,
    label: "Home",
    children: [
      {
        key: "1",
        label: "opotion",
      },
    ],
  },
  {
    key: "sub2",
    icon: <SignalFilled />,
    label: "Statistic",
    children: [
      {
        key: "1",
        label: "opotion",
      },
    ],
  },
  {
    key: "sub3",
    icon: <WalletFilled />,
    label: "My wallet",
    children: [
      {
        key: "1",
        label: "opotion",
      },
    ],
  },
  {
    key: "sub4",
    icon: <UserOutlined />,
    label: "My profile",
    children: [{
      key:'1',
      label:'opotion'
    }]
  }
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{display:'flex', alignItems:'center', width:'100%',height:'70px', backgroundColor:' #4D736F'}}>
          <p style={{lineHeight:'1.8rem', color:'white'}}>
            WELCOME EVERYONE
          </p>
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'baseline', paddingLeft:'1.4rem'}}>
            <span style={{fontSize:'3rem', fontWeight:'500', color:'#4D736F'}}>N</span>
            <span style={{fontSize:'1.4rem'}}>ALT</span>
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={["0"]}
              
              style={{ height: "80%" }}
              items={items2}
            />W
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 450 }}>
            Content
          </Content>
        </Layout>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
