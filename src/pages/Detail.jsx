import React from "react";
import "./Detail.module.css";

import SignUp from "../components/SignUp";
import Information from "../components/detailPage/Information";
import ImagesSection from "../components/detailPage/ImagesSection";
import Description from "../components/detailPage/Description";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <div className="container">
        <Information
          name={loaderData.name}
          address={loaderData.address}
          distance={loaderData.distance}
          price={loaderData.price}
        />
        <ImagesSection photos={loaderData.photos} />
        <Description
          _id={loaderData._id}
          name={loaderData.name}
          description={loaderData.desc}
          cheapestPrice={loaderData.cheapestPrice}
        />
      </div>
      <SignUp />
    </>
  );
};
export default Detail;

export const detailLoader = async ({ params }) => {
  try {
    const response = await fetch(
      `http://localhost:5000/detail/${params.hotelId}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
