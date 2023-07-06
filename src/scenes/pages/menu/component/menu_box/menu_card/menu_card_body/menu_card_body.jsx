import React from "react";
import { Box } from "@mui/material";
import Card_Header from "../../../../../../component/card/card-header/card_header";
import Card_Text from "../../../../../../component/card/card_text/card_text";

const CardHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "0.5px dotted #d4648c",
  padding: "0",
  marginBottom: "10px",
  paddingBottom: "5px",
  " & .MuiCardHeader-avatar": {
    display: "none",
  },
  " & .MuiCardHeader-content": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  " & .MuiCardHeader-title": {
    fontWeight: "600",
    fontSize: "1rem",
    textTransform: "capitalize",
    color: "#fff",
  },
  " & .MuiCardHeader-subheader": {
    fontWeight: "600",
    fontSize: "1rem",
    textTransform: "capitalize",
    color: "#d4648c",
  },
};

const MenuCardBody = ({ title, subTitle, text }) => {
  return (
    <Box sx={{ width: "55%" }}>
      <Card_Header
        display="none"
        title={title}
        subTitle={subTitle}
        style={CardHeaderStyle}
      />
      <Card_Text
        text={text}
        variant="h4"
        Size="1rem"
        weight="400"
        color="#fff"
        paddingLeft="0"
      />
    </Box>
  );
};

export default MenuCardBody;
