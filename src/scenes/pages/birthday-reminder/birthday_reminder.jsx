import React, { Fragment } from "react";
import { Button, Grid, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ClearPersonListAction } from "../../_slice/reminder.slice";
import Card_Text from "../../component/card/card_text/card_text";
import List from "./list";

const MainBox = styled(Grid)(({ theme }) => ({
  padding: "15px!important",
  margin: "50px auto",
  backgroundColor: theme.palette.secondary.main,
  transition: " box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "4px",
  boxShadow:
    " rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
}));
const ClearButton = styled(Button)({
  width: "100%",
  padding: "15px!important",
  fontSize: "1rem",
  fontWeight: "600",
});
export const BirthdayReminder = () => {
  const personInfo = useSelector((state) => state.reminder.personList);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Grid container spacing={2}>
        <MainBox item xs={10} sm={6}>
          <Card_Text
            text={personInfo.length + " birthdays today"}
            variant="h1"
            Size="2rem"
            weight="800"
            color="#fff"
            paddingLeft="16px"
          />
          <List />
          <ClearButton
            variant="contained"
            color="white"
            onClick={() => dispatch(ClearPersonListAction())}
          >
            Clear All
          </ClearButton>
        </MainBox>
      </Grid>
    </Fragment>
  );
};
