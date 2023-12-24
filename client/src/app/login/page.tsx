"use client";
import React, { useState } from "react";
import {
  Layout,
  Col,
  Row,
  Input,
  Space,
  Typography,
  Button,
  notification,
} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Styles from "./login.module.css";
import useLogIn from "@/hooks/useLogIn";

const { Title, Paragraph } = Typography;

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeError, setChangeError] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const { fetchUser } = useLogIn(api, email, password);

  const handleSignIn = async () => {
    fetchUser()
    setEmail((prev) => {
      return prev + email;
    });
    setPassword((prev) => {
      return prev + password;
    });
    setEmail("");
    setPassword("");
    setChangeError(false);
  };

  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <Layout className={Styles.wrapper}>
      <Row className={Styles.row}>
        <Col span={9} className={Styles.col9}>
          <img src="./assets/svgs/logo.svg" className={Styles.img} />
          <Space direction="vertical" size="large">
            <Typography>
              <Title className={Styles.welcome}>Hello, Friends</Title>
              <Paragraph className={Styles.description}>
                Enter your personal details and strat journy with us
              </Paragraph>
              <Link href={"/signup"}>
                <Button className={Styles.button}>SIGN UP</Button>
              </Link>
            </Typography>
          </Space>
        </Col>

        <Col span={15} className={Styles.col15}>
          <Space direction="vertical" size="large">
            <Typography>
              <Title className={Styles.title}>Sign in to Nalt</Title>
            </Typography>
            <Input
              status={changeError && !email.match(mailformat) ? "error" : ""}
              size="large"
              type="email"
              placeholder="Email"
              prefix={<MailOutlined />}
              style={{ width: "50%" }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value), setChangeError(true);
              }}
            />
            <Input.Password
              size="large"
              type="password"
              placeholder="Password"
              prefix={<LockOutlined />}
              style={{ width: "50%" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              disabled={email && password ? false : true}
              className={Styles.button}
              onClick={handleSignIn}
            >
              SIGN IN
            </Button>
            <div>
              {changeError && !email.match(mailformat) ? (
                <Paragraph style={{ color: "red", height: 22 }}>
                  Please Enter Email
                </Paragraph>
              ) : (
                <Paragraph style={{ height: 22 }} />
              )}
            </div>
            {contextHolder}
          </Space>
        </Col>
      </Row>
    </Layout>
  );
};
export default Login;
