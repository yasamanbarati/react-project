import React from "react";
import { Accordion } from "@mui/material";
import Accordion_Title from "./accordion_title/accordion_title";
import Accordion_Details from "./accordion_details/accordion_details";

const OriginalAccordion = ({ expanded, handleChange, category, Details }) => {
  return (
    <Accordion expanded={expanded === expanded} onChange={handleChange}>
      <Accordion_Title category={category} />
      <Accordion_Details Details={Details} />
    </Accordion>
  );
};

export default OriginalAccordion;
