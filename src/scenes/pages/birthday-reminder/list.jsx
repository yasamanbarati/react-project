import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Card_Header from "../../component/card/card-header/card_header";

const CardHeaderStyle = {
  backgroundColor: "#FFF",
  margin: "10px 0",
  borderRadius: "4px",
  boxShadow:
    " rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
  ".css-19fl5kb-MuiTypography-root": {
    fontWeight: "600",
    fontSize: "1rem",
  },
  ".css-qrqfqb-MuiTypography-root": {
    fontWeight: "600",
    fontSize: "0.86rem",
  },
};

const List = () => {
  const personInfo = useSelector((state) => state.shop.personList);

  return (
    <Fragment>
      {personInfo.map((item) => {
        return (
          <Card_Header
            style={CardHeaderStyle}
            alt="person Image"
            ImageSrc={item.image}
            title={item.name}
            subTitle={item.age + " years"}
            width="60px"
            height="60px"
          />
        );
      })}
    </Fragment>
  );
};

export default List;
