import { Grid } from "@mui/material";
import React from "react";
import MenuCards from "./menu_cards/menu_cards";

const MenuBox = ({ Item }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ justifyContent: "center", margin: "0px 0px 50px 0" }}
    >
      {Item.map((item) => {
        return (
          <MenuCards
            key={item.id}
            imageSrc={item.img}
            title={item.title}
            subTitle={"$" + item.price}
            text={item.desc}
          />
        );
      })}
    </Grid>
  );
};

export default MenuBox;
