import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile px-12">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className="text-5xl font-bold text-secondary">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My orders</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add a review</Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
