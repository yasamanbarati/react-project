import { Typography } from '@mui/material'
import React from 'react'

const Text = ({ text, variant, component, Size, weight }) => {
  return (
    <Typography
      variant={variant}
      component={component}
      sx={{ fontSize: Size, fontWeight: weight, textAlign: 'center' }}
    >
      {text}
    </Typography>
  )
}

export default Text
