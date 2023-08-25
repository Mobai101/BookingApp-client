import React from "react";
import styles from "./NavBar.module.css";
import { Link, useRouteLoaderData } from "react-router-dom";

function Navbar() {
  const rootLoaderData = useRouteLoaderData("root");

  const nabBarArr = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];

  return (
    <section className="blue_section">
      <div className="container">
        <div className={styles.container__top}>
          <Link to={"/"} className={styles.site_logo}>
            Booking Website
          </Link>
          <div className={styles.container__login}>
            <p>{rootLoaderData?.bookingUser?.email || ""}</p>
            {rootLoaderData.bookingUser ? (
              <>
                <Link to="/transactions">Transactions</Link>
                <Link to="/logout">Logout</Link>
              </>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>

        <ul>
          {nabBarArr.map((navitem) => {
            return (
              <li key={navitem.type}>
                <Link to="/" className={navitem.active ? styles.active : ""}>
                  <i className={`fa ${navitem.icon}`}></i> {navitem.type}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Navbar;
