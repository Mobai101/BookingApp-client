import React from "react";
import styles from "./ImagesSection.module.css";

function ImagesSection(props) {
  return (
    <section className={styles.images_section}>
      {props.photos.map((photo) => {
        return <img src={photo} alt={photo} key={photo} />;
      })}
    </section>
  );
}
export default ImagesSection;
