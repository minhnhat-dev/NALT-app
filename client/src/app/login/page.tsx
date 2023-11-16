"use client";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Input,
  Layout,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Styles from "./login.module.css";

const { Title, Paragraph } = Typography;

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeError, setChangeError] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const reponse = await axios({
        method: "post",
        url: "https://nalt-server-test.onrender.com/api/auth/signin",
        data: {
          email: email,
          password: password,
        },
      });
      router.replace("/");
      console.log(reponse.status);
    } catch (error) {
      api.info({
        message: "ERROR",
        description: (error as AxiosError).message,
        placement: "top",
      });
    }

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

  const handleRegister = () => {
    alert("Hello, Coming Soon");
  };

  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <Layout className={Styles.wrapper}>
      <Row className={Styles.row}>
        <Col span={9} className={Styles.col9}>
          <Space direction="vertical" size="large">
            <Typography>
              <Title>Hello, Friends</Title>

              <Paragraph className={Styles.description}>
                Enter your personal details and strat journy with us
              </Paragraph>

              <Button className={Styles.button} onClick={handleRegister}>
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
              onChange={(e) => {
                setEmail(e.target.value), setChangeError(true);
              }}
            />

            <Input.Password
              size="large"
              type="password"
              placeholder="Password"
              prefix={<KeyOutlined />}
              style={{ width: "500px" }}
              allowClear
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
