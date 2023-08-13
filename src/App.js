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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/products" exact Component={Products}/>
          <Route path="/users" Component={Users}/>
          <Route path="/orders" Component={Orders}/>
          <Route path="/NewProduct" Component={NewProduct}/>
          <Route path="/EditProduct/:productId" Component={EditProduct}/>
          <Route path="/ViewProduct/:productId" Component={ViewProduct}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
