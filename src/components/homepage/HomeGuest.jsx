import React from "react";
import styles from "./HomeGuest.module.css";

function HomeGuest(props) {
  return (
    <section>
      <div className={styles.container}>
        <h2>Homes guests love</h2>
        <div className={styles.grid_container}>
          {props.topRating.map((home) => {
            return (
              <div className={styles.home_card} key={home._id}>
                <img src={home.photos[0]} alt={home.name} />
                <a href={`/detail/${home._id}`}>{home.name}</a>
                <h5>{home.city}</h5>
                <h4>{`Starting from $${home.cheapestPrice}`}</h4>
                <span className={styles.rating}>{home.rating}</span>
                <span>{home.type}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default HomeGuest;
