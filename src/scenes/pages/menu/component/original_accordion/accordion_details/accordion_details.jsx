import React from 'react'
import { AccordionDetails,Typography } from '@mui/material'

const Accordion_Details = ({Details}) => {
  return ( 
  <AccordionDetails>
    <Typography>
      {Details}
    </Typography>
  </AccordionDetails>
  )
}

export default Accordion_Details