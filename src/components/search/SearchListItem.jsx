import React from "react";
import styles from "./SearchListItem.module.css";
import { Link, useNavigate } from "react-router-dom";

function SearchListItem(props) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/reserve/${props.search._id}`);
  };

  return (
    <div className={styles.search_card}>
      {/* Left div */}
      <img src={props.search.photos[0]} alt={props.search.name} />
      {/* Mid Div */}
      <div className={styles.middle_flex_div}>
        <Link to={`/detail/${props.search._id}`}>{props.search.name}</Link>
        <p>{`${props.search.distance}m from center`}</p>
        <h5>{props.search.type}</h5>
        <p>{props.search.desc}</p>
      </div>
      {/* Right Div */}
      <div className={styles.right_flex_div}>
        <div className={styles.rating_div}>
          <h3>Rating</h3>
          <span>{props.search.rating}</span>
        </div>
        <div className={styles.price_div}>
          <h2>{`$${props.search.cheapestPrice}`}</h2>
          <h6>Includes taxes and fees</h6>
        </div>
        <button onClick={clickHandler}>See availability</button>
      </div>
    </div>
  );
}
export default SearchListItem;
