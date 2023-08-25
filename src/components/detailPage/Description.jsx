import React from "react";
import styles from "./Description.module.css";
import { useNavigate } from "react-router-dom";

function Description(props) {
  const navigate = useNavigate();

  const reserveHandler = () => {
    navigate(`/reserve/${props._id}`);
  };

  return (
    <section className={styles.description_section}>
      <div className={styles.description_div}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.price_div}>
        <span className={styles.price}>{`$${props.cheapestPrice}`}</span>
        <span className={styles.nights}> (1 night)</span>
        <button onClick={reserveHandler}>Reserve or Book Now!</button>
      </div>
    </section>
  );
}
export default Description;
