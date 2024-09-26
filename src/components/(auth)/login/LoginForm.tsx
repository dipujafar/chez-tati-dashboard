"use client";
import type { FormProps } from "antd";
import {  Checkbox, Form, Input, Flex, ConfigProvider } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    router?.push("/dashboard");
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "rgb(248,250,252)",
          },
        },
      }}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="md:w-[481px]"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input size="large" type="email" placeholder="Example@gmail.com" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" placeholder="*******" />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          style={{ color: "#F8FAFC" }}
        >
          <Flex justify="space-between" align="center">
            <Checkbox style={{ color: "#F8FAFC" }}>Remember me</Checkbox>
            <Link href={"/forgetPassword"} style={{ textDecoration: "" }}>
              <p className="text-[#8ABA51]">Forgot Password?</p>
            </Link>
          </Flex>
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className={styles.btn}>
            <div className={styles.svg_wrapper_1}>
              <div className={styles.svg_wrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className={styles.svg}
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span className={styles.span}>Sing in</span>
          </button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default LoginForm;
