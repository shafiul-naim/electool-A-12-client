import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile px-12">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className="text-5xl font-bold text-secondary">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
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
          { admin && <li>
            <Link to="/dashboard/user">All user</Link>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
