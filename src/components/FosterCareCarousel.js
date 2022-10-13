import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FosterCareCard from "./FosterCareCard";
export default () => (
  <Carousel autoPlay>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <FosterCareCard />
      <FosterCareCard />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <FosterCareCard />
      <FosterCareCard />
    </div>
  </Carousel>
);
