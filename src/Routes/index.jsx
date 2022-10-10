import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const RoutesMain = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  console.log(isAuthenticated);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");

    if (!token) {
      setAuthentication(false);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setAuthentication={setAuthentication} />}
        />
        <Route
          path="/register"
          element={<RegisterPage setAuthentication={setAuthentication} />}
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<Dashboard setAuthentication={setAuthentication} />}
      />
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );
};

export default RoutesMain;
