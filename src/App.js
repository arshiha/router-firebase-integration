import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
