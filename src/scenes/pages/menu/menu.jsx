import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import HeaderTitle from "./component/header_title/header_title";
import { useSelector } from "react-redux";
import MenuBox from "./component/menu_box/menu_box";
import Navigation from "./component/navigation/navigation";

const categoryList = ["all", "breakfast", "lunch", "shakes"];

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  background: "#090f34",
  alignContent: "center",
  alignItems: "center",
  padding: "30px 0",
  minHeight: "100vh",
});
const Menu = () => {
  const menuItem = useSelector((state) => state.menu.menuList);
  // const CategoryItem = useSelector((state) => state.shop.menuListCategory);
  // console.log(CategoryItem);

  return (
    <MainBox>
      <HeaderTitle />
      <Navigation menuItem={menuItem} />
      <MenuBox Item={menuItem} />
    </MainBox>
  );
};

export default Menu;
