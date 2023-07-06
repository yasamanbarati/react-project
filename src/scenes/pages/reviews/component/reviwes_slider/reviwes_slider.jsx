import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ReviewsCard from "../reviews_card/reviews_card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const nameStyle = {
  fontSize: "1rem",
  textTransform: "capitalize",
  lineHeight: " 1.25",
  margin: "0.45rem 0",
};
const jobStyle = {
  marginBottom: "0.8rem",
  textTransform: "uppercase",
  color: "#52c091",
  fontSize: "0.9rem",
};
const textStyle = {
  fontSize: "0.875rem",
  lineHeight: " 1",
};
const arrowStyle = {
  top: "80%",
  "&:before": {
    color: "#52c091",
  },
};
function SampleNextArrow({ className, onClick }) {
  return (
    <div
      className={className}
      style={{
        top: "80%",
        "::before": {
          color: "#52c091",
        },
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, onClick }) {
  return <div className={className} onClick={onClick} />;
}
const ReviwesSlider = () => {
  const reviewsList = useSelector((state) => state.reviews.reviewsList);

  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} style={{ width: " 620px", height: "420px" }}>
      {reviewsList.map((item) => {
        return (
          <ReviewsCard
            ImageSrc={item.image}
            name={item.name}
            job={item.job}
            text={item.text}
            nameStyle={nameStyle}
            jobStyle={jobStyle}
            textStyle={textStyle}
          />
        );
      })}
    </Slider>
  );
};

export default ReviwesSlider;
