import React from "react";
import { CardContent } from "@mui/material";
import Card_Text from "../../../../../component/card/card_text/card_text";

const RereviewsCardBody = ({
  name,
  nameStyle,
  job,
  jobStyle,
  text,
  textStyle,
}) => {
  return (
    <CardContent>
      <Card_Text
        text={name}
        variant="h3"
        weight="600"
        textAlign="center"
        color="gray"
        paddingLeft="0"
        textStyle={nameStyle}
      />
      <Card_Text
        text={job}
        variant="h4"
        weight="600"
        textAlign="center"
        color="gray"
        paddingLeft="0"
        textStyle={jobStyle}
      />
      <Card_Text
        text={text}
        variant="p"
        weight="400"
        textAlign="center"
        color="gray"
        paddingLeft="0"
        textStyle={textStyle}
      />
    </CardContent>
  );
};

export default RereviewsCardBody;
