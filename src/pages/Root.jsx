import React from "react";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  console.log(`${process.env.REACT_APP_BACKENDHOST}`);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

export const rootLoader = () => {
  const token = localStorage.getItem("token");
  const bookingUser = JSON.parse(localStorage.getItem("bookingUser"));
  return { token, bookingUser };
};
