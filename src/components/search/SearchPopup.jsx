import React, { useRef, useState } from "react";
import styles from "./SearchPopup.module.css";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function SearchPopup(props) {
  const navigate = useNavigate();
  const cityInput = useRef();
  const adultInput = useRef();
  const childrenInput = useRef();
  const roomsInput = useRef();

  const [isShowingDate, setIsShowingDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(props.searchData.startParam),
      endDate: new Date(props.searchData.endParam),
      key: "selection",
    },
  ]);

  function dateClickHandler() {
    setIsShowingDate((prev) => !prev);
  }

  const searchClickHandler = (e) => {
    e.preventDefault();
    if (!cityInput.current.value) {
      alert("Please input a city name to search");
      return;
    }
    navigate(
      `/search?city=${cityInput.current.value}&start=${date[0].startDate}&end=${date[0].endDate}&adult=${adultInput.current.value}&children=${childrenInput.current.value}&rooms=${roomsInput.current.value}`
    );
  };

  return (
    <form onSubmit={searchClickHandler}>
      <div className={styles.search_box}>
        {/* Search */}
        <h2>Search</h2>
        <label htmlFor="search_destination" className={styles.long_label}>
          Destination
        </label>
        <input
          type="text"
          id="search_destination"
          className={styles.long_input}
          defaultValue={props.searchData.cityParam}
          ref={cityInput}
        />
        <label htmlFor="search_checkInDate" className={styles.long_label}>
          Check-in Date
        </label>
        <input
          readOnly
          type="text"
          id="search_checkInDate"
          className={styles.long_input}
          value={`${date[0].startDate.toLocaleDateString(
            "en-GB"
          )} to ${date[0].endDate.toLocaleDateString("en-GB")}`}
          onClick={dateClickHandler}
        />

        {isShowingDate && (
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            className={styles.date_picker}
            minDate={new Date()}
            onChange={(item) => setDate([item.selection])}
            ranges={date}
          />
        )}

        {/* Options */}
        <h3>Options</h3>

        {/* Adult */}
        <div className={styles.flex_container}>
          <label htmlFor="search_adult" className={styles.short_label}>
            Adult
          </label>
          <input
            type="number"
            id="search_adult"
            className={styles.short_input}
            defaultValue={props.searchData.adultParam}
            ref={adultInput}
          />
        </div>
        {/* children */}
        <div className={styles.flex_container}>
          <label htmlFor="search_children" className={styles.short_label}>
            Children
          </label>
          <input
            type="number"
            id="search_children"
            className={styles.short_input}
            defaultValue={props.searchData.childrenParam}
            ref={childrenInput}
          />
        </div>
        {/* Room */}
        <div className={styles.flex_container}>
          <label htmlFor="search_room" className={styles.short_label}>
            Room
          </label>
          <input
            type="number"
            id="search_room"
            className={styles.short_input}
            defaultValue={props.searchData.roomsParam}
            ref={roomsInput}
          />
        </div>
        <button className={styles.search_btn}>Search</button>
      </div>
    </form>
  );
}
export default SearchPopup;
