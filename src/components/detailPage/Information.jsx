import React from "react";
import styles from "./Information.module.css";

function Information(props) {
  return (
    <section className={styles.information_section}>
      <h1>{props.name}</h1>
      <h5>{props.address}</h5>
      <h3>{`${props.distance}m from center`}</h3>
      <h4>{props.price}</h4>
    </section>
  );
}
export default Information;
