import React from "react";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import SignInWrapper from "./components/SignInWrapper";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <SignInWrapper>
                  <Dashboard />
                </SignInWrapper>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/update-profile"
              element={
                <SignInWrapper>
                  <UpdateProfile />
                </SignInWrapper>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </Container>
  );
};

export default App;
