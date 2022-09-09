import Home from "@pages/Home";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "@pages/Login";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

interface IProps {
  children: React.ReactNode;
}
const ProtectedRoute: any = ({ children }: IProps) => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default App;
