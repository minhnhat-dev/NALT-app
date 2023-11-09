"use client";
import React from "react";
import {
  HomeFilled,
  WalletFilled,
  UserOutlined,
  SignalFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button, Col, Row } from "antd";
import Date from "@/components/Date/date";
import TransactionHistory from "@/components/Statistics/TransactionHistory/TransactionHistory";
import UpcomingSpent from "@/components/Statistics/UpcomingSpent/UpcomingSpent";


const { Header, Content, Sider } = Layout;

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
    children: [
      {
        key: "1",
        label: "opotion",
      },
    ],
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider style={{ background: colorBgContainer }} width={200}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            paddingLeft: "1.4rem",
          }}
        >
          <span
            style={{ fontSize: "3rem", fontWeight: "500", color: "#4D736F" }}
          >
            N
          </span>
          <span style={{ fontSize: "1.4rem" }}>ALT</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["0"]}
          style={{ height: "80%" }}
          items={items2}
        />
        <Button
          style={{ fontSize: "1rem", color: "red", marginLeft: "2.5rem" }}
        >
          <LogoutOutlined />
          Logout
        </Button>
      </Sider>

      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "50px",
            backgroundColor: " #4D736F",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{ lineHeight: "1.8rem", color: "white", fontSize: "1.2rem" }}
          >
            WELCOME EVERYONE
          </p>
          <Date />
        </Header>

        <Content style={{ padding: "0", minHeight: 550, background: "#FFF" }}>
          <Row>
            <Col
              style={{ border: "solid 1px black", minHeight: 250 }}
              span={10}
            >
              Total Balance
            </Col>
            <Col style={{ border: "solid 1px black" }} span={14}>
              Statistic
            </Col>
          </Row>
          <Row>
            <Col style={{ border: "solid 1px black", minHeight: 350 }} span={8}>
              <TransactionHistory/>
            </Col>
            <Col style={{ border: "solid 1px black" }} span={8}>
              Top spending{" "}
            </Col>
            <Col style={{ border: "solid 1px black" }} span={8}>
              <UpcomingSpent/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
