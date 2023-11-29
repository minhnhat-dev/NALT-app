"use client";
import {
  HomeFilled,
  SignalFilled,
  UserOutlined,
  WalletFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout } from "antd";
// import "antd/dist/reset.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const [user, setUser] = React.useState({ email: "" });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const router = useRouter();

  //client

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    const userToken = localStorage.getItem("user");

    if (userToken) {
      const token = JSON.parse(userToken || "{}");
      const callApi = async () => {
        try {
          const response = await axios({
            method: "get",
            url: "https://nalt-server-test.onrender.com/api/auth/me",
            headers: { Authorization: `Bearer ${token.access}` },
          });
          console.log(response.data);
          setUser({ email: response.data.user.email });
        } catch (error: any) {
          console.log(error.response.data.data);
        }
      };
      callApi();
    }
  }, []);
  //server
  if (isClient) {
    router.replace("/login");
  }

  return null;
};

export default Home;
