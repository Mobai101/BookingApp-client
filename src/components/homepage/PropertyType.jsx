import React from "react";
import styles from "./PropertyType.module.css";

function PropertyType(props) {
  return (
    <section>
      <div className={styles.container}>
        <h2>Browse by property type</h2>
        <div className={styles.grid_container}>
          {props.properties.map((property) => {
            return (
              <div className={styles.img_container} key={property.type}>
                <img
                  src={`http://localhost:5000${property.image}`}
                  alt={property.type}
                />
                <h4>{property.type}</h4>
                <h5>{`${property.count} ${property.type}`}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default PropertyType;
