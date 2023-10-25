import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "../components/auth/LoginComponent";
import PageNotFoundComponent from "../components/PageNotFoundComponent";
import HomePageComponent from "../components/HomePageComponent";

export default function RouterComponent() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>
    </React.Fragment>
  );
}
