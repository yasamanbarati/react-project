import React from "react";
import { Grid } from "@mui/material";
import OriginalCard from "./original_card";

const Grid_Box = ({
  key,
  Navigationlink,
  ImageSrc,
  textArray,
  CardStyle,
  Imagestyle,
  text,
  TextVariant,
  TextSize,
  TextWeight,
}) => {
  return (
    <Grid
      item
      lg={4}
      md={4}
      sm={6}
      xs={12}
      sx={{ display: "flex", justifyContent: "center", paddingRight:"16px" }}
    >
      <OriginalCard
        key={key}
        Navigationlink={Navigationlink}
        ImageSrc={ImageSrc}
        textArray={textArray}
        CardStyle={CardStyle}
        Imagestyle={Imagestyle}
        text={text}
        TextVariant={TextVariant}
        TextSize={TextSize}
        TextWeight={TextWeight}
      />
    </Grid>
  );
};

export default Grid_Box;
