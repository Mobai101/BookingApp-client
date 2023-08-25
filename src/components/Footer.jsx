import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const footers = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Customer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];

  return (
    <section>
      <div className="container">
        <div className={styles.grid_container}>
          {footers.map((footer) => {
            return (
              <div key={footer.col_values}>
                {footer.col_values.map((value) => {
                  return <p key={value}>{value}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Footer;
