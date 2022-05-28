import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile  px-12 max-w-7xl mx-auto mt-8">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-gray-100 text-lg  text-neutral">
          {!admin && (
            <>
              <li className="my-2 ">
                <Link to="/dashboard/myorders">My orders</Link>
              </li>
              <li className="my-2">
                <Link to="/dashboard/review">Add a review</Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li className="my-2">
                <Link to="/dashboard/user">All user</Link>
              </li>
              <li className="my-2 text-lg ">
                <Link to="/dashboard/additem">Add a Item</Link>
              </li>
              <li className="my-2 text-lg ">
                <Link to="/dashboard/manageproducts">Manage Products</Link>
              </li>
              <li className="my-2 text-lg ">
                <Link to="/dashboard/manageorders">Manage All Orders</Link>
              </li>
              
            </>
          )}
          <li className="my-2">
            <Link to="/dashboard/myprofile">My profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
