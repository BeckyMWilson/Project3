import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Help from "./pages/Help";
import Homepage from "./pages/Homepage";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";

import "./AppStyles.css";
//delete this line in future
// const inlineStyle = {
//   height: "400px",
//   backgroundColor: "blue",
//   color: "white",
//   margin: "10px",
// };

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <br />
        <div style={inlineStyle}>
          <h1>Please delete this section </h1>
        </div>
        <br /> */}
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;
