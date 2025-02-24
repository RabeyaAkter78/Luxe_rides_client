import React from "react";
import UserDashboard from "./UserDashboard/UserDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

const DashboardLayout = () => {
  const user = true;
  return <div>{user ? <UserDashboard /> : <AdminDashboard />}</div>;
};

export default DashboardLayout;
