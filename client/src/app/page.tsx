"use client";
import React from "react";
import Link from "next/link";
import "antd/dist/reset.css";
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
import {
  InputNumber,
  FloatButton,
  Input,
  Select,
  Space,
  DatePicker,
} from "antd";
import { Layout, Menu, Modal, Button, Col, Row } from "antd";
import dayjs from "dayjs";
import Card from "../components/Card";
import TopSending from "@/components/Statistics/TopSending/TopSending";
import TransactionHistory from "@/components/Statistics/TransactionHistory/TransactionHistory";
import UpcomingSpent from "@/components/Statistics/UpcomingSpent/UpcomingSpent";
import Styles from "./page.module.css";
import StatisticalTables from "@/components/Statistics/StatisticalTables/StatisticalTables";

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

const items = [
  {
    id: 1,
    name: "Upwork",
    icon: "./assets/images/image-13.png",
  },
  {
    id: 2,
    name: "Youtube",
    icon: "./assets/images/image-6.png",
  },
  {
    id: 3,
    name: "Paypal",
    icon: "./assets/images/image-5.png",
  },
  {
    id: 4,
    name: "Spofily",
    icon: "./assets/images/image-16.png",
  },
];

const dateFormat = "ddd, DD MMM YYYY";

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
      <Sider className={Styles.sider} width={220}>
        <div className={Styles.logo}>
          <span className={Styles.alphabet}>N</span>
          <span className={Styles.name}>ALT</span>
        </div>
        <Menu mode="inline" style={{ height: "auto" }} items={itemsMenu} />
        <Link href={"/login"}>
          <Button className={Styles.button}>
            <LogoutOutlined />
            Logout
          </Button>
        </Link>
      </Sider>

      <Layout>
        <Header className={Styles.header}>
          <p className={Styles.title}>WELCOME EVERYONE</p>
          <DatePicker defaultValue={dayjs()} format={dateFormat} />
        </Header>

        <Content className={Styles.content}>
          <Row gutter={34} style={{ paddingBottom: "11px" }}>
            <Col
              span={10}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                balance="2,548.00"
                expensesAmount="284.000"
                incomeAmount="1,840.00"
              />
            </Col>
            <Col
              span={14}
              style={{
                display: "flex",
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StatisticalTables/>
            </Col>
          </Row>

          <Row gutter={21} style={{ paddingTop: "12px" }}>
            <Col
              span={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TransactionHistory />
            </Col>
            <Col
              span={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TopSending />
            </Col>
            <Col
              span={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UpcomingSpent />
            </Col>
          </Row>

          <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{ right: 24, bottom: 20 }}
            icon={<UserOutlined />}
          >
            <FloatButton tooltip="Income" icon={<ArrowDownOutlined />} />
            <FloatButton
              tooltip="Expenses"
              icon={<ArrowUpOutlined />}
              onClick={showModal}
            />
          </FloatButton.Group>
          <Modal
            title="Add Expenses"
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={"fix-content"}
            footer={[]}
          >
            <Space direction="vertical">
              <label>NAME</label>
              <Select size="large" style={{ width: "100%" }}>
                {items.map((item) => (
                  <Select.Option value={item.id}>
                    <Space direction="horizontal">
                      <img src={item.icon} style={{ width: "100%" }} />{" "}
                      {item.name}
                    </Space>
                  </Select.Option>
                ))}
              </Select>
              <label>AMOUNT</label>
              <InputNumber
                size="large"
                controls={false}
                defaultValue={0}
                style={{ width: "100%" }}
                suffix={<Button>Clear</Button>}
                formatter={(value: any) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              />
              <label>DATE</label>
              <DatePicker
                defaultValue={dayjs()}
                format={dateFormat}
                style={{ width: "100%" }}
                size="large"
              />
              <label>INVOICE</label>
              <Input type="file" style={{ width: "100%" }} size="large" />
            </Space>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
function useAuth(): { isAuthenticated: any; } {
  throw new Error("Function not implemented.");
}

