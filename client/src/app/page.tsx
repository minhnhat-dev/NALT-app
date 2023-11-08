"use client";
import React from "react";
import {
  HomeFilled,
  WalletFilled,
  UserOutlined,
  SignalFilled,
  LogoutOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { FloatButton } from 'antd';
import { Layout, Menu, Modal, Button, Col, Row } from "antd";
import Date from "@/components/Date";
import Card from "../components/Card";
import TransactionHistory from "@/components/Statistics/TransactionHistory/TransactionHistory";
import UpcomingSpent from "@/components/Statistics/UpcomingSpent/UpcomingSpent";
import Styles from "./page.module.css";

const { Header, Content, Sider } = Layout;

const itemsMenu: MenuProps["items"] = [
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Layout>
      <Sider className={Styles.sider} width={220} >
        <div className={Styles.logo}>
          <span className={Styles.alphabet}>N</span>
          <span className={Styles.name}>ALT</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["0"]}
          style={{ height: "auto" }}
          items={itemsMenu}
        />
        <Button className={Styles.button}>
          <LogoutOutlined />
          Logout
        </Button>
      </Sider>

      <Layout>
        <Header className={Styles.header}>
          <p className={Styles.title}>WELCOME EVERYONE</p>
          <Date />
        </Header>

        <Content className={Styles.content}>
          <Row>
            <Col span={10}>
              <Card balance="100000" expensesAmount="150000" incomeAmount="50000" />
            </Col>
            <Col span={14}>Statistic</Col>
          </Row>

          <Row>
            <Col span={8}>
              <TransactionHistory />
            </Col>

            <Col span={8}>Top spending</Col>

            <Col span={8}>
              <UpcomingSpent />
            </Col>

            <FloatButton.Group
              trigger="hover"
              type="primary"
              style={{ right: 24, bottom: 20 }}
              icon={<UserOutlined />}
            >
              <FloatButton tooltip="Income" icon={<ArrowDownOutlined />} />
              <FloatButton tooltip="Expenses" icon={<ArrowUpOutlined />} onClick={showModal} />
            </FloatButton.Group>

            <Modal
              title="Expenses"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}>
            </Modal>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
