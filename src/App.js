import logo from "./logo.svg";
import "./me.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPages";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />}></Route> */}
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
