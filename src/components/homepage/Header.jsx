import React, { useRef, useState } from "react";

import styles from "./Header.module.css";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate, useRouteLoaderData } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const cityInput = useRef();

  const rootLoaderData = useRouteLoaderData("root");
  const [isShowingDate, setIsShowingDate] = useState(false);
  const [isShowingAdult, setIsShowingAdult] = useState(false);

  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function searchClickHandler() {
    if (!cityInput.current.value) {
      alert("Please input a city name to search");
      return;
    }
    navigate(
      `/search?city=${cityInput.current.value}&start=${date[0].startDate}&end=${date[0].endDate}&adult=${adult}&children=${children}&rooms=${rooms}`
    );
  }

  function dateClickHandler() {
    setIsShowingDate((prev) => !prev);
  }

  function adultShowHandler(e) {
    e.preventDefault();
    setIsShowingAdult((prev) => !prev);
  }

  return (
    <section className="blue_section">
      <div className={styles.container}>
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>

        <a
          href="/login"
          className={`${styles.sign_in} ${
            !rootLoaderData.bookingUser ? "" : styles.hidden
          }`}
        >
          Sign in / Register
        </a>

        <div className={styles.search_bar}>
          <div className={styles.input_group}>
            <i className="fa fa-bed"></i>
            <input
              type="search"
              placeholder="Where are you going?"
              ref={cityInput}
            />
          </div>
          <div className={styles.input_group}>
            <i className="fa fa-calendar"></i>
            <input
              type="text"
              value={`${date[0].startDate.toLocaleDateString(
                "en-GB"
              )} to ${date[0].endDate.toLocaleDateString("en-GB")}`}
              readOnly
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
          </div>
          <div className={styles.input_group}>
            <i className="fa fa-female"></i>
            <span
              className={styles.adultSpan}
              onClick={adultShowHandler}
            >{`${adult} adult ${children} children ${rooms} room`}</span>
          </div>

          {isShowingAdult && (
            <div className={styles.adultSelect}>
              <form className={styles.adultForm} onSubmit={adultShowHandler}>
                <div className={styles.inputDiv}>
                  <label htmlFor="adult">Adult</label>
                  <input
                    type="number"
                    id="adult"
                    name="adult"
                    min={0}
                    value={adult}
                    onChange={(e) => {
                      setAdult(e.target.value);
                    }}
                  />
                </div>

                <div className={styles.inputDiv}>
                  <label htmlFor="children">Children</label>
                  <input
                    type="number"
                    id="children"
                    name="children"
                    min={0}
                    value={children}
                    onChange={(e) => {
                      setChildren(e.target.value);
                    }}
                  />
                </div>

                <div className={styles.inputDiv}>
                  <label htmlFor="rooms">Rooms</label>
                  <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    min={0}
                    value={rooms}
                    onChange={(e) => {
                      setRooms(e.target.value);
                    }}
                  />
                </div>

                <button>Done</button>
              </form>
            </div>
          )}

          <button className={styles.search_btn} onClick={searchClickHandler}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
export default Header;
