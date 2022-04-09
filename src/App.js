import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Orders from "./components/Orders/Orders.js";
import Products from "./components/Products/Products.js";
import Register from "./components/Register/Register.js";
import RequireAuth from "./components/RequireAuth/RequireAuth.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
