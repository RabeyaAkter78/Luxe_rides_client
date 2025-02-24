import React, { useState } from "react";
import { FaLockOpen } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";

const ConfirmPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="bg-black py-16 md:py-0 h-[100vh] w-full flex items-center justify-center text-white">
      <div className="container mx-auto">
        <div className="flex justify-center items-center p-2">
          <div className="border rounded-lg text-white text-center p-5 lg:px-20 lg:py-20">
            <p className="text-3xl pb-10">Confirm Password</p>
            <div className="flex justify-between items-center border-b-2 mb-10 ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-transparent text-white p-2 focus:outline-none"
              />
              <div className="flex items-center">
                <button onClick={togglePasswordVisibility} type="button">
                  {showPassword ? (
                    <IoIosLock className="text-white" />
                  ) : (
                    <FaLockOpen className="text-white" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 mb-10">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="bg-transparent text-white p-2 focus:outline-none md:w-96 lg:w-96"
              />
              <div className="flex items-center">
                <button onClick={toggleConfirmPasswordVisibility} type="button">
                  {showConfirmPassword ? (
                    <IoIosLock className="text-white" />
                  ) : (
                    <FaLockOpen className="text-white" />
                  )}
                </button>
              </div>
            </div>

            <Link to="/auth/login">
              <button  className="text-center w-full  p-2 font-bold text-2xl  border rounded-md  text-white"
            type="submit">
                Send
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
