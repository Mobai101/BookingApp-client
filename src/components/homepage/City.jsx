import React from "react";
import styles from "./City.module.css";

function City(props) {
  return (
    <section>
      <div className={styles.container}>
        {props.cities.map((city) => {
          return (
            <div className={styles.img_container} key={city.name}>
              <img src={`http://localhost:5000${city.image}`} alt={city.name} />
              <h1>{city.name}</h1>
              <h3>{`${city.count} properties`}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default City;
