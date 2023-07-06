import React from "react";
import { Grid, styled } from "@mui/material";
import MenuCard from "../menu_card/menu_card";

const MainBox = styled(Grid)({});
const MenuCards = ({ imageSrc, title, subTitle, text }) => {
  return (
    <MainBox item lg={5} sm={8} xs={10}>
      <MenuCard
        imageSrc={imageSrc}
        title={title}
        subTitle={subTitle}
        text={text}
      />
    </MainBox>
  );
};

export default MenuCards;
