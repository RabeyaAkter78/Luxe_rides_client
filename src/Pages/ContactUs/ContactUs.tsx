import React from "react";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
const ContactUs: React.FC = () => {
  return (
    <div className="w-full">
      <div
        className="relative h-64 bg-black text-white flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-semibold">CONTACT</h1>
          <p className="text-sm text-gray-300">
            WE'RE ALWAYS OPEN TO TALK TO GOOD PEOPLE
          </p>
        </div>
      </div>

      <div className="text-center py-12 px-4">
        <h2 className="text-xl font-semibold tracking-wider">
          HAVE A QUESTION?
        </h2>
        <div className="flex items-center justify-center md:gap-20 mt-6 w-full">
          <div className="flex items-center gap-3">
            <PhoneOutlined className="text-lg text-black" />
            <div>
              <p className="font-semibold">CALL US</p>
              <p className="text-gray-600">+61 3 8376 6284</p>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <EnvironmentOutlined className="text-lg text-black" />
            <div>
              <p className="font-semibold">ADDRESS</p>
              <p className="text-gray-600">245 Quigley Blvd, Ste K</p>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <MailOutlined className="text-lg text-black" />
            <div>
              <p className="font-semibold">EMAIL</p>
              <p className="text-gray-600">support@bestlooker.pro</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md my-5">
        <Form layout="vertical">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item label="Name" className="w-full">
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item label="Email" className="w-full">
              <Input placeholder="Your Email" />
            </Form.Item>
          </div>
          <Form.Item label="Message">
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          <button
            type="submit"
            className="w-full p-2 font-bold text-2xl  border rounded-md  text-white bg-primary"
          >
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
