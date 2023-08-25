import React from "react";
import "./Search.module.css";

import SearchPopup from "../components/search/SearchPopup";
import SearchList from "../components/search/SearchList";
import SignUp from "../components/SignUp";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityParam = searchParams.get("city");
  const startParam = new Date(searchParams.get("start"));
  const endParam = new Date(searchParams.get("end"));
  const adultParam = searchParams.get("adult");
  const childrenParam = searchParams.get("children");
  const roomsParam = searchParams.get("rooms");

  const searchData = {
    cityParam,
    startParam,
    endParam,
    adultParam,
    childrenParam,
    roomsParam,
  };

  return (
    <>
      <div className="container">
        <div className="flex_container">
          <SearchPopup
            searchData={searchData}
            setSearchParams={setSearchParams}
          />
          <SearchList searchData={searchData} />
        </div>
      </div>
      <SignUp />
    </>
  );
};

export default Search;
