import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./wepsite/Home.jsx";
import { Route, Router } from "react-router-dom";
import Navbar from "./wepsite/Nav.jsx";
import SignUpForm from "./wepsite/auth/Signup.jsx";
import LoginForm from "./wepsite/auth/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginForm />
    {/* <SignUpForm /> */}
    {/* <Navbar />
    <Home /> */}
    {/* <Router>
      <Route path="/" element={<Home />} />
    </Router> */}
  </StrictMode>
);
