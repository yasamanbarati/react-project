import React, { Fragment } from "react";
import { Box, styled } from "@mui/material";
import Card_Text from "../../component/card/card_text/card_text";
import ReviwesSlider from "./component/reviwes_slider/reviwes_slider";

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  background: "#f1fdf1",
  alignContent: "center",
  alignItems: "center",
  padding: "50px 0",
  minHeight: "100vh",
});
const titleStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
  "&::before": {
    position: "absolute",
    content: `''`,
    height: "5px",
    borderRadius: "10%",
    width: "40%",
    bottom: "-10px",
    backgroundColor: "#52c091",
  },
};
const Reviews = () => {
  return (
    <Fragment>
      <MainBox>
        <Card_Text
          text="Our Reviews"
          variant="h1"
          Size="2.5rem"
          weight="800"
          textAlign="center"
          color="gray"
          paddingLeft="0"
          textStyle={titleStyle}
        />
        <ReviwesSlider />
      </MainBox>
    </Fragment>
  );
};

export default Reviews;
