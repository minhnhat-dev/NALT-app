"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { Layout, Col, Row, Input, Space, Typography, Button, notification } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import Styles from "./signup.module.css";
import { json } from "stream/consumers";

const { Title, Paragraph } = Typography;

const SignUp = ({}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changeError, setChangeError] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://nalt-server-test.onrender.com/api/auth/signup",
        data: {
          name: username,
          email: email,
          password: password,
        },
      });
      router.replace('/login')
      // const userJson = JSON.stringify(response.data.data)
      // localStorage.setItem('user', userJson)
      console.log(response.data)
    } catch (error) {
      api.info({
        message: "ERROR",
        description: (error as AxiosError).message,
        placement: "top",
      });
    }
    
    setUsername((prev) => {
      return prev + username;
    });
    setEmail((prev) => {
      return prev + email;
    });
    setPassword((prev) => {
      return prev + password;
    });
    setConfirmPassword((prev) => {
      return prev + confirmPassword;
    });

    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
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
              <Title>Welcome Back!</Title>
              <Paragraph className={Styles.description}>
                To keep connected with us please login with your personal info
              </Paragraph>
              <Link href={"/login"}>
                <Button className={Styles.button} >
                  SIGN IN
                </Button>
              </Link>
            </Typography>
          </Space>
        </Col>

        <Col span={15} className={Styles.col15}>
          <Space direction="vertical" size="large">
            <Typography>
              <Title className={Styles.title}>Create Account</Title>
            </Typography>
            <Input
              size="large"
              type="name"
              placeholder="Username"
              prefix={<UserOutlined />}
              style={{ width: "50%" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <Input.Password
              status={confirmPassword !== password ? "error" : ""}
              size="large"
              type="password"
              placeholder="Confirm Password"
              prefix={<LockOutlined />}
              style={{ width: "50%" }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button style={{width: '50%'}}
              block
              disabled={
                email.match(mailformat) &&
                password &&
                confirmPassword === password
                  ? false
                  : true
              }
              className={Styles.button}
              onClick={handleSignUp}
            >
              SIGN UP
            </Button>
            <div>
              {changeError && !email.match(mailformat) ? (
                <Paragraph style={{ color: "red", height: 22 }}>
                  Please Enter Email
                </Paragraph>
              ) : confirmPassword !== password ? (
                <Paragraph style={{ color: "red", height: 22 }}>
                  Confirm Password does not match Password
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
export default SignUp;
