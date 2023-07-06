import React, { useState, useEffect } from "react";
import { BottomNavigation } from "@mui/material";
import Button_Navigation from "./button_navigation/button_navigation";
import { useDispatch } from "react-redux";
import { setMenuCategoryDataAction } from "../../../../_slice/menu.slice";

const Navigation = ({ menuItem }) => {
  const [list, setList] = useState([]);
  const newList = menuItem.map((item) => {
    return item.category;
  });
  console.log(list);
  useEffect(() => {
    setList([...new Set(newList), "all"]);
  }, [menuItem]);

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ backgroundColor: "transparent" }}
    >
      {list.map((item) => {
        return (
          <Button_Navigation
            label={item}
            onClickEvent={() => dispatch(setMenuCategoryDataAction(item))}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default Navigation;
