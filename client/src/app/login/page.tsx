"use client";
import React, { useState } from "react";
import { Layout, Col, Row, Input, Space, Typography, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import Styles from "./login.module.css"

const { Title, Paragraph } = Typography

const Login = ({ }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeError, setChangeError] = useState(false)

  const handleSignIn = () => {
    setEmail(prev => {
      return prev + email
    })
    setPassword(prev => {
      return prev + password
    })
    setEmail("")
    setPassword("")
    setChangeError(false)
    console.log({ 'email :': email, 'password :': password })
  }

  const handleRegister = () => {
    alert("Hello, Coming Soon")
  }
    // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <Layout className={Styles.wrapper}>
      <Row className={Styles.row}>
        <Col span={9} className={Styles.col9} >
          <Space direction="vertical" size="large">
            <Typography>
              <Title>Hello, Friends</Title>

              <Paragraph className={Styles.description}>
                Enter your personal details and strat journy with us
              </Paragraph>

              <Button
                className={Styles.button}
                onClick={handleRegister}
              >
                SIGN UP
              </Button>

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
              prefix={<UserOutlined />}
              style={{ width: "500px" }}
              allowClear
              value={email}
              onChange={e => {setEmail(e.target.value) , setChangeError(true)}}
            />

            <Input.Password
              size="large"
              type="password"
              placeholder="Password"
              prefix={<KeyOutlined />}
              style={{ width: "500px" }}
              allowClear
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              disabled={email && password ? false : true}
              className={Styles.button}
              onClick={handleSignIn}
            >
              SIGN IN
            </Button>

          </Space>
        </Col>
      </Row>
    </Layout >
  );
};
export default Login;
