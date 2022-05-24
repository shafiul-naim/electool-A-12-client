
import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Home/Tools";
import BusinessSummary from "./pages/Home/BusinessSummary";
import Review from "./pages/Home/Review";
import Footer from "./pages/Shared/Footer";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route path="/business" element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
