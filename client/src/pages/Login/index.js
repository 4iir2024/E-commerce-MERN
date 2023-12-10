import React from "react";
import { Button, Form, Input } from "antd";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";

function Login() {
  const rules = [
    {
      required: true,
      message: "required",
    },
  ];
  const onFinish = (value) => {
    console.log("Success", value);
  };
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="bg-white p-5 rounded w-[500px]">
        <h1 className="text-primary text-2xl">
          SWM - <span className="text-gray-400">LOGIN</span>
        </h1>

        <Divider />

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email" rules={rules}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules}>
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block className="mt-2">
            Login
          </Button>

          <div className="mt-5 text-center">
            <span className="text-gray-500">
              Don't have an account ?{" "}
              <Link to="/register" className="text-primary">
                Registre
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
