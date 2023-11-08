"use client";
import React, { useState } from "react";
import { Layout, Col, Row, Input, Space, Typography, Button } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import Styles from "./signup.module.css"

const { Title, Paragraph } = Typography

const SignUp = ({ }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const [changeError, setChangeError] = useState(false)

    const handleSignUp = () => {
        setUsername(prev => {
            return prev + username
        })
        setEmail(prev => {
            return prev + email
        })
        setPassword(prev => {
            return prev + password
        })
        setConfirmPassword(prev => {
            return prev + confirmPassword
        })

        setEmail("")
        setPassword("")
        setUsername("")
        setConfirmPassword("")
        setChangeError(false)
        console.log({ 'user :': username, 'email :': email, 'password :': password, 'confirmPassword :': confirmPassword })
    }

    const handleSignIn = () => {
        alert("Hello, Coming Soon")
    }

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return (
        <Layout className={Styles.wrapper}>
            <Row className={Styles.row}>
                <Col span={9} className={Styles.col9}>
                    <img src="./assets/svgs/logo.svg" className={Styles.img} />
                    <Space direction="vertical" size="large">
                        <Typography>
                            <Title>Welcome Back!</Title>
                            <Paragraph className={Styles.description}>
                                To keep connected with us please
                                login with your personal info
                            </Paragraph>
                            <Button
                                className={Styles.button}
                                onClick={handleSignIn}
                            >
                                SIGN IN
                            </Button>
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
                            style={{ width: "500px" }}
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Input
                            status={changeError && !email.match(mailformat) ? "error" : ""}
                            size="large"
                            type="email"
                            placeholder="Email"
                            prefix={<MailOutlined />}
                            style={{ width: "500px" }}
                            value={email}
                            onChange={e => { setEmail(e.target.value), setChangeError(true) }}
                        />
                        <Input.Password
                            size="large"
                            type="password"
                            placeholder="Password"
                            prefix={<LockOutlined />}
                            style={{ width: "500px" }}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Input.Password
                            status={confirmPassword !== password ? "error" : ""}
                            size="large"
                            type="password"
                            placeholder="Confirm Password"
                            prefix={<LockOutlined />}
                            style={{ width: "500px" }}
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <Button
                            disabled={email.match(mailformat) && password && confirmPassword === password ? false : true}
                            className={Styles.button}
                            onClick={handleSignUp}
                        >
                            SIGN UP
                        </Button>
                        <div>
                            {/* {changeError && !email.match(mailformat)
                                ? <Paragraph style={{ color: "red", height: 22 }}>
                                    Please Enter Email
                                </Paragraph> : <Paragraph style={{ height: 22 }} />}


                            {confirmPassword !== password
                                ? <Paragraph style={{ color: "red", height: 22 }}>
                                    Confirm Password does not match Password
                                </Paragraph> : <Paragraph style={{ height: 22 }} />} */}

                            {changeError && !email.match(mailformat)
                                ? <Paragraph style={{ color: "red", height: 22 }}>
                                    Please Enter Email
                                </Paragraph> : confirmPassword !== password 
                                ?  <Paragraph style={{ color: "red", height: 22 }}>
                                Confirm Password does not match Password
                            </Paragraph> : <Paragraph style={{ height: 22 }} /> }

                        </div>
                    </Space>
                </Col>
            </Row>
        </Layout >
    );
};
export default SignUp;