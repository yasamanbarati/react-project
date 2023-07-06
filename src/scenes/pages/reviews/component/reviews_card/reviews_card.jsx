import React from "react";
import { Card, styled } from "@mui/material";
import RereviewsCardImage from "./reviews_card_image/reviews_card_image";
import RereviewsCardBody from "./reviews_card_body/rereviews_card_body";
import Basic_Button from "../../../../component/button/basic_button";

const Reviews_Card = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "25px",
  textAlign: "center",
});
const ReviewsCard = ({
  ImageSrc,
  name,
  nameStyle,
  job,
  jobStyle,
  text,
  textStyle,
  variant,
  color,
  BouttonEvent,
  Buttontext,
  Buttonstyle,
}) => {
  return (
    <Reviews_Card>
      <RereviewsCardImage ImageSrc={ImageSrc} />
      <RereviewsCardBody
        name={name}
        nameStyle={nameStyle}
        job={job}
        jobStyle={jobStyle}
        text={text}
        textStyle={textStyle}
      />
      <Basic_Button
        variant={variant}
        color={color}
        BouttonEvent={BouttonEvent}
        text={Buttontext}
        style={Buttonstyle}
      />
    </Reviews_Card>
  );
};

export default ReviewsCard;
