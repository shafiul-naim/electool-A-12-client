import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Home/Tools";
import BusinessSummary from "./pages/Home/BusinessSummary";
import Review from "./pages/Home/Review";
import Footer from "./pages/Shared/Footer";
import NotFound from "./pages/NotFound/NotFound";
import ToolDetails from "./pages/Home/ToolDetails";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import RequireAuth from "./pages/Login/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddReview from "./pages/Dashboard/AddReview";
import Users from "./pages/Dashboard/Users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./pages/Login/RequireAdmin";
import AddItem from "./pages/Dashboard/AddItem";
import DashboardIntro from "./pages/Dashboard/DashboardIntro";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import Payment from "./pages/Dashboard/Payment";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import MyProfile from "./pages/Dashboard/MyProfile";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route
          path="/tool/:toolId"
          element={
            <RequireAuth>
              <ToolDetails></ToolDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<DashboardIntro></DashboardIntro>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="user"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="additem"
            element={
              <RequireAdmin>
                <AddItem></AddItem>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route
          path="/business"
          element={<BusinessSummary></BusinessSummary>}
        ></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
