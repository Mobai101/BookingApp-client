import React, { useEffect, useState } from "react";
import styles from "./SearchList.module.css";
import SearchListItem from "./SearchListItem";

function SearchList(props) {
  const [hotelList, setHotelList] = useState([]);

  // Fetch to back end to get hotel list
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/search?city=${props.searchData.cityParam}&start=${props.searchData.startParam}&end=${props.searchData.endParam}&adult=${props.searchData.adultParam}&children=${props.searchData.childrenParam}&rooms=${props.searchData.roomsParam}`
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(response.message);
      }
      setHotelList(result);
    };

    fetchData().catch((err) => console.error(err));
  }, [
    props.searchData.cityParam,
    props.searchData.startParam,
    props.searchData.endParam,
    props.searchData.adultParam,
    props.searchData.childrenParam,
    props.searchData.roomsParam,
  ]);

  console.log(hotelList);

  return (
    <div className={styles.search_list}>
      {hotelList?.map((search) => {
        return <SearchListItem search={search} key={search.name} />;
      })}
    </div>
  );
}
export default SearchList;
