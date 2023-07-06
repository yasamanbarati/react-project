import React from "react";
import Card_Text from "../../../../component/card/card_text/card_text";
const titleStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  color: "#dfdfdf",
  "&::before": {
    position: "absolute",
    content: `''`,
    height: "4px",
    borderRadius: "10%",
    width: "60%",
    backgroundColor: "#d4648c",
    bottom: "-5px",
  },
};
const HeaderTitle = () => {
  return (
    <Card_Text
      text="Our Menu"
      variant="h1"
      Size="2.5rem"
      weight="800"
      textAlign="center"
      paddingLeft="0"
      textStyle={titleStyle}
    />
  );
};

export default HeaderTitle;
