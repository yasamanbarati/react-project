import { AccordionSummary, Typography } from "@mui/material";
import React from "react";

const Accordion_Title = ({category}) => {
  return (
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Typography>{category}</Typography>
    </AccordionSummary>
  );
};

export default Accordion_Title;
