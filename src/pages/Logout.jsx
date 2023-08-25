import React from "react";

const Logout = (props) => {
  localStorage.removeItem("token");
  localStorage.removeItem("bookingUser");
  window.location.href = "/";
};

export default Logout;
