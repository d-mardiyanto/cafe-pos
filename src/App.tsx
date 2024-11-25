import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/Forgot_Password";

import PageContainer from "./layouts/PageContainer";
import Dashboard from "./pages/Main/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import NotificationList from "./components/NotificationList";

const App: React.FC = () => {
  return (
    <>
      <NotificationList />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/admin"
            element={
              <PageContainer />
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
