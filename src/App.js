import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct/[id]";
import ViewProduct from "./pages/ViewProduct/[id]";
import EditUser from "./pages/EditUser/[id]";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" exact element={<Products />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/NewProduct" element={<NewProduct />} />
                  <Route
                    path="/EditProduct/:productId"
                    element={<EditProduct />}
                  />
                  <Route path="/EditUser/:userId" element={<EditUser />} />
                  <Route
                    path="/ViewProduct/:productId"
                    element={<ViewProduct />}
                  />
                </Routes>
              </>
            }
          />

          {/* <Route path="/" Component={Home}/>
          <Route path="/login" Component={Login}/>
          <Route path="/products" exact Component={Products}/>
          <Route path="/users" Component={Users}/>
          <Route path="/orders" Component={Orders}/>
          <Route path="/NewProduct" Component={NewProduct}/>
          <Route path="/EditProduct/:productId" Component={EditProduct}/>
          <Route path="/EditUser/:userId" Component={EditUser}/>
          <Route path="/ViewProduct/:productId" Component={ViewProduct}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
