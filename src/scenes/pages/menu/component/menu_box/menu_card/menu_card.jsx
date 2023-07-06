import React from "react";
import { Box, Card, styled } from "@mui/material";
import Card_Image from "../../../../../component/card/card_image/card_image";
import MenuCardBody from "./menu_card_body/menu_card_body";

const Menu_Card = styled(Card)({
  display: "flex",
  gridTemplateColumns: "225px 1fr",
  gridGap: "0 1.25rem",
  gap: "0 1.25rem",
  height: "185px",
  backgroundColor: "transparent",
  boxShadow: "none",
});
const ImageBox = styled(Box)({
  width: "45%",
  objectFit: "cover",
  border: "0.2rem solid #d4648c",
  borderRadius: "0.25rem",
});

const MenuCard = ({ imageSrc, title, subTitle, text }) => {
  return (
    <Menu_Card>
      <ImageBox>
        <Card_Image
          src={imageSrc}
          alt="food image"
          height="100%"
          width="100%"
        />
      </ImageBox>
      <MenuCardBody title={title} subTitle={subTitle} text={text} />
    </Menu_Card>
  );
};

export default MenuCard;
