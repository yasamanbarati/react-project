import React from "react";
import { CardActionArea, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card_Image from "../../component/card/card_image/card_image";
import Card_Text from "../../component/card/card_text/card_text";

const OriginalCard = ({
  Navigationlink,
  ImageSrc,
  CardStyle,
  Imagestyle,
  text,
  TextVariant,
  TextSize,
  TextWeight,
}) => {
  const Navigation = useNavigate();

  const linkNavigation = () => {
    Navigation(Navigationlink);
  };

  return (
    <Card sx={{ width: "350px", height: "300px" }}>
      <CardActionArea
        onClick={linkNavigation}
        sx={{ ...CardStyle, width: "100%", height: "100%" }}
      >
        <Card_Image
          src={ImageSrc}
          alt="image"
          height="80%"
          Imagestyle={Imagestyle}
        />
        <CardContent>
          <Card_Text
            text={text}
            variant={TextVariant}
            Size={TextSize}
            weight={TextWeight}
            textAlign="center"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OriginalCard;
