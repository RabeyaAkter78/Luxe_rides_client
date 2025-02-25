import React from "react";

const UserDashboard = () => {
  return (
    <div className="w-full md:h-screen flex">
      <div className="md:w-[30%] bg-primary h-screen text-white">
        <h1 className="text-2xl font-bold text-center py-5">LuxeRides</h1>
        <button className=" mt-6 px-6 py-3 text-lg font-semibold text-white">Order History</button>
      </div>
      <div className="md:w-[70%] bg-neutral-300 h-screen text-white">
        <h1 className="text-2xl font-bold text-center py-5">Welcome User</h1>
      </div>
    </div>
  );
};

export default UserDashboard;
