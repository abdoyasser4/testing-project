import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./wepsite/Home.jsx";
import { Route, Router } from "react-router-dom";
import Navbar from "./wepsite/Nav.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    {/* <Router>
      <Route path="/" element={<Home />} />
    </Router> */}
  </StrictMode>
);
