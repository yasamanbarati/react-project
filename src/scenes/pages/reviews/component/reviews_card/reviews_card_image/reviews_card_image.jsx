import React from "react";
import { Avatar } from "@mui/material";

const Imagestyle = {
  position: "relative",
  width: "100%",
  height: "auto",
  padding: "10px 0",
  "& img": {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    zIndex: "2",
  },
  "&::before": {
    position: "absolute",
    content: `""`,
    width: "31%",
    height: "85%",
    top: "5px",
    right: "32%",
    borderRadius: "50%",
    background: "#52c091",
    zIndex: "1",
  },
};
const reviewsCardImage = ({ ImageSrc }) => {
  return <Avatar alt="person image" src={ImageSrc} sx={Imagestyle} />;
};

export default reviewsCardImage;
