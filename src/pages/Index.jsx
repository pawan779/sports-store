import React, { useEffect } from "react";
import Header from "../components/Header";
import { allImage } from "../constant";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff", height: "100vh" }}>
      <div style={{ backgroundColor: "#000" }}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showArrows={false}
          useKeyboardArrows={false}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
        >
          <div>
            <img
              src={allImage.Img2}
              style={{ width: "65%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={allImage.Img1}
              style={{ width: "65%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={allImage.Img3}
              style={{ width: "65%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
