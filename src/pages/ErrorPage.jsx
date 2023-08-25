import React from "react";
import ErrorText from "../components/error/ErrorText";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const ErrorPage = (props) => {
  return (
    <>
      <Navbar />
      <ErrorText />
      <Footer />
    </>
  );
};

export default ErrorPage;
