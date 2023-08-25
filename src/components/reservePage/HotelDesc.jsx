import React from "react";
import classes from "./HotelDesc.module.css";

const HotelDesc = (props) => {
  return (
    <section className={classes.flexContainer}>
      <div className={classes.descDiv}>
        <h1>{props.hotel.name}</h1>
        <p>{props.hotel.desc}</p>
      </div>
      <div className={classes.priceDiv}>
        <span className={classes.price}>{`$${props.hotel.cheapestPrice}`}</span>
        <span className={classes.night}> (1 night)</span>
      </div>
    </section>
  );
};

export default HotelDesc;
