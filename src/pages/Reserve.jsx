import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import HotelDesc from "../components/reservePage/HotelDesc";
import Container from "../UI/Container";
import ReserveSection from "../components/reservePage/ReserveSection";

const Reserve = (props) => {
  const loaderData = useLoaderData();

  return (
    <Container>
      <HotelDesc hotel={loaderData.hotel} />
      <ReserveSection hotel={loaderData.hotel} user={loaderData.user} />
    </Container>
  );
};

export default Reserve;

export const reserveLoader = async ({ params }) => {
  let myHeaders;
  const token = localStorage.getItem("token");

  if (!token) {
    return redirect("/login");
  }

  // prettier-ignore
  myHeaders = new Headers({
      'Authorization': localStorage.getItem('token')
    });

  try {
    const response = await fetch(
      `http://localhost:5000/reserve/${params.hotelId}`,
      {
        headers: myHeaders,
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
