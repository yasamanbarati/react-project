import React from "react";
import { BottomNavigationAction, styled } from "@mui/material";

const BottomNavigationActionStyle = {
  paddingTop: "0",
  color: "#fff",
  justifyContent: "flex-end",
  "& .css-1tjd456-MuiBottomNavigationAction-label": {
    opacity: "1",
    fontSize: "1rem",
    fontWeight: "600",
  },
};
const Button_Navigation = ({ label, onClickEvent }) => {
  console.log(label);
  return (
    <BottomNavigationAction
      label={label}
      onClick={onClickEvent}
      sx={BottomNavigationActionStyle}
    />
  );
};

export default Button_Navigation;
