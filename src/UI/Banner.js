import React from "react";
import classes from "./Banner.module.css";
import Container from "./Container";

const Banner = (props) => {
  return (
    <section className={classes.banner}>
      <Container>
        <h1>{props.text}</h1>
      </Container>
    </section>
  );
};

export default Banner;
