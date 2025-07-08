import React from "react";
import { Button } from "antd";
import MainLayout from "./components/layout/MainLayout";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const App = () => (
  <>
    <Toaster />
    <MainLayout />
    {/* <Outlet /> */}
  </>
);

export default App;
