import { Checkbox, Form, Input, Flex, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="bg-black py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 550 }}
        onFinish={onFinish}
        layout="vertical"
        className=" bg-transparent py-10 mx-4 md:mx-0 px-6 md:px-10 rounded-2xl w-[450px] border-2 shadow-xl"
      >
        <div className="mb-4 text-center">
          <h2
            style={{ color: "white" }}
            className=" text-center text-2xl md:text-5xl font-bold mb-6"
          >
            Sign Up
          </h2>
          <Typography.Text className="text-white text-center text-base ">
            {" "}
            Please enter your name, email and password to continue
          </Typography.Text>
        </div>
        <Form.Item
          name="name"
          label={<p className=" text-md">Name</p>}
          style={{}}
        >
          <Input
            required
            style={{ padding: "6px" }}
            className=" text-md"
            placeholder="Your Name"
          />
        </Form.Item>
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
          <Flex justify="space-between" align="center" className="">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                required
                className=" text-white text-md hover:text-white text-md"
              >
                Accept terms of services
              </Checkbox>
            </Form.Item>
          </Flex>
        </Form.Item>
        <p className="text-white text-center mb-5">
          Already have an Account?
          <Link to="/auth/login" className=" pl-2">
            Login
          </Link>
        </p>
        <Form.Item className="text-center">
          <button
            className="text-center w-full  p-2 font-bold text-2xl  border rounded-md  text-white"
            type="submit"
          >
            Sign Up
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
