import { Checkbox, Form, Input ,Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bg-black h-[100vh] py-16 md:py-0 md:h-[100vh] w-full flex items-center justify-center">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 550 }}
        onFinish={onFinish}
        layout="vertical"
        className="border-2  bg-transparent py-10 mx-4 md:mx-0 px-6 md:px-10 rounded-2xl w-[450px] shadow-xl"
      >
        <div className="mb-4 text-center">
          <h2
            style={{ color: "white" }}
            className=" text-center text-2xl font-bold mb-6"
          >
            Log In
          </h2>
          <Typography.Text className="text-white text-center text-base ">
            Please enter your email and password to continue
          </Typography.Text>
        </div>

        <Form.Item
          name="email"
          label={<p className=" text-md">Email</p>}
          style={{}}
        >
          <Input
            required
            style={{ padding: "6px" }}
            className=" text-md"
            placeholder="Your Email"
          />
        </Form.Item>
        <Form.Item name="password" label={<p className=" text-md">Password</p>}>
          <Input
            required
            style={{ padding: "6px" }}
            className=" text-md"
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                required
                className=" text-white text-md hover:text-white text-md"
              >
                Accept terms of services
              </Checkbox>
            </Form.Item>
            <p className="text-white ">
              <Link to="/auth/forget-password">Forgot Password</Link>
            </p>
          </div>
        </Form.Item>
        <p className="text-white text-center mb-5">
          Don't have an Account?
          <Link to="/auth/sign-up" className=" pl-2">
            Sign Up
          </Link>
        </p>
        <Form.Item className="text-center">
          <button
            className="text-center w-full  p-2 font-bold text-2xl  border rounded-md  text-white"          type="submit"
          >
            Log In
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
