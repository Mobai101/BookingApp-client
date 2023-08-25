import React from "react";

import "./Home.module.css";

import Header from "../components/homepage/Header";
import City from "../components/homepage/City";
import PropertyType from "../components/homepage/PropertyType";
import HomeGuest from "../components/homepage/HomeGuest";
import SignUp from "../components/SignUp";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <Header />
      <City cities={loaderData.cities} />
      <PropertyType properties={loaderData.properties} />
      <HomeGuest topRating={loaderData.topRatingHotels} />
      <SignUp />
    </>
  );
};

export default Home;

export const homeLoader = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKENDHOST}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
